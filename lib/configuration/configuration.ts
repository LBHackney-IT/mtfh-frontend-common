import { BehaviorSubject } from "rxjs";
import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

export type Configuration = {
  type: "MMH" | "Common";
  configuration: Record<string, string>;
  featureToggles: Record<string, boolean>;
};

export type AppConfigPaths = "MMH.TestConfig";
export type FeatureTogglePaths =
  | "MMH.Test"
  | "MMH.CreateTenure"
  | "MMH.EditTenure"
  | "MMH.EnhancedComments"
  | "MMH.EnhancedPersonComments"
  | "MMH.AddPersonToTenureOnEditTenure"
  | "MMH.XCorrelationId"
  | "MMH.WarningComponents"
  | "MMH.Stepper";

export type ConfigurationPaths = AppConfigPaths | FeatureTogglePaths;

const initialConfiguration = {
  MMH: {
    AppConfigs: {
      TestConfig: "",
    },
    FeatureToggles: {
      Test: false,
      CreateTenure: false,
      EditTenure: false,
      EnhancedComments: false,
      EnhancedPersonComments: false,
      AddPersonToTenureOnEditTenure: false,
      XCorrelationId: false,
      WarningComponents: false,
      Stepper: false,
    },
  },
};

export const configurationStore = new BehaviorSubject(initialConfiguration);

export const getConfiguration = async (): Promise<void> => {
  try {
    const features = JSON.parse(
      window.localStorage.getItem("features") || "",
    ) as typeof initialConfiguration;

    if (typeof features === "object") {
      configurationStore.next(features);
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
    res.data.forEach(({ type, featureToggles, configuration }) => {
      const configs = configurationStore.getValue();
      configurationStore.next({
        ...configs,
        [type]: {
          ...featureToggles,
          ...configuration,
        },
      });
    });
    window.localStorage.setItem(
      "features",
      JSON.stringify(configurationStore.getValue()),
    );
  } catch (e) {
    // TODO add logging for failed configuration
  }
};

export const hasAppConfig = (path: AppConfigPaths): string => {
  const configs: any = configurationStore.getValue();
  const [stream, key] = path.split(".");
  const pathResult = configs[`${stream}`][`${key}`];
  return pathResult ?? "";
};

export const hasToggle = (path: FeatureTogglePaths): boolean => {
  const configs: any = configurationStore.getValue();
  const [stream, key] = path.split(".");
  const pathResult = configs[`${stream}`][`${key}`];
  return typeof pathResult === "boolean" ? pathResult : false;
};
