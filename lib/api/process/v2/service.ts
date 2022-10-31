import { PostProcessRequestData, Process } from "@mtfh/common/lib/api/process/v1";
import { config } from "@mtfh/common/lib/config";
import { axiosInstance } from "@mtfh/common/lib/http";

export type PostProcessRequestDataV2 = PostProcessRequestData & {
  patchAssignment: {
    patchId: string;
    patchName: string;
    responsibleEntityId: string;
    responsibleName: string;
  };
};

export const addProcess = async (
  data: PostProcessRequestDataV2,
  processName: string,
): Promise<Process> => {
  const { data: process } = await axiosInstance.post(
    `${config.processApiUrlV2}/process/${processName}`,
    data,
  );
  return process;
};
