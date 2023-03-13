import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import type { ReferenceData } from "./types";
declare type ReferenceDataResponse<T extends string> = {
    [key in T]: ReferenceData[];
};
interface ReferenceDataRequestParams {
    category: string;
    subCategory?: string;
}
export declare const useReferenceData: <T extends string>({ category, subCategory }: ReferenceDataRequestParams, options?: AxiosSWRConfiguration<ReferenceDataResponse<T>>) => AxiosSWRResponse<ReferenceDataResponse<T>>;
export {};
