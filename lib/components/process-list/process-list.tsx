import React, { useMemo } from "react";

import {
  Process,
  ProcessesResponse,
  RelatedEntity,
  useProcesses,
} from "@mtfh/common/lib/api/process/v1";

import { SimplePagination, SimplePaginationButton } from "../simple-pagination";
import { ProcessListItem, ProcessListItemParameters } from "./process-list-item";

export interface ProcessListProps {
  targetId: string;
  getProcessName: (process: Process) => string;
  getStatus: (process: Process) => string;
}

const NoProcesses = () => {
  return <p>No processes</p>;
};

export const ProcessList = (props: ProcessListProps): JSX.Element => {
  const { targetId, getProcessName, getStatus } = props;
  const { data, size, setSize, error } = useProcesses(targetId);

  const response = useMemo<ProcessesResponse | null>(() => {
    if (!data) {
      return null;
    }
    return data[size - 1];
  }, [data, size]);

  if (error?.response?.status === 404 || !response) {
    return <NoProcesses />;
  }

  const {
    results: processes,
    paginationDetails: { nextToken },
  } = response;

  return (
    <div>
      {processes.map((process) => {
        const relatedEntity = (process.relatedEntities as RelatedEntity[])?.[0];
        const processListItemParams: ProcessListItemParameters = {
          processId: process.id,
          processType: process.processName,
          tenureId: process.targetId,
          tenantId: relatedEntity?.id,
          fullName: relatedEntity?.description,
          createdAt: process.currentState.createdAt,
          processName: getProcessName(process),
          status: getStatus(process),
        };
        return <ProcessListItem key={process.id} {...processListItemParams} />;
      })}
      {(size > 1 || nextToken) && (
        <SimplePagination>
          {size !== 1 && (
            <SimplePaginationButton variant="previous" onClick={() => setSize(size - 1)}>
              Previous
            </SimplePaginationButton>
          )}
          {nextToken && (
            <SimplePaginationButton variant="next" onClick={() => setSize(size + 1)}>
              Next
            </SimplePaginationButton>
          )}
        </SimplePagination>
      )}
    </div>
  );
};
