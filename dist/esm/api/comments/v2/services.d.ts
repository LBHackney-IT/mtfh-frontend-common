import { AxiosSWRInfiniteConfiguration, AxiosSWRInfiniteResponse } from "@mtfh/common/lib/http";
import type { Comment } from "./types";
export interface CommentsResponse {
    results: Comment[];
    paginationDetails: {
        nextToken: string | null;
    };
}
export interface GetCommentsRequestData {
    targetId: string;
    pageSize?: number;
}
export interface CommentsRequestParams extends GetCommentsRequestData {
    paginationToken?: string | null;
}
export interface CommentsConfiguration extends AxiosSWRInfiniteConfiguration<CommentsResponse> {
    pageSize?: number;
}
export declare const useComments: (id: string | null, { pageSize, ...options }?: CommentsConfiguration) => AxiosSWRInfiniteResponse<CommentsResponse>;
export declare type PostCommentRequestData = Omit<Comment, "id" | "author" | "createdAt">;
export declare const addComment: (data: PostCommentRequestData) => Promise<Comment>;
