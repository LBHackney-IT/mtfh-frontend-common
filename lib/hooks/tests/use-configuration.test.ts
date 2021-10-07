import { act, renderHook } from "@testing-library/react-hooks";
import { featureToggleStore } from "../../configuration";
import { useConfiguration } from "../use-configuration";

describe("useConfiguration", () => {
  test("it retrieves the correct configuration boolean value", () => {
    const features = featureToggleStore.getValue();
    const { result } = renderHook(() => useConfiguration("MMH.Test"));
    expect(result.current).toBe(false);
    act(() => {
      featureToggleStore.next({
        MMH: { ...features.MMH, Test: true },
      });
    });
    expect(result.current).toBe(true);
    act(() => {
      featureToggleStore.next(features);
    });
  });

  test("it retrieves the correct configuration string value", () => {
    const features = featureToggleStore.getValue();
    const { result } = renderHook(() => useConfiguration("MMH.TestConfig"));
    expect(result.current).toBe(false);
    act(() => {
      featureToggleStore.next({
        MMH: { ...features.MMH, TestConfig: "TestConfigString" },
      });
    });
    expect(result.current).toBe("TestConfigString");
    act(() => {
      featureToggleStore.next(features);
    });
  });
});
