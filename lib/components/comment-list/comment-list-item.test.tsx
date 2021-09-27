import React from "react";
import { mockCommentV2, render } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";
import { CommentListItem } from "./comment-list-item";

test("Comment renders", () => {
  render(<CommentListItem comment={mockCommentV2} />);
  expect(screen.getByText(mockCommentV2.title as string)).toBeInTheDocument();
  expect(screen.getByText(mockCommentV2.author.fullName)).toBeInTheDocument();
});

test("Comment renders date in the correct format", () => {
  render(<CommentListItem comment={mockCommentV2} />);
  expect(screen.getByText("27/08/2021")).toBeInTheDocument();
});

test("Comment does not display title if it is missing", () => {
  const mockCommentWithoutTitle = mockCommentV2;
  delete mockCommentWithoutTitle.title;
  delete mockCommentWithoutTitle.categorisation;
  render(<CommentListItem comment={mockCommentWithoutTitle} />);
  expect(screen.queryByText(mockCommentWithoutTitle.author.fullName)).toBeInTheDocument();
});
