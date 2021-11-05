import React from "react";
import { ReferenceData } from "../../api/reference-data/v1";
import RepairListItem from "./repair-list-item";
import { Repair } from "./types";

const statusReferenceData: ReferenceData[] = [];

const mockRepairs: Repair[] = [
  {
    reference: 0,
    dateRaised: "2021-11-05T10:03:40.249Z",
    lastUpdated: "2021-11-05T10:03:40.249Z",
    priority: "string",
    property: "string",
    owner: "string",
    description: "string",
    propertyReference: "string",
    tradeCode: "string",
    tradeDescription: "string",
    status: "Assigned",
  },
];

export const RepairList = () => {
  return (
    <div>
      {mockRepairs.map((repair, index) => (
        <RepairListItem
          key={index}
          repair={repair}
          statusReferenceData={statusReferenceData}
        />
      ))}
    </div>
  );
};
