import { config } from "@mtfh/common/lib/config";
import { AxiosSWRConfiguration, axiosInstance, useAxiosSWR } from "@mtfh/common/lib/http";

import type { Address } from "./types";

interface AddressAPIResponse {
  data: { address: Address[] };
}

interface SearchAddressResponse {
  addresses?: Address[];
  error?: { code: number };
}

export const searchAddress = (postCode: string): Promise<SearchAddressResponse> =>
  axiosInstance
    .get<AddressAPIResponse>(`${config.addressApiUrlV1}/addresses?postcode=${postCode}`, {
      headers: {
        "skip-x-correlation-id": true,
      },
    })
    .then((res) => ({ addresses: res.data.data.address }))
    .catch((res) => {
      if (res.message.toLowerCase().indexOf("network") !== -1) {
        return { error: { code: 500 } };
      }
      return res;
    });

export const getAddressViaUprn = (UPRN: string): Promise<SearchAddressResponse> =>
  axiosInstance
    .get<AddressAPIResponse>(`${config.addressApiUrlV1}/addresses?uprn=${UPRN}`, {
      headers: {
        "skip-x-correlation-id": true,
      },
    })
    .then((res) => ({ addresses: res.data.data.address }))
    .catch((res) => {
      if (res.message.toLowerCase().indexOf("network") !== -1) {
        return { error: { code: 500 } };
      }
      return res;
    });

export const useAddressLookup = (
  postCode?: string | null,
  options: AxiosSWRConfiguration<AddressAPIResponse> = {},
) => {
  return useAxiosSWR<AddressAPIResponse>(
    postCode ? `${config.addressApiUrlV1}/addresses?postcode=${postCode}` : null,
    {
      ...options,
      timeout: 5000,
      headers: {
        ...options.headers,
        "skip-x-correlation-id": true,
      },
    },
  );
};
