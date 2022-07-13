import React from "react";

import { render } from "@hackney/mtfh-test-utils";

import { DefaultIcon, SuccessIcon, WarningIcon } from "./status-icon";

test("it renders base variant title and icon correctly", () => {
  const { container } = render(<DefaultIcon />);
  expect(container).toMatchSnapshot();
});

test("it renders success variant title and icon correctly", () => {
  const { container } = render(<SuccessIcon />);
  expect(container).toMatchSnapshot();
});

test("it renders warning variant title and icon correctly", () => {
  const { container } = render(<WarningIcon />);
  expect(container).toMatchSnapshot();
});
