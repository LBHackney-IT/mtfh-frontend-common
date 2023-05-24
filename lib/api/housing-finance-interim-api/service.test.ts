import { config } from "@mtfh/common/lib/config";
import {
  axiosInstance,
} from "@mtfh/common/lib/http";

import {
  UpdateAddressDetailsRequest,
  updateAddressDetails,
} from "./service";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: { patch: jest.fn() },
}));

describe("updateAddressDetails", () => {
  test("it calls the api", async () => {
    // Arrange
    var propertyReference = "propertyReference"

    const request: UpdateAddressDetailsRequest = {
        postPreamble: "test",
        addressLine1: "2 PITCAIRN HOUSE",
        addressLine2: "ST THOMASS SQUARE",
        addressLine3: "HACKNEY",
        addressLine4: "LONDON",
        postCode: "E9 6PT"
    };

    // Act
    await updateAddressDetails(propertyReference, request)

    // Assert
    expect(axiosInstance.patch).toBeCalledWith(
      `${config.housingFinanceInterimApiUrlV1}/assets/${propertyReference}`,
      request,
    );
  });
});