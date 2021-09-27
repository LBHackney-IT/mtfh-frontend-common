import { act, renderHook } from "@testing-library/react-hooks";
import { featureToggleStore } from "../../configuration";
import { useFeatureToggle } from "../use-feature-toggle";

describe("useFeatureToggle", () => {
  test("it retrieves the correct toogle", () => {
    const features = featureToggleStore.getValue();
    const { result } = renderHook(() => useFeatureToggle("MMH.Test"));
    expect(result.current).toBe(false);
    act(() => {
      featureToggleStore.next({ MMH: { ...features.MMH, Test: true } });
    });
    expect(result.current).toBe(true);
    act(() => {
      featureToggleStore.next(features);
    });
  });
});
