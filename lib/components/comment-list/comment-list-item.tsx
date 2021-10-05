import React, { useMemo } from "react";

import cn from "classnames";
import type { Comment } from "@mtfh/common/lib/api/comments/v2";
import { formatDate } from "@mtfh/common/lib/utils";

import "./comment-list-item.scss";
import { ReferenceData } from "../../api/reference-data/v1";

export interface CommentListItemParameters {
  comment: Comment;
  categories: ReferenceData[];
}

const getCategoryLabel = (categoryCode: string, categories: ReferenceData[]) => {
  const category = categories.find((category) => category.code === categoryCode);
  return category?.value;
};

export function CommentListItem({
  comment: { categorisation, createdAt, title, description, author, highlight },
  categories,
}: CommentListItemParameters): JSX.Element {
  const createdAtDate = useMemo(() => formatDate(createdAt), [createdAt]);
  return (
    <div className="comment">
      <div className="comment__item">{createdAtDate}</div>
      <div className="comment__item --center">
        {title && (
          <div className={cn("comment__title", { "--highlight": highlight })}>
            {title}
          </div>
        )}
        {categorisation?.category && (
          <div className="comment__category">
            {getCategoryLabel(categorisation.category, categories)}
          </div>
        )}
        {description}
      </div>
      <div className="comment__item">{author.fullName}</div>
    </div>
  );
}
