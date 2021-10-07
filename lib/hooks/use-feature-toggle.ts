import { useEffect, useState } from "react";
import {
  FeatureTogglePaths,
  configurationStore,
  hasConfiguration,
} from "@mtfh/common/lib/configuration";

export const useFeatureToggle = (path: FeatureTogglePaths): string | boolean => {
  const [toggle, setToggle] = useState(hasConfiguration(path));

  useEffect(() => {
    const subscription = configurationStore.subscribe(() => {
      setToggle(hasConfiguration(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return toggle;
};
