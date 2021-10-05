import { BehaviorSubject } from "rxjs";

type PathImpl<T, Key extends keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
        | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
    : never
  : never;

type Path<T> = PathImpl<T, keyof T>;

export type FeatureTogglePaths = Path<typeof initialFeatureToggles>;

export const initialFeatureToggles = {
  MMH: {
    Test: false,
    CreateTenure: false,
    EditTenure: false,
    EnhancedComments: false,
    AddPersonToTenureOnEditTenure: false,
    XCorrelationId: false,
  },
};

export const featureToggleStore = new BehaviorSubject(initialFeatureToggles);

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
  return typeof result === "boolean" ? result : false;
};
