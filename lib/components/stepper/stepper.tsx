import React, { Children, ReactElement, cloneElement, isValidElement } from "react";
import "./styles.scss";
import cn from "classnames";
import { Heading } from "../heading";
import { StepProps } from "./step";

export type StepChild = ReactElement<StepProps> | ReactElement<StepProps>[] | null;

interface StepperProps {
  title?: string;
  activeStep?: number;
  children: StepChild;
  [x: string]: any;
}

export const Stepper = ({
  activeStep = 0,
  title,
  children,
  ...props
}: StepperProps): JSX.Element => {
  return (
    <div {...props}>
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
              isValidElement(child) && (
                <li
                  className={cn("mtfh-stepper__step", {
                    "mtfh-stepper__step--active": stepIndex === activeStep,
                  })}
                >
                  {cloneElement(child, {
                    ...child.props,
                    stepIndex: stepIndex + 1,
                  })}
                </li>
              ),
          )}
        </ol>
      </div>
    </div>
  );
};
