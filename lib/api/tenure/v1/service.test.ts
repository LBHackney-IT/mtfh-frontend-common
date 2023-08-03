import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  axiosInstance,
  mutate,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import {
  AddPersonToTenureParams,
  AddTenureParams,
  EditTenureParams,
  RemovePersonFromTenureParams,
  addPersonToTenure,
  addTenure,
  editTenure,
  removePersonFromTenure,
  useTenure,
} from "./service";

import type { Tenure } from "./types";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: { patch: jest.fn(), post: jest.fn(), delete: jest.fn() },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

describe("when addPersonToTenure is called", () => {
  test("the request should be sent to the correct URL with the expected query parameters and payload", async () => {
    const addPersonToTenureParams: AddPersonToTenureParams = {
      tenureId: "id",
      etag: "etag",
      householdMember: {
        id: "hhmid",
        dateOfBirth: "",
        fullName: "Paco el flaco",
        isResponsible: true,
        type: "Person",
        personTenureType: "HouseholdMember",
      },
    };
    addPersonToTenure(addPersonToTenureParams);
    expect(axiosInstance.patch).toBeCalledWith(
      `${config.tenureApiUrlV1}/tenures/${addPersonToTenureParams.tenureId}/person/${addPersonToTenureParams.householdMember.id}`,
      {
        etag: addPersonToTenureParams.etag,
        ...addPersonToTenureParams.householdMember,
      },
    );
  });
});

describe("when useTenure is called", () => {
  test("the request should be sent to the correct URL with the expected query parameters, and the expected response should be returned", async () => {
    const returnedValue = { tenureId: "" };
    const id = "id";
    const options: AxiosSWRConfiguration<Tenure> = { dedupingInterval: 10 };
    (useAxiosSWR as jest.Mock).mockResolvedValueOnce(returnedValue);

    const response = await useTenure(id, options);
    expect(useAxiosSWR).toBeCalledWith(`${config.tenureApiUrlV1}/tenures/${id}`, options);
    expect(response).toBe(returnedValue);
  });
});

describe("when addTenure is called", () => {
  test("the request should be sent to the correct URL and the expected response should be returned", async () => {
    const params: AddTenureParams = {
      paymentReference: "",
      startOfTenureDate: "",
      tenureType: {
        code: "",
        description: "",
      },
      tenuredAsset: {
        id: "",
        type: "type",
        fullAddress: "",
        uprn: "",
        propertyReference: "",
      },
    };
    const tenureReturned = { id: "tenureId" };
    (axiosInstance.post as jest.Mock).mockResolvedValueOnce({ data: tenureReturned });

    const response = await addTenure(params);

    expect(axiosInstance.post).toBeCalledWith(`${config.tenureApiUrlV1}/tenures`, params);
    expect(mutate).toBeCalledWith(
      `${config.tenureApiUrlV1}/tenures/${tenureReturned.id}`,
      tenureReturned,
      false,
    );
    expect(response).toBe(tenureReturned);
  });
});

describe("when removePersonFromTenure is called", () => {
  test("the request should be sent to the correct URL, with the correct query parameters", async () => {
    const params: RemovePersonFromTenureParams = {
      etag: "",
      tenureId: "id",
      householdMemberId: "hhmid",
    };

    removePersonFromTenure(params);

    expect(axiosInstance.delete).toBeCalledWith(
      `${config.tenureApiUrlV1}/tenures/${params.tenureId}/person/${params.householdMemberId}`,
    );
  });
});

describe("when editTenure is called", () => {
  test("the request should be sent to the correct URL including the ETag value, and the expected response should be returned", async () => {
    const params: EditTenureParams = {
      id: "id",
      etag: "",
      paymentReference: "1234567890",
      startOfTenureDate: "2021-01-01",
      endOfTenureDate: "2024-01-01",
    };
    const response = {
      data: {},
    };
    (axiosInstance.patch as jest.Mock).mockResolvedValueOnce(response);
    const editTenureResponse = await editTenure(params);

    expect(axiosInstance.patch).toBeCalledWith(
      `${config.tenureApiUrlV1}/tenures/${params.id}`,
      {
        etag: params.etag,
        paymentReference: params.paymentReference,
        startOfTenureDate: params.startOfTenureDate,
        endOfTenureDate: params.endOfTenureDate,
      },
    );
    expect(editTenureResponse).toBe(response.data);
  });
});
