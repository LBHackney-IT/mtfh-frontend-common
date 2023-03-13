import type { CommentAuthor, CommentCategorisation } from "../v1/types";
export declare type CommentType = "person" | "asset" | "tenure" | "repair" | "process";
export interface Comment {
    id: string;
    targetType: CommentType;
    targetId: string;
    title: string | null;
    description: string;
    highlight: boolean;
    categorisation?: CommentCategorisation;
    author: CommentAuthor;
    createdAt: string;
}
