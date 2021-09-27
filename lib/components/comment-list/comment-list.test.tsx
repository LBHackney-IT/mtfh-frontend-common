import React from "react";
import {
  getCommentV2,
  mockCommentV2,
  mockCommentsV2,
  render,
  server,
} from "@hackney/mtfh-test-utils";
import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CommentList } from "./comment-list";

test("it renders correctly", async () => {
  render(<CommentList targetId="123" />);
  await waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());

  await screen.findByText(mockCommentsV2[0].author.fullName);
});

test("it renders no comments with no results", async () => {
  server.use(getCommentV2("not found", 404));
  render(<CommentList targetId="123" />);
  await waitForElementToBeRemoved(screen.queryByText(/Loading/));

  await screen.findByText(/No comments/);
});

test("it pages the results", async () => {
  render(<CommentList targetId="123" />);
  await waitForElementToBeRemoved(screen.queryByText(/Loading/));

  userEvent.click(screen.getByText(/Next/));
  await screen.findByText(mockCommentsV2[6].title as string);

  userEvent.click(screen.getByText(/Previous/));

  await screen.findByText(mockCommentsV2[0].title as string);
});

test("it does not render pagination unnecessarily", async () => {
  server.use(getCommentV2([mockCommentV2]));

  render(<CommentList targetId="123" />);

  await waitFor(() => expect(screen.queryByText(/Next/)).toBe(null));
});
