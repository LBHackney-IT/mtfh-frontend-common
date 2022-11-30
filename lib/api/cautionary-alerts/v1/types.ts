export type CautionaryAlert = {
  personId: string;
  alerts: Alert[];
};

export type Alert = {
  alertCode: string;
  assureReference: string;
  dateModified: string;
  description: string;
  endDate: string | null;
  modifiedBy: string;
  personName?: string;
  personId?: string;
  reason: string;
  startDate: string;
};
