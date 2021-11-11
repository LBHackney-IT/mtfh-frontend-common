import React from "react";
import {
  getWorkOrdersV2,
  mockWorkOrders,
  render,
  server,
} from "@hackney/mtfh-test-utils";
import { screen, waitFor } from "@testing-library/react";
import locale from "../../locale";
import { formatDate } from "../../utils";
import { RepairList } from "./repair-list";

test("RepairList renders", async () => {
  const { container } = render(<RepairList assetId="00023400" />);
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

  screen.getByText(locale.components.repairList.seeAllRepairs);

  expect(container).toMatchSnapshot();
});

test("RepairList returns an error from the api", async () => {
  server.use(getWorkOrdersV2("error", 500));

  render(<RepairList assetId="00023400" />);

  await waitFor(() => {
    screen.getByText(locale.components.repairList.errors.unableToFetchRepairs);
    screen.getByText(locale.components.repairList.errors.unableToFetchRepairsDescription);
  });
});
