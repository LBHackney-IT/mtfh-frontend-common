import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import { AxiosSWRConfiguration, getAxiosInstance, useAxiosSWR } from "../../../http";

import type { Address } from "./types";

interface AddressAPIv2Response {
  data: { address: Address[] };
}

interface SearchAddressResponse {
  addresses?: Address[];
  error?: { code: number };
}

export const getAddressViaUprn = (
  uprn: string,
  auth: CommonAuth,
): Promise<SearchAddressResponse> => {
  const axiosInstance = getAxiosInstance(auth);

  return axiosInstance
    .get<AddressAPIv2Response>(`${config.addressApiUrlV2}/addresses/${uprn}`, {
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

export const useAddressLookupUprn = (
  auth: CommonAuth,
  uprn?: string | null,
  options: AxiosSWRConfiguration<AddressAPIv2Response> = {},
) => {
  return useAxiosSWR<AddressAPIv2Response>(
    uprn ? `${config.addressApiUrlV2}/addresses/${uprn}` : null,
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
