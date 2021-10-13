import { act, renderHook } from "@testing-library/react-hooks";
import { $configurationStore } from "../../configuration";
import { useConfiguration } from "../use-configuration";

describe("useConfiguration", () => {
  beforeEach(() => {
    $configurationStore.next({});
  });

  test("it returns an empty string for when no configuration is found", () => {
    const { result } = renderHook(() => useConfiguration("MMH.TestConfig"));
    expect(result.current).toBe("");
  });

  test("it returns the correct configuratio value", () => {
    $configurationStore.next({
      MMH: {
        configuration: {
          TestConfig: "TestConfigString",
        },
        featureToggles: {},
      },
    });
    const { result } = renderHook(() => useConfiguration("MMH.TestConfig"));
    expect(result.current).toBe("TestConfigString");
  });

  test("it listens to updated on configuration", () => {
    $configurationStore.next({
      MMH: {
        configuration: {},
        featureToggles: {},
      },
    });
    const { result } = renderHook(() => useConfiguration("MMH.TestConfig"));
    expect(result.current).toBe("");

    act(() => {
      $configurationStore.next({
        MMH: {
          configuration: {
            TestConfig: "TestConfigString",
          },
          featureToggles: {},
        },
      });
    });

    expect(result.current).toBe("TestConfigString");
  });
});
