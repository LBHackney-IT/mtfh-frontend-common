import { useEffect, useState } from "react";
import {
  ConfigurationPaths,
  configurationStore,
  isConfiguration,
} from "@mtfh/common/lib/configuration";

export const useConfiguration = (path: ConfigurationPaths): string => {
  const [config, setConfig] = useState(isConfiguration(path));

  useEffect(() => {
    const subscription = configurationStore.subscribe(() => {
      setConfig(isConfiguration(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return config;
};
