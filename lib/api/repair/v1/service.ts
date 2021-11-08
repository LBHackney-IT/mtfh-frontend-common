import { stringify } from "query-string";

import { config } from "@mtfh/common/lib/config";
import {
  AxiosSWRInfiniteConfiguration,
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  useAxiosSWR,
  AxiosSWRInfiniteResponse,
  useAxiosSWRInfinite,
} from "@mtfh/common/lib/http";

import { Repair, RepairsResponse } from "./types";

export interface RepairsRequestParams {
  propertyReference: string;
  PageNumber?: number;
  PageSize?: number;
}

export interface RepairsConfiguration
  extends AxiosSWRInfiniteConfiguration<RepairsResponse> {
  PageNumber?: number;
  PageSize?: number;
}
export const useRepair = (
  id: string | null,
  options?: AxiosSWRConfiguration<Repair>,
): AxiosSWRResponse<Repair> => {
  return useAxiosSWR(id && `${config.repairsHubApiUrl}/tenures/${id}`, options);
};

export const useRepairs = (
  id: string | null,
  { PageNumber = 1, PageSize = 5, ...options }: RepairsConfiguration = {},
): AxiosSWRInfiniteResponse<RepairsResponse> => {
  return useAxiosSWRInfinite<RepairsResponse>((page, previous) => {
    if (!id) {
      return null;
    }

    const params: RepairsRequestParams = {
      propertyReference: id,
      PageNumber,
      PageSize,
    };

    return `${config.repairsHubApiUrl}/worksOrders?${stringify(params)}`;
  }, options);
};
