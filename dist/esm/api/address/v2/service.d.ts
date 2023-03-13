import { AxiosSWRConfiguration } from "@mtfh/common/lib/http";
import type { Address } from "./types";
interface AddressAPIv2Response {
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
export declare const getAddressViaUprn: (UPRN: string) => Promise<SearchAddressResponse>;
export declare const useAddressLookupUprn: (uprn?: string | null, options?: AxiosSWRConfiguration<AddressAPIv2Response>) => import("@mtfh/common/lib/http").AxiosSWRResponse<AddressAPIv2Response>;
export {};
