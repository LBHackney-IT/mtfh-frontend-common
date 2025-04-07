import { config } from "@mtfh/common/lib/config";
import { axiosInstance, useAxiosSWR } from "@mtfh/common/lib/http";

import {
  mockAsset,
  mockCreateNewAssetRequest,
  mockEditAssetAddressRequest,
  mockEditAssetBoilerHouseRequest,
  mockEditAssetOwnershipRequest,
  mockUpdatePropertyPatchRequest
} from "./mocks";
import {
  createAsset,
  getAsset,
  patchAsset,
  patchAssetAddress,
  updatePropertyPatch,
  useAsset,
} from "./service";

jest.mock("@mtfh/common/lib/http", () => ({
  ...jest.requireActual("@mtfh/common/lib/http"),
  axiosInstance: {
    patch: jest.fn().mockImplementation(() => Promise.resolve({ data: [] })),
    post: jest.fn().mockImplementation(() => Promise.resolve({ data: [] })),
    get: jest.fn().mockImplementation(() => Promise.resolve(mockAsset)),
  },
  useAxiosSWR: jest.fn(),
  mutate: jest.fn(),
}));

describe("when patchAsset is called", () => {
  test("Patching Boiler House ID: the request should be sent to the correct URL, with the correct payload and asset GUID as a query parameter", async () => {
    const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";
    const assetVersion = "3";

    await patchAsset(assetGuid, mockEditAssetBoilerHouseRequest, assetVersion);

    expect(axiosInstance.patch).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/${assetGuid}`,
      mockEditAssetBoilerHouseRequest,
      { headers: { "If-Match": assetVersion } },
    );
  });

  test("Patching Asset Ownership: the request should be sent to the correct URL, with the correct payload and asset GUID as a query parameter", async () => {
    const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";
    const assetVersion = "3";

    await patchAsset(assetGuid, mockEditAssetOwnershipRequest, assetVersion);

    expect(axiosInstance.patch).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/${assetGuid}`,
      mockEditAssetOwnershipRequest,
      { headers: { "If-Match": assetVersion } },
    );
  });
});

describe("when patchAssetAddress is called", () => {
  test("the request should be sent to the correct URL, with the correct payload and asset GUID as a query parameter", async () => {
    const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";
    const assetVersion = "3";

    await patchAssetAddress(assetGuid, mockEditAssetAddressRequest, assetVersion);

    expect(axiosInstance.patch).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/${assetGuid}/address`,
      mockEditAssetAddressRequest,
      { headers: { "If-Match": assetVersion } },
    );
  });
});

describe("when getAsset is called", () => {
  test("the request should be sent to the correct URL, with the correct asset GUID as a query parameter, and it should return an asset", async () => {
    const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";

    const response = await getAsset(assetGuid);

    expect(response).toBe(mockAsset);
  });
});

describe("when useAsset is called", () => {
  test("the request should be sent to the correct URL, with the correct asset GUID as a query parameter, and it should return an asset", async () => {
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

describe("when createAsset is called", () => {
  test("the request should be sent to the correct URL, with the new asset as payload", async () => {
    await createAsset(mockCreateNewAssetRequest);
    expect(axiosInstance.post).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/`,
      mockCreateNewAssetRequest,
    );
  });

  test("the request should fail if the new asset has multiple parent assets", async () => {
    const payloadWithMultipleParents = mockCreateNewAssetRequest;
    payloadWithMultipleParents.assetLocation.parentAssets = [
      { id: "guid123", name: "123 estate", type: "Estate" },
      { id: "guid456", name: "456 block", type: "Block" },
    ];

    // The error will be thrown even before the POST request is sent
    await expect(createAsset(payloadWithMultipleParents)).rejects.toThrow(Error);
  });
});

describe("when updatePropertyPatch is called", () => {
  test("the request should be sent to the correct URL, with the correct payload and asset GUID as a query parameter", async () => {
    const assetGuid = "15adc44b-6fde-46e8-af9c-e18b1495c9ab";
    const assetVersion = "3";

    await updatePropertyPatch(assetGuid, mockUpdatePropertyPatchRequest, assetVersion);

    expect(axiosInstance.patch).toBeCalledWith(
      `${config.assetApiUrlV1}/assets/${assetGuid}/patch`,
      mockUpdatePropertyPatchRequest,
      { headers: { "If-Match": assetVersion } },
    );
  });
});
