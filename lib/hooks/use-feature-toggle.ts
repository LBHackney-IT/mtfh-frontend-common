import { useEffect, useState } from "react";
import { configurationStore, getFeatureToggle } from "@mtfh/common/lib/configuration";

export const useFeatureToggle = (path: string): boolean => {
  const [toggle, setToggle] = useState(getFeatureToggle(path));

  useEffect(() => {
    const subscription = configurationStore.subscribe(() => {
      setToggle(getFeatureToggle(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return toggle;
};
