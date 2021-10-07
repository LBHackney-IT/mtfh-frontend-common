import { useEffect, useState } from "react";
import {
  FeatureTogglePaths,
  featureToggleStore,
  hasToggle,
} from "@mtfh/common/lib/configuration";

export const useConfiguration = (path: FeatureTogglePaths): string | boolean => {
  const [config, setConfig] = useState(hasToggle(path));

  useEffect(() => {
    const subscription = featureToggleStore.subscribe(() => {
      setConfig(hasToggle(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return config;
};
