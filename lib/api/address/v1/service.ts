import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";
import { Address } from "./types";

interface AddressAPIResponse {
  data: { address: Address[] };
}

interface SearchAddressRespone {
  addresses?: Address[];
  error?: { code: number };
}

export const searchAddress = (postCode: string): Promise<SearchAddressRespone> =>
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
