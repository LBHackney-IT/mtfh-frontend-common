import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  getAxiosInstance,
  useAxiosSWR,
} from "../../../http";
import { Asset, EditAssetAddressRequest } from "./types";

export const useAsset = (
  id: string | null,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<Asset>,
): AxiosSWRResponse<Asset> => {
  return useAxiosSWR(id && `${config.assetApiUrlV1}/assets/${id}`, auth, options);
};

export const patchAsset = async (
  id: string,
  assetAddress: EditAssetAddressRequest,
  assetVersion: string,
  auth: CommonAuth,
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const axiosInstance = getAxiosInstance(auth);

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
