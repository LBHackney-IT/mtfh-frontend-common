import { WorkOrder } from "../../api/work-order/v2";
import "./work-order-list-item.scss";
export interface WorkOrderListItemParameters {
    workOrder: WorkOrder;
}
declare const WorkOrderListItem: ({ workOrder: { dateRaised, priority, tradeDescription, status, description, reference }, }: WorkOrderListItemParameters) => JSX.Element;
export default WorkOrderListItem;
