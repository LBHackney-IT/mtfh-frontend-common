import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  getAxiosInstance,
  useAxiosSWR,
} from "../../../http";
import { Asset, CreateNewAssetRequest, EditAssetAddressRequest } from "./types";

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
) => {
  return new Promise<void>((resolve, reject) => {
    const axiosInstance = getAxiosInstance();

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
    const axiosInstance = getAxiosInstance();

    axiosInstance
      .post(`${config.assetApiUrlV1}/assets/`, request)
      .then(() => resolve())
      .catch(() => reject());
  });
};
