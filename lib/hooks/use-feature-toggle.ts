import { useEffect, useState } from "react";
import {
  ConfigurationPaths,
  configurationStore,
  isToggle,
} from "@mtfh/common/lib/configuration";

export const useFeatureToggle = (path: ConfigurationPaths): boolean => {
  const [toggle, setToggle] = useState(isToggle(path));

  useEffect(() => {
    const subscription = configurationStore.subscribe(() => {
      setToggle(isToggle(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return toggle;
};
