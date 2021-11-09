import React from "react";
import { render } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";
import { CardListBreak } from ".";
import { CardList } from "./card-list";
import { CardListItem } from "./card-list-item";
import { CardListRows } from "./card-list-rows";

test("CardList renders", () => {
  const rows = [
    { value: "value1", label: "Label 1" },
    { value: "value2", label: "Label 2" },
  ];
  const { container } = render(
    <CardList>
      <CardListItem>
        <CardListRows rows={rows} />
        <CardListBreak />
        <p>Additional content</p>
      </CardListItem>
    </CardList>,
  );
  expect(screen.getByText("value1")).toBeInTheDocument();
  expect(screen.getByText("Label 1:")).toBeInTheDocument();
  expect(screen.getByText("value2")).toBeInTheDocument();
  expect(screen.getByText("Label 2:")).toBeInTheDocument();
  expect(screen.getByText("Additional content")).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
