import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

import { getAllPatchesAndAreas } from "./service";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: {
    get: jest.fn().mockImplementation(() => Promise.resolve({ data: [] })),
  },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

describe("when getAllPatchesAndAreas is called", () => {
  test("the request should be sent to the correct URL with the expected headers", async () => {
    await getAllPatchesAndAreas();

    expect(axiosInstance.get).toBeCalledWith(
      `${config.patchesAndAreasApiUrlV1}/patch/all`,
      { headers: { "skip-x-correlation-id": true } },
    );
  });
});
