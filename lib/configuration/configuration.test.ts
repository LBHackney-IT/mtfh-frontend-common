import { request } from "@hackney/mtfh-test-utils";
import { configurationStore, getConfiguration, hasConfiguration } from "./configuration";

const initialStore = configurationStore.getValue();

beforeEach(() => {
  configurationStore.next(initialStore);
  window.localStorage.removeItem("features");
});

test("configuration is set from instatiation", () => {
  expect(hasConfiguration("MMH.Test")).toBe(false);
});

test("configuration is hydrated from localStorage first", async () => {
  request({ method: "get", data: [], path: "/api/v1/configuration" });
  window.localStorage.setItem("features", JSON.stringify({ MMH: { Test: true } }));
  await getConfiguration();
  expect(hasConfiguration("MMH.Test")).toBe(true);
});

test("configuration not hydrated if localStorage is malformed", async () => {
  request({ method: "get", data: [], path: "/api/v1/configuration" });
  window.localStorage.setItem("features", JSON.stringify(1));
  await getConfiguration();
  expect(hasConfiguration("MMH.Test")).toBe(false);
});

test("configuration is hydrated from api", async () => {
  request({
    method: "get",
    data: [{ type: "MMH", featureToggles: { Test: true } }],
    path: "/api/v1/configuration",
  });
  await getConfiguration();
  expect(hasConfiguration("MMH.Test")).toBe(true);
});

test("configuration is persisted to localStorage on success", async () => {
  request({
    method: "get",
    data: [{ type: "MMH", featureToggles: { Test: true } }],
    path: "/api/v1/configuration",
  });
  await getConfiguration();
  expect(window.localStorage.getItem("features")).toContain('"Test":true');
});

test("configuration is hydrated from api", async () => {
  request({
    method: "get",
    data: [
      {
        type: "MMH",
        featureToggles: { Test: true },
        configuration: { TestConfig: "TestConfigString" },
      },
    ],
    path: "/api/v1/configuration",
  });
  await getConfiguration();
  expect(hasConfiguration("MMH.TestConfig")).toBe("TestConfigString");
});
