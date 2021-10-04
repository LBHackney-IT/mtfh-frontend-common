import { axiosInstance } from "@mtfh/common/lib/http";
import { AddPersonToTenureParams, addPersonToTenure } from "./service";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: { patch: jest.fn() },
}));

describe("Tenure service: Add person to tenure", () => {
  test("it should send the right body to the API", async () => {
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
      `/api/tenures/${addPersonToTenureParams.tenureId}/person/${addPersonToTenureParams.householdMember.id}`,
      {
        etag: addPersonToTenureParams.etag,
        ...addPersonToTenureParams.householdMember,
      },
    );
  });
});
