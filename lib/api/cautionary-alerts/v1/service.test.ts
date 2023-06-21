import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

import { getPropertyCautionaryAlerts } from "./service";

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

describe("when getPropertyCautionaryAlerts is called", () => {
  test("the request should be sent to the correct URL, with the correct asset ID as a query parameter", async () => {
    const assetId = "00001234";

    await getPropertyCautionaryAlerts(assetId);

    expect(axiosInstance.get).toBeCalledWith(
      `${config.cautionaryApiUrlV1}/cautionary-alerts/properties-new/${assetId}`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});
