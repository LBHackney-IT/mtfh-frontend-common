import { config } from "@mtfh/common/lib/config";
import { AxiosSWRConfiguration, axiosInstance, useAxiosSWR } from "@mtfh/common/lib/http";

import {
  AddressAPIResponse,
  getAddressViaUprn,
  searchAddress,
  useAddressLookup,
} from "./service";
import { Address } from "./types";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: {
    get: jest.fn().mockImplementation(() =>
      Promise.resolve({
        data: {
          data: {
            address: "",
          },
        },
      }),
    ),
  },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

describe("searchAddress", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
    const postcode = "FK81FH";

    await searchAddress(postcode);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?postcode=${postcode}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});

describe("getAddressViaUprn", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
    const uprn = "0123456789";

    await getAddressViaUprn(uprn);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?uprn=${uprn}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});

describe("useAddressLookup", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
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
});
