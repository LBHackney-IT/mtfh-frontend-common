import { PostProcessRequestData, Process } from "@mtfh/common/lib/api/process/v1";
export type PostProcessRequestDataV2 = PostProcessRequestData & {
    patchAssignment: {
        patchId: string;
        patchName: string;
        responsibleEntityId: string;
        responsibleName: string;
    };
};
export declare const addProcess: (data: PostProcessRequestDataV2, processName: string) => Promise<Process>;
//# sourceMappingURL=service.d.ts.map