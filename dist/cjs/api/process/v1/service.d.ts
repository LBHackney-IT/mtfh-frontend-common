import { AxiosSWRConfiguration, AxiosSWRInfiniteConfiguration, AxiosSWRInfiniteResponse, AxiosSWRResponse } from "@mtfh/common/lib/http";
import type { CreateProcess, Process, UpdateProcess } from "./types";
export declare type PostProcessRequestData = Omit<CreateProcess, "formData" | "documents">;
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
export interface ProcessesConfiguration extends AxiosSWRInfiniteConfiguration<ProcessesResponse> {
    pageSize?: number;
}
export declare const addProcess: (data: PostProcessRequestData, processName: string) => Promise<Process>;
export declare type GetProcessRequestData = Pick<Process, "id" | "processName">;
export declare const useProcess: ({ id, processName }: GetProcessRequestData, options?: AxiosSWRConfiguration<Process>) => AxiosSWRResponse<Process>;
export declare const useProcesses: (id: string | null, { pageSize, ...options }?: ProcessesConfiguration) => AxiosSWRInfiniteResponse<ProcessesResponse>;
export declare type PatchProcessRequestData = Partial<UpdateProcess> & Pick<Process, "id" | "processName" | "etag"> & {
    processTrigger: string;
} & {
    processData?: UpdateProcess;
};
export declare const editProcess: ({ id, processName, processTrigger, ...data }: PatchProcessRequestData) => Promise<Process>;
