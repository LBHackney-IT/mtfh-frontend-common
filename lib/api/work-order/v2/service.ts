import { stringify } from "query-string";

import { $auth } from "@mtfh/common/lib/auth";
import { config } from "@mtfh/common/lib/config";
import { AxiosSWRResponse, useAxiosSWR } from "@mtfh/common/lib/http";

import { WorkOrdersFilters, WorkOrdersResponse } from "./types";

export interface RepairsRequestParams {
  propertyReference: string;
  PageNumber?: number;
  PageSize?: number;
  StatusCode?: string;
}

const repairStatusGroupings: { [key: string]: number[] } = {
  [WorkOrdersFilters.CANCELLED]: [30],
  [WorkOrdersFilters.COMPLETED]: [40, 50],
  [WorkOrdersFilters.IN_PROGRESS]: [
    20, 60, 80, 90, 100, 110, 120, 1000, 1010, 1080, 1090,
  ],
  [WorkOrdersFilters.LOCKED]: [200],
  [WorkOrdersFilters.ON_HOLD]: [10, 70],
};

export const useWorkOrders = (
  id: string,
  filter?: WorkOrdersFilters,
  pageNumber = 1,
  pageSize = 12,
): AxiosSWRResponse<WorkOrdersResponse> => {
  const params: RepairsRequestParams = {
    propertyReference: id,
    PageNumber: pageNumber,
    PageSize: pageSize,
    ...(!!filter && {
      StatusCode: (repairStatusGroupings as Record<string, number[]>)[`${filter}`].join(
        "&",
      ),
    }),
  };
  return useAxiosSWR<WorkOrdersResponse>(
    `${config.repairsHubApiUrl}/workOrders?${stringify(params)}`,
    {
      headers: {
        "x-hackney-user": $auth.getValue().token,
      },
    },
  );
};
