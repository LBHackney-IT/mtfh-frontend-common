import React from "react";
import {
  getWorkOrdersV2,
  mockWorkOrders,
  render,
  server,
} from "@hackney/mtfh-test-utils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import locale from "../../locale";
import { formatDate } from "../../utils";
import { WorkOrderList } from "./work-order-list";

test("WorkOrderList renders", async () => {
  const { container } = render(<WorkOrderList assetId="00023400" />);
  const mockOrder = mockWorkOrders[0];

  await waitFor(() => {
    screen.getByText(
      `${mockOrder.tradeDescription}: ${mockOrder.description.substring(0, 50)}`,
    );
  });

  screen.getByText(formatDate(mockOrder.dateRaised));
  screen.getByText(mockOrder.priority);
  screen.getByText(mockOrder.status);

  expect(screen.getAllByText("Raised at:").length).toBe(12);
  expect(screen.getAllByText("Priority:").length).toBe(12);

  screen.getByText(locale.components.workOrderList.seeAllWorkOrders);

  expect(container).toMatchSnapshot();
});

test("WorkOrderList returns message if there are no repairs in progress", async () => {
  server.use(getWorkOrdersV2([]));

  render(<WorkOrderList assetId="00023400" />);

  await waitFor(() => {
    screen.getByText(`${locale.components.workOrderList.noRepairs} in progress`);
  });
});

test("WorkOrderList returns message if there are no repairs on hold", async () => {
  server.use(getWorkOrdersV2([]));

  render(<WorkOrderList assetId="00023400" />);

  userEvent.selectOptions(
    screen.getByLabelText(`${locale.components.workOrderList.selectLabel}:`),
    `${locale.components.workOrderList.selectOptionLabel} on hold`,
  );

  await waitFor(() => {
    screen.getByText(`${locale.components.workOrderList.noRepairs} on hold`);
  });
});

test("WorkOrderList returns an error from the api", async () => {
  server.use(getWorkOrdersV2("error", 500));

  render(<WorkOrderList assetId="00023400" />);

  await waitFor(() => {
    screen.getByText(locale.components.workOrderList.errors.unableToFetchWorkOrder);
    screen.getByText(
      locale.components.workOrderList.errors.unableToFetchWorkOrderDescription,
    );
  });
});
