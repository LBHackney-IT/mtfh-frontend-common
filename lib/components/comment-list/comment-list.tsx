import React, { useMemo } from "react";

import { useComments } from "@mtfh/common/lib/api/comments/v2";

import { Center } from "../center";
import { SimplePagination, SimplePaginationButton } from "../simple-pagination";
import { Spinner } from "../spinner";
import { CommentListItem } from "./comment-list-item";

function NoComments() {
  return <p>No comments</p>;
}

export interface CommentListProps {
  targetId: string;
}

export const CommentList = ({ targetId }: CommentListProps): JSX.Element => {
  const { data, size, setSize, error } = useComments(targetId);

  const response = useMemo(() => {
    if (!data) return null;
    return data[size - 1];
  }, [data, size]);

  if (error?.response?.status === 404) {
    return <NoComments />;
  }

  if (!response) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  const {
    results: comments,
    paginationDetails: { nextToken },
  } = response;

  return (
    <div>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
      {(size > 1 || nextToken) && (
        <SimplePagination>
          {size !== 1 && (
            <SimplePaginationButton variant="previous" onClick={() => setSize(size - 1)}>
              Previous
            </SimplePaginationButton>
          )}
          {nextToken && (
            <SimplePaginationButton variant="next" onClick={() => setSize(size + 1)}>
              Next
            </SimplePaginationButton>
          )}
        </SimplePagination>
      )}
    </div>
  );
};
