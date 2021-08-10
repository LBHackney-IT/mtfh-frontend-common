import { BehaviorSubject } from 'rxjs';
import { axiosInstance } from '../api';
import { config } from '../config';

export type Configuration = {
  type: 'MMH' | 'Common';
  configuration: Record<string, string>;
  featureToggles: Record<string, boolean>;
};

const initialFeatureToggles = {
  MMH: {
    SearchTenure: false,
  },
};

export const featureToggleStore = new BehaviorSubject(initialFeatureToggles);

type PathImpl<T, Key extends keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> &
            string}`
        | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
    : never
  : never;

type Path<T> = PathImpl<T, keyof T>;

export type FeatureTogglePaths = Path<typeof initialFeatureToggles>;

export const getConfiguration = async (): Promise<void> => {
  try {
    const features = JSON.parse(
      window.localStorage.getItem('features') || ''
    ) as typeof initialFeatureToggles;

    if (typeof features === 'object') {
      featureToggleStore.next(features);
    } else {
      throw new Error('Invalid feature store in local storage');
    }
  } catch (e) {
    if (localStorage.getItem('features')) {
      window.localStorage.removeItem('features');
    }
  }

  try {
    const res = await axiosInstance.get<Configuration[]>(
      `${config.configurationApiUrl}/api/v1/configuration?types=MMH`
    );
    res.data.forEach(({ type, featureToggles }) => {
      const toggles = featureToggleStore.getValue();
      featureToggleStore.next({
        ...toggles,
        [type]: {
          ...featureToggles,
        },
      });
    });
    window.localStorage.setItem(
      'features',
      JSON.stringify(featureToggleStore.getValue())
    );
  } catch (e) {
    // TODO add logging for failed configuration
  }
};

export const hasToggle = (path: FeatureTogglePaths): boolean => {
  const toggles = featureToggleStore.getValue();
  const pathArray = path.match(/([^[.\]])+/g);
  const result =
    pathArray?.reduce((prevObj, key): any => {
      if (prevObj && prevObj[`${key}` as keyof typeof prevObj]) {
        return prevObj[`${key}` as keyof typeof prevObj];
      }
      return undefined;
    }, toggles) || undefined;
  return typeof result === 'boolean' ? result : false;
};
