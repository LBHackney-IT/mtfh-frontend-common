import React from "react";

import { mockActiveTenureV1, render } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";

import { ProcessesResponse } from "../../api/process/v1";
import * as processV1 from "../../api/process/v1/service";
import { Tenure } from "../../api/tenure/v1";
import * as tenureV1 from "../../api/tenure/v1/service";
import { AxiosSWRInfiniteResponse, AxiosSWRResponse } from "../../http";
import { ProcessList, ProcessListProps } from "./process-list";

const mockProcessResults = [
  {
    id: "103f3080-16d6-40fb-9273-f741ec73f7e4",
    targetId: "103f3080-16d6-40fb-9273-f741ec73f7e4",
    targetType: "tenure",
    relatedEntities: [
      {
        id: "103f3080-16d6-40fb-9273-f741ec73f7e40",
        targetType: "person",
        subType: "householdMember",
        description: "Mr Ersan Kuneri",
      },
    ],
    processName: "soletojoint",
    currentState: {
      state: "DocumentsRequestedAppointment",
      createdAt: "2022-06-24T07:49:07.7892599Z",
      updatedAt: "2022-06-24T07:49:07.78926Z",
    },
  },
  {
    id: "39273cf3-6a78-45e1-32d4-b9637e310527",
    targetId: "39273cf3-6a78-45e1-32d4-b9637e310527",
    targetType: "tenure",
    relatedEntities: [
      {
        id: "39273cf3-6a78-45e1-32d4-b9637e310527",
        targetType: "person",
        subType: "householdMember",
        description: "Miss Perihan Abla",
      },
    ],
    processName: "soletojoint",
    currentState: {
      state: "AutomatedChecksPassed",
      createdAt: "2022-05-10T07:49:07.7892599Z",
      updatedAt: "2022-07-24T07:49:07.78926Z",
    },
  },
];

const mockProcessResponse = {
  data: [
    {
      results: mockProcessResults,
      paginationDetails: {
        nextToken: "nextToken",
      },
    },
  ],
  size: 1,
  setSize: jest.fn(),
} as unknown as AxiosSWRInfiniteResponse<ProcessesResponse>;

describe("ProcessList", () => {
  test("ProcessList renders correctly", () => {
    jest.spyOn(processV1, "useProcesses").mockReturnValue(mockProcessResponse);

    jest.spyOn(tenureV1, "useTenure").mockReturnValue({
      data: mockActiveTenureV1,
    } as AxiosSWRResponse<Tenure>);

    const processListProps: ProcessListProps = {
      targetId: "39273cf3-6a78-45e1-32d4-b9637e310527",
      getProcessName: () => "Sole to Joint",
      getStatus: () => "Process Closed",
    };

    const { container } = render(<ProcessList {...processListProps} />);

    expect(container).toMatchSnapshot();
  });

  test("ProcessList uses personId and fullName from person object if there it is provided", async () => {
    jest.spyOn(processV1, "useProcesses").mockReturnValue(mockProcessResponse);

    jest.spyOn(tenureV1, "useTenure").mockReturnValue({
      data: mockActiveTenureV1,
    } as AxiosSWRResponse<Tenure>);

    const person = {
      id: "39273cf3-6a78-45e1-32d4-b9637e310526",
      fullName: "Mr Artiz Fikri",
    };

    const processListProps: ProcessListProps = {
      targetId: "39273cf3-6a78-45e1-32d4-b9637e310527",
      getProcessName: () => "Sole to Joint",
      getStatus: () => "Process Closed",
      person,
    };

    render(<ProcessList {...processListProps} />);

    await expect(screen.findAllByText(person.fullName)).resolves.toHaveLength(
      mockProcessResults.length,
    );

    mockProcessResults.forEach((result) => {
      expect(
        screen.queryByText(result.relatedEntities[0].description),
      ).not.toBeInTheDocument();
    });
  });
});
