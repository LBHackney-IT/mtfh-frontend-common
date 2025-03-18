import { config } from "@mtfh/common/lib/config";
import { AxiosSWRConfiguration, axiosInstance, useAxiosSWR } from "@mtfh/common/lib/http";

import {
  AddressAPIResponse,
  SearchAddressResponse,
  getAddressViaUprn,
  searchAddress,
  useAddressLookup,
} from "./service";
import { Address } from "./types";

const PAGE_COUNT = 2;
const TOTAL_COUNT = 70;

const mockAddressAPIResponse: AddressAPIResponse = {
  data: {
    address: [],
    page_count: PAGE_COUNT,
    total_count: TOTAL_COUNT,
  },
};

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: {
    get: jest.fn().mockImplementation(() =>
      Promise.resolve({
        data: {
          ...mockAddressAPIResponse,
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

  test("the request should be sent to the correct URL, with correct page as a query parameter when requested", async () => {
    const uprn = "0123456789";
    const isParentUPRN = undefined;
    const page = 1;

    await getAddressViaUprn(uprn, isParentUPRN, 1);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?uprn=${uprn}&page=${page}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });

  test("the request should be sent to the correct URL, with correct pageSize as a query parameter when requested", async () => {
    const uprn = "0123456789";
    const isParentUPRN = false;
    const page = undefined;
    const pageSize = 100;

    await getAddressViaUprn(uprn, isParentUPRN, page, pageSize);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.addressApiUrlV1}/addresses?uprn=${uprn}&pageSize=${pageSize}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });

  test("the response contains correct paging properties and values", async () => {
    const uprn = "0123456789";
    const response: SearchAddressResponse = await getAddressViaUprn(uprn);

    expect(response.pageCount).toBe(PAGE_COUNT);
    expect(response.totalCount).toBe(TOTAL_COUNT);
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
