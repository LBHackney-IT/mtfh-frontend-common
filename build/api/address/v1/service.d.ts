import { AxiosSWRConfiguration } from "@mtfh/common/lib/http";
import type { Address } from "./types";
export interface AddressAPIResponse {
  data: {
    address: Address[];
    page_count?: number;
    total_count?: number;
  };
}
export interface SearchAddressResponse {
  addresses?: Address[];
  pageCount?: number;
  totalCount?: number;
  error?: {
    code: number;
  };
}
export declare const searchAddress: (
  postCode: string,
  structure?: string,
) => Promise<SearchAddressResponse>;
export declare const getAddressViaUprn: (
  UPRN: string,
  isParentUPRN?: boolean,
  page?: number,
  pageSize?: number,
) => Promise<SearchAddressResponse>;
export declare const useAddressLookup: (
  postCode?: string | null,
  options?: AxiosSWRConfiguration<AddressAPIResponse>,
) => import("@mtfh/common/lib/http").AxiosSWRResponse<AddressAPIResponse>;
//# sourceMappingURL=service.d.ts.map
