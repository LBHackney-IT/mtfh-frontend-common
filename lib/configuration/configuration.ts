import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "../http/http";
import { featureToggleStore, initialFeatureToggles } from "./feature-toggle";

export type Configuration = {
  type: "MMH" | "Common";
  configuration: Record<string, string>;
  featureToggles: Record<string, boolean>;
};

export const getConfiguration = async (): Promise<void> => {
  try {
    const features = JSON.parse(
      window.localStorage.getItem("features") || "",
    ) as typeof initialFeatureToggles;

    if (typeof features === "object") {
      featureToggleStore.next(features);
    } else {
      throw new Error("Invalid feature store in local storage");
    }
  } catch (e) {
    if (localStorage.getItem("features")) {
      window.localStorage.removeItem("features");
    }
  }

  try {
    const res = await axiosInstance.get<Configuration[]>(
      `${config.configurationApiUrlV1}/api/v1/configuration?types=MMH`,
    );
    res.data.forEach(({ type, featureToggles }) => {
      const toggles = featureToggleStore.getValue();
      featureToggleStore.next({
        ...toggles,
        [type]: {
          ...featureToggles,
        },
      });
    });
    window.localStorage.setItem(
      "features",
      JSON.stringify(featureToggleStore.getValue()),
    );
  } catch (e) {
    // TODO add logging for failed configuration
  }
};
