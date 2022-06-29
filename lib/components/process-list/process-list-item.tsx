import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";

import { formatDate } from "@mtfh/common/lib/utils";

import { Link } from "../link";

import "./process-list-item.scss";

export interface ProcessListItemParameters {
  tenantId: string;
  fullName: string;
  address: string;
  processId: string;
  processName: string;
  createdAt: string;
  status: string;
}

export const ProcessListItem = (props: ProcessListItemParameters): JSX.Element => {
  const { tenantId, fullName, address, processName, processId, status, createdAt } =
    props;

  const createdAtStr = useMemo(() => formatDate(createdAt), [createdAt]);

  return (
    <div className="process">
      <div className="process__item">
        <div>
          <Link
            as={RouterLink}
            to={`/person/${tenantId}`}
            variant="link"
            target="_blank"
            className="lbh-heading-h4"
          >
            {fullName}
          </Link>
        </div>
        <div style={{ marginTop: 0 }}>
          <Link as={RouterLink} to={`/person/${tenantId}`} variant="link" target="_blank">
            {address}
          </Link>
        </div>
      </div>
      <div className="process__item --processName">
        <Link
          as={RouterLink}
          to={`/process/${processId}`}
          variant="link"
          target="_blank"
          className="lbh-heading-h4"
        >
          {processName}
        </Link>
      </div>
      <div className="process__item --createdAt">
        <div className="process__title">Initiated</div>
        <div className="process__createdAt">{createdAtStr}</div>
      </div>
      <div className="process__item --status">
        <span className="govuk-tag lbh-tag">{status}</span>
      </div>
    </div>
  );
};
