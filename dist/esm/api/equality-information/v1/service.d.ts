import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import type { EqualityData } from "./types";
export declare const useEqualityInformation: (targetId: string, options?: AxiosSWRConfiguration<EqualityData>) => AxiosSWRResponse<EqualityData>;
export declare const useEqualityInformationById: (id: string, targetId: string, options?: AxiosSWRConfiguration<EqualityData>) => AxiosSWRResponse<EqualityData>;
export declare const addEqualityInformation: (data: Omit<EqualityData, "id">) => Promise<import("axios").AxiosResponse<any>>;
export declare const updateEqualityInformation: (id: string, data: Omit<EqualityData, "id">) => Promise<import("axios").AxiosResponse<any>>;
