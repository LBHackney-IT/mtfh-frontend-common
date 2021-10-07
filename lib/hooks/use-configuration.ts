import { useEffect, useState } from "react";
import {
  FeatureTogglePaths,
  configurationStore,
  hasConfiguration,
} from "@mtfh/common/lib/configuration";

export const useConfiguration = (path: FeatureTogglePaths): string | boolean => {
  const [config, setConfig] = useState(hasConfiguration(path));

  useEffect(() => {
    const subscription = configurationStore.subscribe(() => {
      setConfig(hasConfiguration(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return config;
};
