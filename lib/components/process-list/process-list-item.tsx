import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useTenure } from "@mtfh/common/lib/api/tenure/v1";
import { formatDate } from "@mtfh/common/lib/utils";

import { Link } from "../link";

import "./process-list-item.scss";

export interface ProcessListItemParameters {
  processId: string;
  processType: string;
  tenureId: string;
  tenantId?: string;
  fullName?: string;
  createdAt: string;
  processName: string;
  status: string;
}

export const ProcessListItem = (props: ProcessListItemParameters): JSX.Element => {
  const {
    processType,
    tenantId,
    fullName,
    createdAt,
    processName,
    status,
    processId,
    tenureId,
  } = props;

  const { error: tenureError, data: tenure } = useTenure(tenureId);

  const address = tenure?.tenuredAsset?.fullAddress;

  const createdAtStr = useMemo(() => formatDate(createdAt), [createdAt]);

  return (
    <div className="process">
      {!tenureError && (
        <>
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
              <Link
                as={RouterLink}
                to={`/person/${tenantId}`}
                variant="link"
                target="_blank"
              >
                {address}
              </Link>
            </div>
          </div>
          <div className="process__item --processName">
            <Link
              as={RouterLink}
              to={`/processes/${processType}/${processId}`}
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
        </>
      )}
    </div>
  );
};
