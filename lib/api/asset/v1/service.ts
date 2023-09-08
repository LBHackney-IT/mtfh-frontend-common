import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import {
  Asset,
  CreateNewAssetRequest,
  EditAssetAddressRequest,
  GetAssetParentsResponse,
  GetAssetRelationshipsResponse,
  PatchAssetBoilerHouseRequest,
} from "./types";

export const getAsset = async (id: string) => {
  return axiosInstance.get<Asset>(`${config.assetApiUrlV1}/assets/${id}`);
};

export const useAsset = (
  id: string | null,
  options?: AxiosSWRConfiguration<Asset>,
): AxiosSWRResponse<Asset> => {
  return useAxiosSWR(id && `${config.assetApiUrlV1}/assets/${id}`, options);
};

export const useChildAssets = (
  id: string | null,
  options?: AxiosSWRConfiguration<GetAssetRelationshipsResponse>,
  pageSize = 1000,
): AxiosSWRResponse<GetAssetRelationshipsResponse> => {
  const response = useAxiosSWR(
    id &&
      `${config.assetSearchApiUrlV1}/search/assetrelationships?searchText=${id}&pageSize=${pageSize}`,
    options,
  );

  return response;
};

export const getChildAssets = async (id: string, pageSize = 1000) => {
  return axiosInstance.get<Asset>(
    `${config.assetSearchApiUrlV1}/search/assetrelationships?searchText=${id}&pageSize=${pageSize}`,
  );
};

export const getParentAssets = (
  parentAssetIds: string | null,
  options?: AxiosSWRConfiguration<Asset>,
): GetAssetParentsResponse => {
  const parentAssets: Array<Asset> = [];
  if (parentAssetIds) {
    const parents = parentAssetIds.split("#");
    parents.forEach((p: string | null) => {
      console.log(`Getting parent asset ${p}`);
      const { data: parentAsset } = useAxiosSWR(
        p && `${config.assetApiUrlV1}/assets/${p}`,
        options,
      );
      console.log(`Pushing parent asset ${p}`);

      if (parentAsset !== undefined) {
        parentAssets.push(parentAsset);
      }
    });
  }

  const response: GetAssetParentsResponse = { parentAssets };
  return response;
};

export const patchAsset = async (
  id: string,
  request: PatchAssetBoilerHouseRequest,
  assetVersion: string | null,
) => {
  return axiosInstance.patch(`${config.assetApiUrlV1}/assets/${id}`, request, {
    headers: {
      "If-Match": assetVersion,
    },
  });
};

export const patchAssetAddress = async (
  id: string,
  assetAddress: EditAssetAddressRequest,
  assetVersion: string | null,
) => {
  return new Promise<void>((resolve, reject) => {
    axiosInstance
      .patch(`${config.assetApiUrlV1}/assets/${id}/address`, assetAddress, {
        headers: {
          "If-Match": assetVersion,
        },
      })
      .then(() => resolve())
      .catch(() => reject());
  });
};

export const createAsset = async (request: CreateNewAssetRequest) => {
  if (request.assetLocation?.parentAssets?.length > 1) {
    const error = "Only one parent asset is allowed when creating a new asset.";
    console.error(error);
    throw new Error(error);
  }

  return new Promise<void>((resolve, reject) => {
    axiosInstance
      .post(`${config.assetApiUrlV1}/assets/`, request)
      .then(() => resolve())
      .catch(() => reject());
  });
};
