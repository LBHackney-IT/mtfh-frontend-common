import { request } from "@hackney/mtfh-test-utils";
import { act, renderHook } from "@testing-library/react-hooks";

import { CommonAuth } from "../../auth";
import { useAxiosSWR, useAxiosSWRInfinite } from "./use-axios-swr";

describe("useAxiosSWR", () => {
  test("it configures useSWR correctly", async () => {
    // Arrange
    request({ method: "get", data: "request", path: "/api" });
    const auth = new CommonAuth();

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useAxiosSWR<string>("/api", auth),
    );

    // Assert
    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();
    expect(result.current.data).toBe("request");
  });
});

describe("useAxiosSWRInfinite", () => {
  test("it configures useSWRInfinite correctly", async () => {
    // Arrange
    request({ method: "get", data: "request 1", path: "/api/1" });
    request({ method: "get", data: "request 2", path: "/api/2" });
    const auth = new CommonAuth();

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useAxiosSWRInfinite<string>((index) => `/api/${index + 1}`, auth),
    );

    // Assert
    expect(result.current.data).toBe(undefined);
    await waitForNextUpdate();
    expect(result.current.data).toStrictEqual(["request 1"]);
    act(() => {
      result.current.setSize(result.current.size + 1).catch((e) => {
        throw e;
      });
    });

    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual(["request 1", "request 2"]);
  });
});
