import React from "react";

import { render } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";

import { Text } from "../text";
import { StatusBox } from "./status-box";

test("it renders base variant title, children and icon correctly", () => {
  const { container } = render(
    <StatusBox title="base status title">
      <Text>base status children</Text>
    </StatusBox>,
  );

  expect(screen.getByText("base status title")).toBeInTheDocument();
  expect(screen.getByText("base status children")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test("it renders success variant title, children and icon correctly", () => {
  const { container } = render(
    <StatusBox variant="success" title="success status title">
      <Text>success status children</Text>
    </StatusBox>,
  );

  expect(screen.getByText("success status title")).toBeInTheDocument();
  expect(screen.getByText("success status children")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test("it renders warning variant title, children and icon correctly", () => {
  const { container } = render(
    <StatusBox variant="warning" title="warning status title">
      <Text>warning status children</Text>
    </StatusBox>,
  );

  expect(screen.getByText("warning status title")).toBeInTheDocument();
  expect(screen.getByText("warning status children")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
