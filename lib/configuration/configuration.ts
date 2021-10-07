import { BehaviorSubject } from "rxjs";
import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

export type Configuration = {
  type: "MMH" | "Common";
  configuration: Record<string, string>;
  featureToggles: Record<string, boolean>;
};

const initialConfiguration = {
  MMH: {
    Test: false,
    CreateTenure: false,
    EditTenure: false,
    EnhancedComments: false,
    EnhancedPersonComments: false,
    AddPersonToTenureOnEditTenure: false,
    XCorrelationId: false,
    WarningComponents: false,
    Stepper: false,
    TestConfig: "",
  },
};

export const configurationStore = new BehaviorSubject(initialConfiguration);

type PathImpl<T, Key extends keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
        | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
    : never
  : never;

type Path<T> = PathImpl<T, keyof T>;

export type FeatureTogglePaths = Path<typeof initialConfiguration>;

<<<<<<< HEAD
=======
configurationStore.subscribe((features) =>
  $options.next({ xCorrelationId: features.MMH.XCorrelationId }),
);

>>>>>>> a219df9 (feat(TL-90): updated param names)
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

export const hasConfiguration = (path: FeatureTogglePaths): any => {
  const configs = configurationStore.getValue();
  const pathArray = path.match(/([^[.\]])+/g);
  const result =
    pathArray?.reduce((prevObj, key): any => {
      if (prevObj && prevObj[`${key}` as keyof typeof prevObj]) {
        return prevObj[`${key}` as keyof typeof prevObj];
      }
      return undefined;
    }, configs) || undefined;
  // return typeof result === "boolean" ? result : false;
  return result ?? false;
};
