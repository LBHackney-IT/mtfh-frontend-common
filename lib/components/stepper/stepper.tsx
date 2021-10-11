import React, { Children, ReactNode, cloneElement, isValidElement } from "react";
import "./styles.scss";
import { Heading } from "../heading";

interface StepperProps {
  title?: string;
  activeStep?: number;
  children: ReactNode;
}

export const Stepper = ({
  activeStep = 0,
  title,
  children,
}: StepperProps): JSX.Element => {
  return (
    <div>
      {title && (
        <Heading as="h2" variant="h2">
          {title}
        </Heading>
      )}
      <div className="mtfh-stepper mtfh-stepper--large mtfh-stepper--active">
        <ol className="mtfh-stepper">
          {Children.map(
            children,
            (child, stepIndex) =>
              child &&
              isValidElement(child) &&
              cloneElement(child, {
                ...child.props,
                stepIndex: stepIndex + 1,
                isActive: stepIndex === activeStep,
              }),
          )}
        </ol>
      </div>
    </div>
  );
};
