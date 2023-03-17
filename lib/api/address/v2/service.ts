import { config } from "../../../config";
import type { Address } from "./types";

interface AddressAPIv2Response {
  data: { address: Address[] };
}

interface SearchAddressResponse {
  addresses?: Address[];
  error?: { code: number };
}

export const getAddressViaUprn = (UPRN: string): Promise<SearchAddressResponse> =>
  axiosInstance
    .get<AddressAPIv2Response>(`${config.addressApiUrlV2}/addresses/${UPRN}`, {
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

export const useAddressLookupUprn = (
  uprn?: string | null,
  options: AxiosSWRConfiguration<AddressAPIv2Response> = {},
) => {
  return useAxiosSWR<AddressAPIv2Response>(
    uprn ? `${config.addressApiUrlV2}/addresses/${uprn}` : null,
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
