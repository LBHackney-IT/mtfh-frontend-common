import React from "react";

import { SimplePagination, SimplePaginationButton } from "../simple-pagination";
import { ProcessListItem } from "./process-list-item";

export interface ProcessListProps {
  targetId: string;
}

export const ProcessList = (props: ProcessListProps): JSX.Element => {
  const { targetId } = props;

  console.log(`fetching process by targetId=${targetId}`);
  const response = {
    results: [
      {
        processId: "abad750f-a1b3-4180-aa39-2b5cbdac4b91",
        processName: "Sole to joint tenure",
        tenantId: "549618eb-d0da-b821-9716-d3fe13ef6525",
        fullName: "Tom Ogden",
        address: "45 Oriel Road Hackney London N16 5TT",
        createdAt: "2022-06-12",
        status: "Awaiting Housing Officer review",
      },
      {
        processId: "abad750f-a1b3-4180-aa39-2b5cbdac4b91",
        processName: "Sole to joint tenure",
        tenantId: "549618eb-d0da-b821-9716-d3fe13ef6525",
        fullName: "Fake Johnson",
        address: "45 Oriel Road Hackney London N16 5TT",
        createdAt: "2022-03-10",
        status: "Awaiting Housing Officer review",
      },
      {
        processId: "abad750f-a1b3-4180-aa39-2b5cbdac4b91",
        processName: "Sole to joint tenure",
        tenantId: "549618eb-d0da-b821-9716-d3fe13ef6525",
        fullName: "Thomas Anderson",
        address: "45 Oriel Road Hackney London N16 5TT",
        createdAt: "2022-05-20",
        status: "Awaiting Housing Officer review",
      },
    ],
    paginationDetails: {
      nextToken: undefined,
    },
  };
  const size = 1;
  const setSize = (pageSize: number) => console.log(`setSize=${pageSize}`);

  const {
    results: processes,
    paginationDetails: { nextToken },
  } = response;

  return (
    <div>
      {processes.map((process) => (
        <ProcessListItem key={process.processId} {...process} />
      ))}
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
