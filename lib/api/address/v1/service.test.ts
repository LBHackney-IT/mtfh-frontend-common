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

const postcode = "E8 1EA";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("when searchAddress is called", () => {
  test("the request should be sent to the correct URL, with the correct postcode as a query parameter", async () => {
    await searchAddress(postcode);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?postcode=${postcode}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });

  test("when structure is requested the request should be sent to the correct URL, with the correct structure as a query parameter", async () => {
    const structure = "Hierarchy";
    await searchAddress(postcode, structure);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?postcode=${postcode}&Structure=${structure}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});

describe("when getAddressViaUprn is called", () => {
  test("the request should be sent to the correct URL, with the correct UPRN as a query parameter", async () => {
    const uprn = "0123456789";

    await getAddressViaUprn(uprn);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?uprn=${uprn}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });

  test("the request should be sent to the correct URL, with correct UPRN as a query parameter when using parent UPRN", async () => {
    const uprn = "0123456789";

    await getAddressViaUprn(uprn, true);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?parentUprn=${uprn}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});

describe("when useAddressLookup is called", () => {
  test("the request should be sent to the correct URL, with the correct options and postcode as a query parameter", async () => {
    const returnedValue: Address = {
      line1: "123 Test Street",
      line2: "",
      line3: "",
      line4: "",
      town: "London",
      postcode,
      UPRN: 1234,
    };
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
