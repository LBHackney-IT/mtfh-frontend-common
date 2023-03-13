import { AxiosSWRInfiniteResponse } from "@mtfh/common/lib/http";
import type { Comment } from "./types";
export interface GetCommentsByTargetIdResponse {
    results: Comment[];
    paginationDetails: {
        nextToken: string | null;
    };
}
export interface GetCommentsByIdRequestData {
    targetId: string;
    pageSize?: number;
    paginationToken?: string | null;
}
export declare const useComments: (id: string, pageSize?: number) => AxiosSWRInfiniteResponse<GetCommentsByTargetIdResponse>;
export declare type PostCommentRequestData = Omit<Comment, "id" | "categorisation" | "author" | "createdAt">;
export declare const addComment: (data: PostCommentRequestData) => Promise<Comment>;
