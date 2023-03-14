import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";
import { AxiosSWRConfiguration, useAxiosSWR } from "@mtfh/common/lib/http/use-axios-swr";

import {
  AddressAPIResponse,
  getAddressViaUprn,
  searchAddress,
  useAddressLookup,
} from "./service";
import { Address } from "./types";

jest.mock("@mtfh/common/lib/http", () => ({
  // ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: { get: jest.fn() },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

test("searchAddress: the API is called with the right parameters", async () => {
  const postcode = "FK81FH";

  searchAddress(postcode);

  expect(axiosInstance.get).toBeCalledWith(
    `${config.addressApiUrlV1}/addresses?postcode=${postcode}`,
    { headers: { "skip-x-correlation-id": true } },
  );
});

test("getAddressViaUprn: the API is called with the right parameters", async () => {
  const uprn = "0123456789";

  getAddressViaUprn(uprn);

  expect(axiosInstance.get).toBeCalledWith(
    `${config.addressApiUrlV1}/addresses?uprn=${uprn}`,
    { headers: { "skip-x-correlation-id": true } },
  );
});

test("useAddressLookup: the API is called with the right parameters", async () => {
  const returnedValue: Address = {
    line1: "35 Weir Street",
    line2: "",
    line3: "",
    line4: "",
    town: "Stirling",
    postcode: "FK81FH",
    UPRN: 1234,
  };
  const postcode = "FK81FH";
  const options: AxiosSWRConfiguration<AddressAPIResponse> = {
    timeout: 5000,
    headers: {
      "skip-x-correlation-id": true,
    },
  };

  (useAxiosSWR as jest.Mock).mockResolvedValueOnce(returnedValue);

  const response = await useAddressLookup(postcode, options);
  expect(useAxiosSWR).toBeCalledWith(
    `${config.addressApiUrlV1}/addresses?postcode=${postcode}`,
    options,
  );
  expect(response).toBe(returnedValue);
});
