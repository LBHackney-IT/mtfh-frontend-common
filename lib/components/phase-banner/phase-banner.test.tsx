import React from "react";
import { render } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";
import { PhaseBanner, PhaseBannerColor } from ".";

test("it renders a red variant of the Phase Banner", async () => {
  const { container } = render(
    <PhaseBanner environmentName="DEV" color={PhaseBannerColor.RED}>
      <span className="govuk-phase-banner__text">Development Environment</span>
    </PhaseBanner>,
  );

  expect(container).toMatchSnapshot();
  expect(screen.getByText("DEV")).toBeInTheDocument();
  expect(screen.getByText("Development Environment")).toBeInTheDocument();
});

test("it renders a amber variant of the Phase Banner", async () => {
  const { container } = render(
    <PhaseBanner environmentName="STAGING" color={PhaseBannerColor.AMBER}>
      <span className="govuk-phase-banner__text">Staging Environment</span>
    </PhaseBanner>,
  );

  expect(container).toMatchSnapshot();
  expect(screen.getByText("STAGING")).toBeInTheDocument();
  expect(screen.getByText("Staging Environment")).toBeInTheDocument();
});

test("it renders a red variant of the Phase Banner", async () => {
  const { container } = render(
    <PhaseBanner environmentName="BETA" color={PhaseBannerColor.GREEN}>
      <span className="govuk-phase-banner__text">Production / Beta Environment</span>
    </PhaseBanner>,
  );

  expect(container).toMatchSnapshot();
  expect(screen.getByText("BETA")).toBeInTheDocument();
  expect(screen.getByText("Production / Beta Environment")).toBeInTheDocument();
});
