import React from "react";
import { useRepairs } from "../../api/repair/v1";
import { config } from "../../config";
import locale from "../../locale";
import { CardList } from "../card-list";
import { Center } from "../center";
import { ErrorSummary } from "../error-summary";
import { Link } from "../link";
import { Spinner } from "../spinner";
import RepairListItem from "./repair-list-item";

interface RepairListProps {
  assetId: string;
}

export const RepairList = ({ assetId }: RepairListProps) => {
  const { data: repairs, error } = useRepairs(assetId);
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
        href={`${config.repairsHubAppUrl}/properties/${assetId}`}
        isExternal
        className="repair-list__link"
      >
        {components.repairList.seeAllRepairs}
      </Link>
    </div>
  );
};
