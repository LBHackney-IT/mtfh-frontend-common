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
