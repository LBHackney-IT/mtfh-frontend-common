import React from "react";
import { config } from "../../config";
import locale from "../../locale";
import { CardList } from "../card-list";
import { Center } from "../center";
import { ErrorSummary } from "../error-summary";
import { Link } from "../link";
import { Spinner } from "../spinner";
import RepairListItem from "./repair-list-item";

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

interface RepairListProps {
  propertyId: string;
}

const useRepairs = (propertyId: string) => {
  return { repairs: mockRepairs, error: null };
};

export const RepairList = ({ propertyId }: RepairListProps) => {
  const { repairs, error } = useRepairs(propertyId);
  const { components } = locale;

  if (error) {
    return (
      <ErrorSummary
        id="repair-list-error"
        title={components.repairList.errors.unableToFetchRepairs}
        description={components.repairList.errors.unableToFetchRepairsDescription}
      />
    );
  }

  if (!repairs) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <div>
      <CardList>
        {repairs.map((repair, index) => (
          <RepairListItem key={index} repair={repair} />
        ))}
      </CardList>
      <Link
        href={`${config.repairsHubAppUrl}/properties/${propertyId}`}
        isExternal
        className="repair-list__link"
      >
        {components.repairList.seeAllRepairs}
      </Link>
    </div>
  );
};
