import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
} from "@mtfh/common/lib/http";

import { Asset, EditAssetAddressRequest } from "./types";

export const useAsset = (
  id: string | null,
  options?: AxiosSWRConfiguration<Asset>,
): AxiosSWRResponse<Asset> => {
  return useAxiosSWR(id && `${config.assetApiUrlV1}/assets/${id}`, options);
};

export const patchAsset = async (
  id: string,
  assetAddress: EditAssetAddressRequest,
  assetVersion: string | null,
): Promise<void> => {
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

export const createAsset = async (
  asset: Asset,
) => {
  return new Promise<void>((resolve, reject) => {
    axiosInstance
      .post(`${config.assetApiUrlV1}/assets/`, asset)
      .then(() => resolve())
      .catch(() => reject());
  });
};

