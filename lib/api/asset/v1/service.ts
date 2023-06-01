import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import { Asset, CreateNewAssetRequest, EditAssetAddressRequest, GetAssetParentsResponse, GetAssetRelationshipsResponse } from "./types";

export const useAsset = (
  id: string | null,
  options?: AxiosSWRConfiguration<Asset>,
): AxiosSWRResponse<Asset> => {
  return useAxiosSWR(id && `${config.assetApiUrlV1}/assets/${id}`, options);
};

export const useChildAssets = (
  id: string | null,
  options?: AxiosSWRConfiguration<GetAssetRelationshipsResponse>,
): AxiosSWRResponse<GetAssetRelationshipsResponse> => {
  return useAxiosSWR(id && `${config.assetSearchApiUrlV1}/search/assetrelationships?searchText=${id}`, options);
};

export const useParentAssets = (
  parentAssetIds: string | null,
  options?: AxiosSWRConfiguration<Asset>,
): GetAssetParentsResponse => {

  let parentAssets: Array<Asset> = []
  if (parentAssetIds) {
    var parents = parentAssetIds.split('#')
    parents.forEach((p: string | null) => {
      console.log(`Getting parent asset ${p}`)
      var { data: parentAsset, ...parentAssetRequest } = useAxiosSWR(p && `${config.assetApiUrlV1}/assets/${p}`, options);
      console.log(`Pushing parent asset ${p}`)
      
      if (parentAsset !== undefined) parentAssets.push(parentAsset)
    })
  }

  let response: GetAssetParentsResponse = {parentAssets}
  return response;
};

export const patchAsset = async (
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
  return new Promise<void>((resolve, reject) => {
    axiosInstance
      .post(`${config.assetApiUrlV1}/assets/`, request)
      .then(() => resolve())
      .catch(() => reject());
  });
};
