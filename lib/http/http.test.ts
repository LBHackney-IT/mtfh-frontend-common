import { request, server } from "@hackney/mtfh-test-utils";
import { HttpResponse, http } from "msw";

import { $auth, browserLocation, voidUser } from "@mtfh/common/lib/auth";

import { axiosInstance, createCancelToken } from "./http";

const defaultRequest = { path: "/api", code: 200 };

describe("axiosInstance", () => {
  test("it calls with Authorization header", async () => {
    const MockToken = "mock-token";
    request({ method: "get", ...defaultRequest, data: "success" });

    $auth.next({
      ...voidUser,
      token: MockToken,
    });

    const res = await axiosInstance.get("/api");

    expect(res.config.headers.get("Authorization")).toBe(`Bearer ${MockToken}`);
    expect(res.data).toBe("success");
  });

  test("it throws an error on bad request", () => {
    request({ method: "get", ...defaultRequest, data: "failure", code: 500 });

    return expect(axiosInstance.get("/api")).rejects.toThrow(
      "Request failed with status code 500",
    );
  });

  test("it will logout on 403", async () => {
    $auth.next({
      token: "",
      sub: "",
      email: "",
      iss: "",
      name: "",
      iat: Number.NaN,
      groups: ["TEST_GROUP"],
    });
    request({ method: "get", ...defaultRequest, data: "failure", code: 403 });
    jest.spyOn(browserLocation, "reload").mockImplementation(() => undefined);

    await expect(axiosInstance.get("/api")).rejects.toThrow(
      "Request failed with status code 403",
    );

    expect(browserLocation.reload).toHaveBeenCalledTimes(1);
  });

  test("it can generate a cancel token", () => {
    const source = createCancelToken();
    expect(source.token).toBeTruthy();
  });

  test("etag is appended to response in get request", async () => {
    server.use(
      http.get("/api", () => {
        return HttpResponse.json(
          { id: "70a8d798-d707-4eee-8c9e-7fe1ecaf42cb" },
          {
            status: 200,
            headers: { ETag: '"1"' },
          },
        );
      }),
    );

    const res = await axiosInstance.get("/api");

    expect(res.data.etag).toBe('"1"');
  });

  test("etag in patch data is appended to If-Match header", async () => {
    server.use(
      http.patch("/api", async ({ request: req }) => {
        if (req.headers.has("If-Match")) {
          const body = await req.json();
          return HttpResponse.json(body, { status: 200 });
        }
        return HttpResponse.json({ error: "failed" }, { status: 500 });
      }),
    );

    const res = await axiosInstance.patch("/api", {
      id: "70a8d798-d707-4eee-8c9e-7fe1ecaf42cb",
      etag: "1",
    });

    expect(res.status).toBe(200);
    expect(res.data).toStrictEqual({
      id: "70a8d798-d707-4eee-8c9e-7fe1ecaf42cb",
    });
  });

  test("If-Match header is not sent when no etag is provided", async () => {
    server.use(
      http.patch("/api", ({ request: req }) => {
        if (req.headers.has("If-Match")) {
          return HttpResponse.json({ error: "failed" }, { status: 500 });
        }
        return HttpResponse.json({ success: true }, { status: 200 });
      }),
    );

    const res = await axiosInstance.patch("/api");

    expect(res.status).toBe(200);
    expect(res.data).toStrictEqual({ success: true });
  });

  test("x-correlation-id is appended to the request headers as a uuid v4", async () => {
    const uuidV4Pattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    let correlationId: string | null = null;

    server.use(
      http.get("/api", ({ request: req }) => {
        correlationId = req.headers.get("x-correlation-id");
        if (correlationId) {
          return new HttpResponse(null, { status: 200 });
        }
        return new HttpResponse(null, { status: 500 });
      }),
    );

    const res = await axiosInstance.get("/api");

    expect(res.status).toBe(200);
    expect(correlationId).toMatch(uuidV4Pattern);
    expect(res.config.headers.get("x-correlation-id")).toBe(correlationId);
  });

  test("x-correlation-id is unique on each request", async () => {
    const correlationIds: string[] = [];

    server.use(
      http.get("/api", ({ request: req }) => {
        correlationIds.push(req.headers.get("x-correlation-id") ?? "");
        return new HttpResponse(null, { status: 200 });
      }),
    );

    await axiosInstance.get("/api");
    await axiosInstance.get("/api");

    expect(correlationIds).toHaveLength(2);
    expect(correlationIds[0]).toBeTruthy();
    expect(correlationIds[1]).toBeTruthy();
    expect(correlationIds[0]).not.toBe(correlationIds[1]);
  });

  test("x-correlation-id is not appended to the request headers if skip-x-correlation-id is", async () => {
    server.use(
      http.get("/api", ({ request: req }) => {
        if (req.headers.has("x-correlation-id")) {
          return new HttpResponse(null, { status: 500 });
        }
        return new HttpResponse(null, { status: 200 });
      }),
    );

    const res = await axiosInstance.get("/api", {
      headers: { "skip-x-correlation-id": true },
    });

    expect(res.status).toBe(200);
  });

  test("returned request object preserves original config fields", async () => {
    request({ method: "get", ...defaultRequest, data: "success" });

    const res = await axiosInstance.get("/api", {
      timeout: 5000,
      params: { q: "test" },
    });

    expect(res.config.timeout).toBe(5000);
    expect(res.config.params).toEqual({ q: "test" });
  });
});
