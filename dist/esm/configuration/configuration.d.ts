import { BehaviorSubject } from "rxjs";
declare type Configuration = {
    configuration: Record<string, string | undefined>;
    featureToggles: Record<string, boolean | undefined>;
};
declare type ConfigCollection = Record<string, Configuration>;
export declare const hydrateConfiguration: () => ConfigCollection;
export declare const $configuration: BehaviorSubject<ConfigCollection>;
export declare const getConfiguration: () => Promise<void>;
export declare const getConfigItem: (path: string) => string;
export declare const getFeatureToggle: (path: string) => boolean;
export {};
