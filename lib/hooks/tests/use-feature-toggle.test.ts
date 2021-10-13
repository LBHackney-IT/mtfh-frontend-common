import { act, renderHook } from "@testing-library/react-hooks";
import { configurationStore } from "../../configuration";
import { useFeatureToggle } from "../use-feature-toggle";

describe("useFeatureToggle", () => {
  beforeEach(() => {
    configurationStore.next({});
  });

  test("it returns false for unconfigured toggle", async () => {
    const { result } = renderHook(() => useFeatureToggle("MMH.Test"));
    expect(result.current).toBe(false);
  });

  test("it retrieves the correct toggle", async () => {
    configurationStore.next({
      MMH: {
        configuration: {},
        featureToggles: {
          Test: true,
        },
      },
    });
    const { result } = renderHook(() => useFeatureToggle("MMH.Test"));
    expect(result.current).toBe(true);
  });

  test("it listens to updated to feature toggles", async () => {
    configurationStore.next({
      MMH: {
        configuration: {},
        featureToggles: {
          Test: false,
        },
      },
    });
    const { result } = renderHook(() => useFeatureToggle("MMH.Test"));
    expect(result.current).toBe(false);

    act(() => {
      configurationStore.next({
        MMH: {
          configuration: {},
          featureToggles: {
            Test: true,
          },
        },
      });
    });

    expect(result.current).toBe(true);
  });
});
