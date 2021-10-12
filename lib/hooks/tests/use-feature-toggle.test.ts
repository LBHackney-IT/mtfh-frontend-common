import { act, renderHook } from "@testing-library/react-hooks";
import { configurationStore } from "../../configuration";
import { useFeatureToggle } from "../use-feature-toggle";

describe("useFeatureToggle", () => {
  test("it retrieves the correct toogle", () => {
    const features = configurationStore.getValue();
    const { result } = renderHook(() => useFeatureToggle("MMH.Test"));
    expect(result.current).toBe(false);
    act(() => {
      configurationStore.next({
        MMH: {
          ...features.MMH,
          featureToggles: {
            ...features.MMH.featureToggles,
            Test: true,
          },
        },
      });
    });
    expect(result.current).toBe(true);
    act(() => {
      configurationStore.next(features);
    });
  });
});
