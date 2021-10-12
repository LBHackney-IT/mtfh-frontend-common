import { act, renderHook } from "@testing-library/react-hooks";
import { configurationStore } from "../../configuration";
import { useConfiguration } from "../use-configuration";

describe("useConfiguration", () => {
  test("it retrieves the correct configuration string value", () => {
    const features = configurationStore.getValue();
    const { result } = renderHook(() => useConfiguration("MMH.TestConfig"));
    expect(result.current).toBe("");
    act(() => {
      configurationStore.next({
        MMH: {
          ...features.MMH,
          AppConfigs: {
            ...features.MMH.AppConfigs,
            TestConfig: "TestConfigString",
          },
        },
      });
    });
    expect(result.current).toBe("TestConfigString");
    act(() => {
      configurationStore.next(features);
    });
  });
});
