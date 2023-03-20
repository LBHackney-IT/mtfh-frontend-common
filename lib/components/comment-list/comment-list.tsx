import React, { useMemo } from "react";

import { useComments } from "../../api/comments/v2";
import { useReferenceData } from "../../api/reference-data/v1";
import { CommonAuth } from "../../auth";
import locale from "../../locale";
import { Center } from "../center";
import { ErrorSummary } from "../error-summary";
import { SimplePagination, SimplePaginationButton } from "../simple-pagination";
import { Spinner } from "../spinner";
import { Text } from "../text";
import { CommentListItem } from "./comment-list-item";

const NoComments = () => {
  return <Text size="sm">{locale.components.commentList.noCommentsAdded}</Text>;
};

export interface CommentListProps {
  targetId: string;
}

export const CommentList = (
  { targetId }: CommentListProps,
  auth: CommonAuth,
): JSX.Element => {
  const { data, size, setSize, error } = useComments(targetId, auth);
  const { components } = locale;

  const { data: referenceData, error: referenceError } = useReferenceData<"category">(
    {
      category: "comment",
      subCategory: "category",
    },
    auth,
  );

  const response = useMemo(() => {
    if (!data) {
      return null;
    }
    return data[size - 1];
  }, [data, size]);

  if (error?.response?.status === 404) {
    return <NoComments />;
  }

  if (referenceError) {
    return (
      <ErrorSummary
        id="comment-list-error"
        title={components.commentList.errors.unableToFetchReferenceData}
        description={components.commentList.errors.unableToFetchReferenceDataDescription}
      />
    );
  }

  if (!response || !referenceData) {
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
        <CommentListItem
          categories={referenceData.category}
          key={comment.id}
          comment={comment}
        />
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
