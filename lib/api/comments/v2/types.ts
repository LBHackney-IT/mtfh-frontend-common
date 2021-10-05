import type { CommentAuthor, CommentCategorisation } from "../v1/types";

export interface Comment {
  id: string;
  title?: string;
  description: string;
  highlight?: boolean;
  categorisation?: CommentCategorisation;
  author: CommentAuthor;
  createdAt: string;
  targetType?: string;
  targetId?: string;
}
