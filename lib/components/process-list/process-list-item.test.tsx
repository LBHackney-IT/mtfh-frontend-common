import React from "react";

import { mockActiveTenureV1, render } from "@hackney/mtfh-test-utils";

import { Tenure } from "@mtfh/common/lib/api/tenure/v1";
import { AxiosSWRResponse } from "@mtfh/common/lib/http";

import * as tenureV1 from "../../api/tenure/v1/service";
import { ProcessListItem, ProcessListItemParameters } from "./process-list-item";

describe("ProcessListItem", () => {
  test("ProcessListItem renders correctly", () => {
    jest.spyOn(tenureV1, "useTenure").mockReturnValue({
      data: mockActiveTenureV1,
    } as AxiosSWRResponse<Tenure>);

    const processListItemParams: ProcessListItemParameters = {
      processId: "39273cf3-6a78-45e1-32d4-b9637e310527",
      processType: "soletojoint",
      tenureId: "39273cf3-6a78-45e1-32d4-b9637e310527",
      tenantId: "39273cf3-6a78-45e1-32d4-b9637e310527",
      fullName: "Mr Ersan Kuneri",
      createdAt: "2022-06-24T07:47:21.580066Z",
      processName: "Sole to Joint",
      status: "Process Closed",
    };

    const { container } = render(<ProcessListItem {...processListItemParams} />);

    expect(container).toMatchSnapshot();
  });
});
