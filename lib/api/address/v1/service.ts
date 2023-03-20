import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import { AxiosSWRConfiguration, getAxiosInstance, useAxiosSWR } from "../../../http";

import type { Address } from "./types";

export interface AddressAPIResponse {
  data: { address: Address[] };
}

interface SearchAddressResponse {
  addresses?: Address[];
  error?: { code: number };
}

export const searchAddress = async (
  postCode: string,
  auth: CommonAuth,
): Promise<SearchAddressResponse> => {
  const axiosInstance = getAxiosInstance(auth);

  return axiosInstance
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
};

export const getAddressViaUprn = async (
  uprn: string,
  auth: CommonAuth,
): Promise<SearchAddressResponse> => {
  const axiosInstance = getAxiosInstance(auth);

  return axiosInstance
    .get<AddressAPIResponse>(`${config.addressApiUrlV1}/addresses?uprn=${uprn}`, {
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
};

export const useAddressLookup = (
  auth: CommonAuth,
  postCode?: string | null,
  options: AxiosSWRConfiguration<AddressAPIResponse> = {},
) => {
  return useAxiosSWR<AddressAPIResponse>(
    postCode ? `${config.addressApiUrlV1}/addresses?postcode=${postCode}` : null,
    auth,
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
