import { AxiosSWRConfiguration } from "@mtfh/common/lib/http";
import type { Address } from "./types";
export interface AddressAPIResponse {
    data: {
        address: Address[];
    };
}
interface SearchAddressResponse {
    addresses?: Address[];
    error?: {
        code: number;
    };
}
export declare const searchAddress: (postCode: string) => Promise<SearchAddressResponse>;
export declare const getAddressViaUprn: (UPRN: string) => Promise<SearchAddressResponse>;
export declare const useAddressLookup: (postCode?: string | null, options?: AxiosSWRConfiguration<AddressAPIResponse>) => import("@mtfh/common/lib/http").AxiosSWRResponse<AddressAPIResponse>;
export {};
