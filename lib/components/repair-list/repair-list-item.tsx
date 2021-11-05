import React, { useMemo } from "react";

import { formatDate } from "@mtfh/common/lib/utils";

import { ReferenceData } from "../../api/reference-data/v1";
import locale from "../../locale";

import "./repair-list-item.scss";
import { Repair } from "./types";

export interface RepairListItemParameters {
  repair: Repair;
  statusReferenceData: ReferenceData[];
}

const getStatusLabel = (statusLabel: string, statusReferenceData: ReferenceData[]) => {
  const status = statusReferenceData.find(
    (statusRefData) => statusRefData.code === statusLabel,
  );
  return status?.value;
};

const RepairListItem = ({
  repair: { dateRaised, priority, tradeCode, status, tradeDescription },
  statusReferenceData,
}: RepairListItemParameters): JSX.Element => {
  const { components } = locale;
  const dateRaisedAt = useMemo(() => formatDate(dateRaised), [dateRaised]);
  return (
    <div className="repair">
      <div className="repair__title">
        {tradeCode}: {tradeDescription}
      </div>
      <div className="repair__item --center">
        <div className="repair__item">
          {components.repairList.raisedAt}: {dateRaisedAt}
        </div>
        <div className="repair__item">
          {components.repairList.priority}: {priority}
        </div>
      </div>
      <div className="repair__item">{getStatusLabel(status, statusReferenceData)}</div>
    </div>
  );
};

export default RepairListItem;
