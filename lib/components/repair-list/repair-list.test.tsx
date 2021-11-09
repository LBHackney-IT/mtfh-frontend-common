import React from "react";
import { render } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";
import locale from "../../locale";
import { formatDate } from "../../utils";
import { RepairList } from "./repair-list";

export const mockRepairs = [
  {
    reference: 2267941,
    dateRaised: "2020-09-07T09:01:09Z",
    lastUpdated: null,
    priority: "ELECTRICAL PLANS",
    property: "Somerford Grove Estate 103",
    owner: "HH Electrical Planned",
    description: "Please carryout full NICEIC testing to Property (2nd QTR test 2020/21)",
    propertyReference: "00010773",
    tradeCode: "EL",
    tradeDescription: "Electrical",
    status: "Locked",
  },
  {
    reference: 2254479,
    dateRaised: "2020-08-07T20:00:55Z",
    lastUpdated: null,
    priority: "GAS SERVICING",
    property: "Somerford Grove Estate 103",
    owner: "HH Gas Breakdown",
    description: "Annual Gas Service",
    propertyReference: "00010773",
    tradeCode: "GS",
    tradeDescription: "Domestic gas: servicing",
    status: "In Progress",
  },
];

test("RepairList renders", () => {
  const { container } = render(<RepairList propertyId="00023400" />);

  expect(
    screen.getByText("Electrical: Please carryout full NICEIC testing to Property (2"),
  ).toBeInTheDocument();
  expect(screen.getByText(formatDate("2020-09-07T09:01:09Z"))).toBeInTheDocument();
  screen.getByText("ELECTRICAL PLANS");
  screen.getByText("Locked");

  expect(
    screen.getByText("Domestic gas: servicing: Annual Gas Service"),
  ).toBeInTheDocument();
  expect(screen.getByText(formatDate("2020-08-07T20:00:55Z"))).toBeInTheDocument();
  screen.getByText("GAS SERVICING");
  screen.getByText("In Progress");

  expect(screen.getAllByText("Raised at:").length).toBe(2);
  expect(screen.getAllByText("Priority:").length).toBe(2);

  screen.getByText(locale.components.repairList.seeAllRepairs);

  expect(container).toMatchSnapshot();
});
