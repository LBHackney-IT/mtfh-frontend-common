import { useEffect, useState } from "react";
import {
  configurationStore,
  FeatureTogglePaths,
  hasToggle,
} from "@mtfh/common/lib/configuration";

export const useFeatureToggle = (path: FeatureTogglePaths): boolean => {
  const [toggle, setToggle] = useState(hasToggle(path));

  useEffect(() => {
    const subscription = configurationStore.subscribe(() => {
      setToggle(hasToggle(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return toggle;
};
