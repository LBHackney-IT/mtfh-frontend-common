import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

import type { CreateProcess, Process } from "./types";

export type PostProcessRequestData = Omit<
  CreateProcess,
  "relatedEntities" | "formData" | "documents"
>;

export const addProcess = async (
  data: PostProcessRequestData,
  processName: string,
): Promise<Process> => {
  const { data: process } = await axiosInstance.post(
    `${config.processApiUrlV1}/process/${processName}`,
    data,
  );
  return process;
};
