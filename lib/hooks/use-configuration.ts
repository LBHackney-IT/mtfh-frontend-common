import { useEffect, useState } from "react";
import {
  AppConfigPaths,
  configurationStore,
  hasAppConfig,
} from "@mtfh/common/lib/configuration";

export const useConfiguration = (path: AppConfigPaths): string => {
  const [config, setConfig] = useState(hasAppConfig(path));

  useEffect(() => {
    const subscription = configurationStore.subscribe(() => {
      setConfig(hasAppConfig(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return config;
};
