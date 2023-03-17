import { stringify } from "query-string";

import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRInfiniteConfiguration,
  AxiosSWRInfiniteResponse,
  AxiosSWRResponse,
  axiosInstance,
  useAxiosSWR,
  useAxiosSWRInfinite,
} from "../../../http";

import type { CreateProcess, Process, UpdateProcess } from "./types";

export type PostProcessRequestData = Omit<CreateProcess, "formData" | "documents">;

export interface ProcessesResponse {
  results: Process[];
  paginationDetails: {
    nextToken: string | null;
  };
}

export interface GetProcessesRequestData {
  targetId: string;
  pageSize?: number;
}

export interface ProcessesRequestParams extends GetProcessesRequestData {
  paginationToken?: string | null;
}

export interface ProcessesConfiguration
  extends AxiosSWRInfiniteConfiguration<ProcessesResponse> {
  pageSize?: number;
}

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

export type GetProcessRequestData = Pick<Process, "id" | "processName">;

export const useProcess = (
  { id, processName }: GetProcessRequestData,
  options?: AxiosSWRConfiguration<Process>,
): AxiosSWRResponse<Process> => {
  return useAxiosSWR<Process>(
    `${config.processApiUrlV1}/process/${processName}/${id}`,
    options,
  );
};

export const useProcesses = (
  id: string | null,
  { pageSize = 5, ...options }: ProcessesConfiguration = {},
): AxiosSWRInfiniteResponse<ProcessesResponse> => {
  return useAxiosSWRInfinite<ProcessesResponse>((page, previous) => {
    if (!id || (previous && !previous?.paginationDetails?.nextToken)) {
      return null;
    }

    const params: ProcessesRequestParams = {
      targetId: id,
      pageSize,
    };

    if (page !== 0 && previous?.paginationDetails.nextToken) {
      params.paginationToken = previous.paginationDetails.nextToken;
    }

    return `${config.processApiUrlV1}/process?${stringify(params)}`;
  }, options);
};

export type PatchProcessRequestData = Partial<UpdateProcess> &
  Pick<Process, "id" | "processName" | "etag"> & { processTrigger: string } & {
    processData?: UpdateProcess;
  };

export const editProcess = async ({
  id,
  processName,
  processTrigger,
  ...data
}: PatchProcessRequestData): Promise<Process> => {
  const response = await axiosInstance.patch(
    `${config.processApiUrlV1}/process/${processName}/${id}/${processTrigger}`,
    data,
  );
  return response.data;
};
