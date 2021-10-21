import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";
import { Address } from "./types";

interface SearchAddressResponse {
  data: { address: Address[] };
}

export const searchAddress = (postCode: string): Promise<Address[]> =>
  axiosInstance
    .get<SearchAddressResponse>(
      `${config.addressApiUrlV1}/addresses?postcode=${postCode}`,
      {
        headers: {
          "skip-x-correlation-id": true,
        },
      },
    )
    .then((res) => res.data.data.address)
    .catch((res) => res);
