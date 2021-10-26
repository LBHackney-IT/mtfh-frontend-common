import React from "react";
import { render } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";
import { PhaseBanner } from ".";

test("it renders a red variant of the Phase Banner", async () => {
  const { container } = render(
    <PhaseBanner tag="DEV" variant="red">
      Development Environment
    </PhaseBanner>,
  );

  expect(container).toMatchSnapshot();
  expect(screen.getByText("DEV")).toBeInTheDocument();
  expect(screen.getByText("Development Environment")).toBeInTheDocument();
});

test("it renders a amber variant of the Phase Banner", async () => {
  const { container } = render(
    <PhaseBanner tag="STAGING" variant="amber">
      Staging Environment
    </PhaseBanner>,
  );

  expect(container).toMatchSnapshot();
  expect(screen.getByText("STAGING")).toBeInTheDocument();
  expect(screen.getByText("Staging Environment")).toBeInTheDocument();
});

test("it renders a red variant of the Phase Banner", async () => {
  const { container } = render(
    <PhaseBanner tag="BETA" variant="green">
      Production / Beta Environment
    </PhaseBanner>,
  );

  expect(container).toMatchSnapshot();
  expect(screen.getByText("BETA")).toBeInTheDocument();
  expect(screen.getByText("Production / Beta Environment")).toBeInTheDocument();
});
