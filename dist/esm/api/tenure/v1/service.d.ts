import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import { HouseholdMember, Tenure, TenureAsset, TenureType } from "./types";
export declare const useTenure: (id: string | null, options?: AxiosSWRConfiguration<Tenure>) => AxiosSWRResponse<Tenure>;
export interface TenureParams {
    startOfTenureDate: string;
    endOfTenureDate?: string | null;
    tenureType: TenureType;
}
export interface AddTenureParams extends TenureParams {
    tenuredAsset: TenureAsset;
}
export declare const addTenure: (params: AddTenureParams) => Promise<Tenure>;
export interface AddPersonToTenureParams {
    etag: string;
    tenureId: string;
    householdMember: HouseholdMember;
}
export declare const addPersonToTenure: ({ tenureId, householdMember, etag, }: AddPersonToTenureParams) => Promise<void>;
export interface RemovePersonFromTenureParams {
    etag: string;
    tenureId: string;
    householdMemberId: string;
}
export declare const removePersonFromTenure: (params: RemovePersonFromTenureParams) => Promise<void>;
export interface EditTenureParams extends Partial<TenureParams> {
    id: string;
    etag: string;
}
export declare const editTenure: ({ id, ...data }: EditTenureParams) => Promise<void>;
