export interface Repair {
  id: string;
  dateRaised: string;
  description: string;
  lastUpdated: string | null;
  owner: string;
  priority: string;
  property: string;
  propertyPostCode: string | null;
  propertyReference: string;
  reference: number;
  status: string;
  tradeCode: string;
  tradeDescription: string;
}

export type RepairsResponse = Repair[];

export enum RepairsFilters {
  CANCELLED = "Cancelled",
  COMPLETED = "Completed",
  IN_PROGRESS = "InProgress",
  LOCKED = "Locked",
  ON_HOLD = "OnHold",
}

export const REPAIR_FILTER_LIST = [
  { code: RepairsFilters.CANCELLED, value: "Cancelled" },
  { code: RepairsFilters.COMPLETED, value: "Completed" },
  { code: RepairsFilters.IN_PROGRESS, value: "In progress" },
  { code: RepairsFilters.LOCKED, value: "Locked" },
  { code: RepairsFilters.ON_HOLD, value: "On hold" },
];
