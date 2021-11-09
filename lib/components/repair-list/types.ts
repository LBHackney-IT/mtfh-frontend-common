export type Status =
  | "AcctHold"
  | "Assigned"
  | "Canceled"
  | "Closed"
  | "Complete"
  | "Estimating"
  | "Hold"
  | "Open"
  | "VariationPendingApproval"
  | "PendDesign"
  | "PendMaterial"
  | "Scheduled"
  | "Superceded"
  | "Locked"
  | "NoAccess"
  | "PendingApproval"
  | "VariationApproved"
  | "VariationRejected";

export interface Repair {
  reference: number;
  dateRaised: string;
  lastUpdated: string | null;
  priority: string;
  property: string;
  owner: string;
  description: string;
  propertyReference: string;
  tradeCode: string;
  tradeDescription: string;
  status: string;
}
