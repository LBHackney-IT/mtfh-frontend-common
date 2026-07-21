import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import {
  Asset,
  CreateNewAssetRequest,
  EditAssetAddressRequest,
  GetAssetParentsResponse,
  GetAssetRelationshipsResponse,
  PatchAssetBoilerHouseRequest,
  PatchAssetLbhOwnershipRequest,
  UpdatePropertyPatchRequest,
} from "./types";
export declare const getAsset: (
  id: string,
) => Promise<import("axios").AxiosResponse<Asset, any, {}>>;
export declare const useAsset: (
  id: string | null,
  options?: AxiosSWRConfiguration<Asset>,
) => AxiosSWRResponse<Asset>;
export declare const useChildAssets: (
  id: string | null,
  options?: AxiosSWRConfiguration<GetAssetRelationshipsResponse>,
  pageSize?: number,
) => AxiosSWRResponse<GetAssetRelationshipsResponse>;
export declare const getChildAssets: (
  id: string,
  pageSize?: number,
) => Promise<import("axios").AxiosResponse<Asset, any, {}>>;
export declare const getParentAssets: (
  parentAssetIds: string | null,
  options?: AxiosSWRConfiguration<Asset>,
) => GetAssetParentsResponse;
export declare const patchAsset: (
  id: string,
  request: PatchAssetBoilerHouseRequest | PatchAssetLbhOwnershipRequest,
  assetVersion: string | null,
) => Promise<import("axios").AxiosResponse<any, any, {}>>;
export declare const patchAssetAddress: (
  id: string,
  assetAddress: EditAssetAddressRequest,
  assetVersion: string | null,
) => Promise<void>;
export declare const createAsset: (request: CreateNewAssetRequest) => Promise<void>;
export declare const updatePropertyPatch: (
  id: string,
  propertypatch: UpdatePropertyPatchRequest,
  assetVersion: string | null,
) => Promise<void>;
//# sourceMappingURL=service.d.ts.map
