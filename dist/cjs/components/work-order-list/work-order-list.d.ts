import { WorkOrdersFilters } from "../../api/work-order/v2";
import "./work-order-list.scss";
interface WorkOrdersProps {
    assetId: string;
    statusCode: WorkOrdersFilters;
}
export declare const WorkOrders: ({ assetId, statusCode }: WorkOrdersProps) => JSX.Element;
interface WorkOrderListProps {
    assetId: string;
}
export declare const WorkOrderList: ({ assetId }: WorkOrderListProps) => JSX.Element;
export {};
