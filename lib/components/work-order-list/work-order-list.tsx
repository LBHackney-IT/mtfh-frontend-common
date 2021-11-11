import React from "react";
import { useWorkOrders } from "../../api/work-order/v2";
import { config } from "../../config";
import locale from "../../locale";
import { CardList } from "../card-list";
import { Center } from "../center";
import { ErrorSummary } from "../error-summary";
import { Link } from "../link";
import { Spinner } from "../spinner";
import WorkOrderListItem from "./work-order-list-item";

interface WorkOrderListProps {
  assetId: string;
}

export const WorkOrderList = ({ assetId }: WorkOrderListProps) => {
  const { data: workOrders, error } = useWorkOrders(assetId);
  const { components } = locale;

  if (error) {
    return (
      <ErrorSummary
        id="work-order-list-error"
        title={components.workOrderList.errors.unableToFetchWorkOrder}
        description={components.workOrderList.errors.unableToFetchWorkOrderDescription}
      />
    );
  }

  if (!workOrders) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <div>
      <CardList>
        {workOrders.map((workOrder, index) => (
          <WorkOrderListItem key={index} workOrder={workOrder} />
        ))}
      </CardList>
      <Link
        href={`${config.repairsHubAppUrl}/properties/${assetId}`}
        isExternal
        className="repair-list__link"
      >
        {components.workOrderList.seeAllWorkOrders}
      </Link>
    </div>
  );
};
