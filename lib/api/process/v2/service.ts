import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import { getAxiosInstance } from "../../../http";
import { PostProcessRequestData, Process } from "../v1";

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
  auth: CommonAuth,
): Promise<Process> => {
  const axiosInstance = getAxiosInstance(auth);

  const { data: process } = await axiosInstance.post(
    `${config.processApiUrlV2}/process/${processName}`,
    data,
  );
  return process;
};
