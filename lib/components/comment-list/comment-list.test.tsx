import React from "react";
import { getCommentV2, mockCommentV2, render, server } from "@hackney/mtfh-test-utils";
import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CommentList } from "./comment-list";

test("it renders correctly", async () => {
  render(<CommentList targetId="123" />);
  await waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());

  await screen.findByText("Full name 2");
  await screen.findByText("Comment title 2");
  await screen.findByText("Category value 2");
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
  await screen.findByText("Comment title 6");

  userEvent.click(screen.getByText(/Previous/));

  await screen.findByText("Comment title 1");
});

test("it does not render pagination unnecessarily", async () => {
  server.use(getCommentV2([mockCommentV2]));

  render(<CommentList targetId="123" />);

  await waitFor(() => expect(screen.queryByText(/Next/)).toBe(null));
});
