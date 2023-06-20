import { config } from "@mtfh/common/lib/config";
import { axiosInstance, useAxiosSWR } from "@mtfh/common/lib/http";

import {
  mockAsset,
  mockCreateNewAssetRequest,
  mockEditAssetAddressRequest,
} from "./mocks";
import { createAsset, patchAsset, useAsset } from "./service";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: {
    patch: jest.fn().mockImplementation(() => Promise.resolve({ data: [] })),
    post: jest.fn().mockImplementation(() => Promise.resolve({ data: [] })),
  },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

describe("patchAsset", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
    const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";
    const assetVersion = "3";

    await patchAsset(assetGuid, mockEditAssetAddressRequest, assetVersion);

    expect(axiosInstance.patch).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/${assetGuid}/address`,
      mockEditAssetAddressRequest,
      { headers: { "If-Match": assetVersion } },
    );
  });
});

describe("useAsset", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
    const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";

    (useAxiosSWR as jest.Mock).mockResolvedValueOnce(mockAsset);

    const response = await useAsset(assetGuid, undefined);
    expect(useAxiosSWR).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/${assetGuid}`,
      undefined,
    );
    expect(response).toBe(mockAsset);
  });
});

describe("createAsset", () => {
  test("it calls the api endpoint with the correct url and parameters", async () => {
    await createAsset(mockCreateNewAssetRequest);
    expect(axiosInstance.post).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/`,
      mockCreateNewAssetRequest,
    );
  });
});
