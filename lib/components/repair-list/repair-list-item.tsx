import React, { useMemo } from "react";

import cn from "classnames";

import { formatDate } from "@mtfh/common/lib/utils";

import { config } from "../../config";
import locale from "../../locale";

import "./repair-list-item.scss";
import { CardListBreak, CardListItem } from "../card-list";
import { CardListRows } from "../card-list/card-list-rows";
import { Link } from "../link";
import { LinkBox, LinkOverlay } from "../link-box";
import { Repair } from "./types";

export interface RepairListItemParameters {
  repair: Repair;
}

const DESCRIPTION_LENGTH = 50;

const RepairListItem = ({
  repair: { dateRaised, priority, tradeDescription, status, description, reference },
}: RepairListItemParameters): JSX.Element => {
  const { components } = locale;
  const dateRaisedAt = useMemo(() => formatDate(dateRaised), [dateRaised]);

  const rows = [
    { value: dateRaisedAt, label: components.repairList.raisedAt },
    { value: priority, label: components.repairList.priority },
  ];
  return (
    <LinkBox>
      <CardListItem>
        <LinkOverlay>
          <Link
            className="lbh-link"
            isExternal
            href={`${config.repairsHubAppUrl}/work-orders/${reference}`}
          >
            <span
              className={cn({
                "repair-list-item__trim": description.length > DESCRIPTION_LENGTH,
              })}
            >
              {tradeDescription}: {description.substring(0, DESCRIPTION_LENGTH)}
            </span>
          </Link>
        </LinkOverlay>
        <CardListRows rows={rows} />
        <CardListBreak />
        <div className="repair-list-item__status"> {status}</div>
      </CardListItem>
    </LinkBox>
  );
};

export default RepairListItem;
