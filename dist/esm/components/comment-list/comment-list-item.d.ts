import type { Comment } from "@mtfh/common/lib/api/comments/v2";
import type { ReferenceData } from "../../api/reference-data/v1";
import "./comment-list-item.scss";
export interface CommentListItemParameters {
    comment: Comment;
    categories: ReferenceData[];
}
export declare const CommentListItem: ({ comment: { categorisation, createdAt, title, description, author, highlight }, categories, }: CommentListItemParameters) => JSX.Element;
