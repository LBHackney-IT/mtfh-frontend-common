import { stringify } from "query-string";

import { config } from "@mtfh/common/lib/config";
import { AxiosSWRResponse, useAxiosSWR } from "@mtfh/common/lib/http";

import { RepairsFilters, RepairsResponse } from "./types";

export interface RepairsRequestParams {
  propertyReference: string;
  PageNumber?: number;
  PageSize?: number;
  StatusCode?: string;
}

const repairStatusGroupings = {
  [RepairsFilters.CANCELLED]: [30],
  [RepairsFilters.COMPLETED]: [40, 50],
  [RepairsFilters.IN_PROGRESS]: [20, 60, 80, 90, 100, 110, 120, 1000, 1010, 1080, 1090],
  [RepairsFilters.LOCKED]: [200],
  [RepairsFilters.ON_HOLD]: [10, 70],
};

export const useRepairs = (
  id: string,
  filter?: RepairsFilters,
  pageNumber = 1,
  pageSize = 12,
  // options?: AxiosSWRConfiguration<RepairsResponse>,
): AxiosSWRResponse<RepairsResponse> => {
  const params: RepairsRequestParams = {
    propertyReference: id,
    PageNumber: pageNumber,
    PageSize: pageSize,
    ...(!!filter && {
      StatusCode: repairStatusGroupings[`${filter}`].join("&"),
    }),
  };
  return useAxiosSWR(`${config.repairsHubApiUrl}/worksOrders?${stringify(params)}`);
};
