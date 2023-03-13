import { AxiosSWRConfiguration, AxiosSWRResponse } from "@mtfh/common/lib/http";
import { Asset, EditAssetAddressRequest } from "./types";
export declare const useAsset: (id: string | null, options?: AxiosSWRConfiguration<Asset>) => AxiosSWRResponse<Asset>;
export declare const patchAsset: (id: string, assetAddress: EditAssetAddressRequest, assetVersion: string) => Promise<void>;
