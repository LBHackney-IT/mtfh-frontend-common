export type DiscretionaryAlert = {
  personId: string;
  alerts: Alert[];
};

export type Alert = {
  alertCode: string;
  dateModified: string;
  description: string;
  endDate: string | null;
  modifiedBy: string;
  reason: string;
  startDate: string;
};
