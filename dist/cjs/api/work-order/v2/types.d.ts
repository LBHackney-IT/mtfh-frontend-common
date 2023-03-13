export interface WorkOrder {
    id: string;
    dateRaised: string;
    description: string;
    lastUpdated: string | null;
    owner: string;
    priority: string;
    property: string;
    propertyPostCode: string | null;
    propertyReference: string;
    reference: number;
    status: string;
    tradeCode: string;
    tradeDescription: string;
}
export declare type WorkOrdersResponse = WorkOrder[];
export declare enum WorkOrdersFilters {
    CANCELLED = "Cancelled",
    COMPLETED = "Completed",
    IN_PROGRESS = "InProgress",
    LOCKED = "Locked",
    ON_HOLD = "OnHold"
}
export declare const REPAIR_FILTER_LIST: {
    code: WorkOrdersFilters;
    value: string;
}[];
