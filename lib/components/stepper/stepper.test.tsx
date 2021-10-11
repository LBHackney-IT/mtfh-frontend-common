import React from "react";
import { render, testA11y } from "@hackney/mtfh-test-utils";
import { screen } from "@testing-library/react";
import { Stepper } from "./Stepper";

const stepperTitle = "Stepper title";
const stepTenureDetails = "Tenure details";
const stepSelectResidents = "Select residents";

test("it renders correctly", async () => {
  const { container } = render(
    <Stepper
      title={stepperTitle}
      steps={[stepTenureDetails, stepSelectResidents]}
      activeStep={0}
    />,
  );
  expect(container).toMatchSnapshot();
  expect(screen.queryAllByRole("listitem").length).toBe(2);
  expect(screen.queryAllByRole("listitem")[0].className).toContain("active");
  await testA11y(container);
});

test("it prints a title", () => {
  render(
    <Stepper title={stepperTitle} steps={[stepTenureDetails, stepSelectResidents]} />,
  );
  screen.getByText(stepperTitle);
});

test("it does not print title", () => {
  render(<Stepper steps={[stepTenureDetails, stepSelectResidents]} />);
  expect(screen.queryByText(stepperTitle)).not.toBeInTheDocument();
});
