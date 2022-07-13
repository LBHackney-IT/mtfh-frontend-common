import React from "react";

import { render } from "@hackney/mtfh-test-utils";

import { DefaultIcon, SuccessIcon, WarningIcon } from "./status-icon";

test("it renders base icon correctly", () => {
  const { container } = render(<DefaultIcon />);
  expect(container).toMatchSnapshot();
});

test("it renders success icon correctly", () => {
  const { container } = render(<SuccessIcon />);
  expect(container).toMatchSnapshot();
});

test("it renders warning icon correctly", () => {
  const { container } = render(<WarningIcon />);
  expect(container).toMatchSnapshot();
});
