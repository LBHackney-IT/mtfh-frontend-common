import React from "react";
import { render, server } from "@hackney/mtfh-test-utils";
import { screen, waitFor } from "@testing-library/react";
import locale from "../../locale";
import { getRepairsV1 } from "../../test-utils";
import { formatDate } from "../../utils";
import { RepairList } from "./repair-list";

test("RepairList renders", async () => {
  const { container } = render(<RepairList assetId="00023400" />);

  await waitFor(() => {
    screen.getByText("Electrical: Please carryout full NICEIC testing to Property (2");
  });

  screen.getByText(formatDate("2020-09-07T09:01:09Z"));
  screen.getByText("ELECTRICAL PLANS");
  screen.getByText("Locked");

  screen.getByText("Domestic gas: servicing: Annual Gas Service");
  screen.getByText(formatDate("2020-08-07T20:00:55Z"));
  screen.getByText("GAS SERVICING");
  screen.getByText("In Progress");

  expect(screen.getAllByText("Raised at:").length).toBe(2);
  expect(screen.getAllByText("Priority:").length).toBe(2);

  screen.getByText(locale.components.repairList.seeAllRepairs);

  expect(container).toMatchSnapshot();
});

test("RepairList returns an error from the api", async () => {
  server.use(getRepairsV1("error", 500));

  render(<RepairList assetId="00023400" />);

  await waitFor(() => {
    screen.getByText(locale.components.repairList.errors.unableToFetchRepairs);
    screen.getByText(locale.components.repairList.errors.unableToFetchRepairsDescription);
  });
});
