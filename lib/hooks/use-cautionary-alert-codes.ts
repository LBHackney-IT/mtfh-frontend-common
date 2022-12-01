import { useEffect, useState } from "react";

import { useReferenceData } from "@mtfh/common/lib/api/reference-data/v1";

import locale from "../locale";

const { hooks } = locale;
const { defaultCautionaryAlerts } = hooks;
interface CautionaryAlerts {
  [key: string]: string;
}

export const useCautionaryAlertCodes = () => {
  const [cautionaryAlerts, setCautionaryAlerts] = useState<CautionaryAlerts>(
    defaultCautionaryAlerts,
  );

  const { data, error } = useReferenceData<"alert-type">({
    category: "cautionary-alert",
    subCategory: "alert-type",
  });

  useEffect(() => {
    if (data?.["alert-type"]) {
      const fromErr = data?.["alert-type"].reduce((acc, obj) => {
        acc[obj.code] = obj.value;
        return acc;
      }, {} as Record<string, string>);

      const mergedCautionaryAlerts = { ...defaultCautionaryAlerts, ...fromErr };
      setCautionaryAlerts(mergedCautionaryAlerts);
    }
  }, [data]);

  if (!data && !error) {
    return null;
  }

  return cautionaryAlerts;
};
