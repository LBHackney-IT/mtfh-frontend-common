import { useEffect, useState } from 'react';
import {
  FeatureTogglePaths,
  featureToggleStore,
  hasToggle,
} from '@mtfh/common/lib/configuration';

export const useFeatureToggle = (path: FeatureTogglePaths): boolean => {
  const [toggle, setToggle] = useState(hasToggle(path));

  useEffect(() => {
    const subscription = featureToggleStore.subscribe(() => {
      setToggle(hasToggle(path));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [path]);

  return toggle;
};
