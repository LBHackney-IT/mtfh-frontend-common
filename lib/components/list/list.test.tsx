import React from "react";

import { render, testA11y } from "@hackney/mtfh-test-utils";

import { List } from "./list";

test("it renders correctly", async () => {
  const { container } = render(<List items={["string1", "string2", "string3"]} />);
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test("it renders with bullets", async () => {
  const { container } = render(
    <List variant="bullets" items={["string1", "string2", "string3"]} />,
  );
  expect(container).toMatchSnapshot();
});

test("it renders with numbers", async () => {
  const { container } = render(
    <List variant="numbers" as="ol" items={["string1", "string2", "string3"]} />,
  );
  expect(container).toMatchSnapshot();
});
