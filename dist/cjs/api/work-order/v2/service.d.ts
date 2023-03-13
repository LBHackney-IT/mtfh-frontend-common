import { AxiosSWRResponse } from "@mtfh/common/lib/http";
import { WorkOrdersFilters, WorkOrdersResponse } from "./types";
export interface RepairsRequestParams {
    propertyReference: string;
    PageNumber?: number;
    PageSize?: number;
    StatusCode?: string;
}
export declare const useWorkOrders: (id: string, filter?: WorkOrdersFilters, pageNumber?: string, pageSize?: string) => AxiosSWRResponse<WorkOrdersResponse>;
