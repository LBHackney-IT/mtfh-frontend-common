import React, { useMemo } from "react";

import type { Comment } from "@mtfh/common/lib/api/comments/v2";
import { formatDate } from "@mtfh/common/lib/utils";

import "./comment-list-item.scss";

export interface CommentListItemParameters {
  comment: Comment;
}

export function CommentListItem({
  comment: { categorisation, createdAt, title, description, author },
}: CommentListItemParameters): JSX.Element {
  const createdAtDate = useMemo(() => formatDate(createdAt), [createdAt]);
  return (
    <div className="comment">
      <div className="comment__item">{createdAtDate}</div>
      <div className="comment__item --center">
        {title && <div className="comment__category">{title}</div>}
        {categorisation?.category && (
          <div className="comment__title">{categorisation.category}</div>
        )}
        {description}
      </div>
      <div className="comment__item">{author.fullName}</div>
    </div>
  );
}
