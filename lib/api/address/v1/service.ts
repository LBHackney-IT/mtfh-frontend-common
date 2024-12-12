import { config } from "@mtfh/common/lib/config";
import { AxiosSWRConfiguration, axiosInstance, useAxiosSWR } from "@mtfh/common/lib/http";

import type { Address } from "./types";

export interface AddressAPIResponse {
  data: {
    address: Address[];
    total_count: number;
  };
}

interface SearchAddressResponse {
  addresses?: Address[];
  error?: { code: number };
  totalCount?: number;
}

export const searchAddress = async (
  postCode: string,
  structure?: string,
): Promise<SearchAddressResponse> =>
  axiosInstance
    .get<AddressAPIResponse>(
      `${config.addressApiUrlV1}/addresses?postcode=${postCode}${
        structure ? `&Structure=${structure}` : ""
      }`,
      {
        headers: {
          "skip-x-correlation-id": true,
        },
      },
    )
    .then((res) => ({
      addresses: res.data.data.address,
      totalCount: res.data.data.total_count,
    }))
    .catch((res) => {
      if (res.message.toLowerCase().indexOf("network") !== -1) {
        return { error: { code: 500 } };
      }
      return res;
    });

export const getAddressViaUprn = async (UPRN: string): Promise<SearchAddressResponse> => {
  return new Promise<SearchAddressResponse>((resolve, reject) => {
    axiosInstance
      .get<AddressAPIResponse>(`${config.addressApiUrlV1}/addresses?uprn=${UPRN}`, {
        headers: {
          "skip-x-correlation-id": true,
        },
      })
      .then((res) => resolve({ addresses: res.data.data.address }))
      .catch((error) => reject(error));
  });
};

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
