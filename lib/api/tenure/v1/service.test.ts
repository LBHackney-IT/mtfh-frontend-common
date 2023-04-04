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

describe("addPersonToTenure", () => {
  test("addPersonToTenure: it should send the right thing to the API", async () => {
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

describe("useTenure", () => {
  test("useTenure: it should send the right body to the API", async () => {
    const returnedValue = { tenureId: "" };
    const id = "id";
    const options: AxiosSWRConfiguration<Tenure> = { dedupingInterval: 10 };
    (useAxiosSWR as jest.Mock).mockResolvedValueOnce(returnedValue);

    const response = await useTenure(id, options);
    expect(useAxiosSWR).toBeCalledWith(`${config.tenureApiUrlV1}/tenures/${id}`, options);
    expect(response).toBe(returnedValue);
  });
});

describe("addTenure", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
    const params: AddTenureParams = {
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

describe("removePersonFromTenure", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
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

describe("editTenure", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
    const params: EditTenureParams = {
      id: "id",
      etag: "",
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
      },
    );
    expect(editTenureResponse).toBe(response.data);
  });
});
