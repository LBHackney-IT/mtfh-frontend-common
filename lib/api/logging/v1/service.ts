import { getTime } from "date-fns";
import { v4 as uuid } from "uuid";
import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

interface LogErrorArgs {
  logMessage: string;
  mfeName:
    | "Search"
    | "Property"
    | "Personal details"
    | "Comments"
    | "Tenure"
    | "Activity history";
  type: "log" | "error";
  actionId: string;
}

export const logError = async ({
  logMessage,
  mfeName,
  type,
  actionId,
}: LogErrorArgs): Promise<void> => {
  axiosInstance.post(`${config.loggingApiUrlV1}/log/${type}-log`, {
    logGroupName: "fe-test-logging",
    logStreamName: `${getTime(new Date())}-${mfeName} `,
    logMessage,
    actionId,
    correlationId: uuid(),
  });
};
