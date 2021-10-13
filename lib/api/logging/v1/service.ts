import { v4 as uuid } from "uuid";
import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

interface LogErrorArgs {
  logMessage: string;
  mfeName: string;
  type: "log" | "error";
}

export const logError = async ({
  logMessage,
  mfeName,
  type,
}: LogErrorArgs): Promise<void> => {
  axiosInstance.post(`${config.loggingApiUrlV1}/log/${type}-log`, {
    logGroupName: "fe-test-logging",
    logStreamName: mfeName,
    logMessage,
    actionId: "", // what?
    correlationId: uuid(),
  });
};
