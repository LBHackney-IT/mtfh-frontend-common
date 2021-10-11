import React from "react";
import "./styles.scss";
import locale from "../../locale";
import { Heading } from "../heading";

const getClassFromStepIfActive = (stepIndex: number, activeStep: number) =>
  stepIndex === activeStep ? "mtfh-stepper__step--active" : "";

interface StepperProps {
  title?: string;
  steps: string[];
  activeStep?: number;
}

export const Stepper = ({ title, steps, activeStep = 0 }: StepperProps): JSX.Element => {
  return (
    <div>
      {title && (
        <Heading as="h2" variant="h2">
          {title}
        </Heading>
      )}
      <div className="mtfh-stepper mtfh-stepper--large mtfh-stepper--active">
        <ol className="mtfh-stepper">
          {steps.map((step, stepIndex) => (
            <li
              className={`mtfh-stepper__step ${getClassFromStepIfActive(
                stepIndex,
                activeStep,
              )}`}
              key={stepIndex}
            >
              <div className="mtfh-stepper__header">
                <Heading as="h3" variant="h3" className="mtfh-stepper__title">
                  <span className="mtfh-stepper__circle mtfh-stepper__circle--number">
                    <span className="mtfh-stepper__circle-inner">
                      <span className="mtfh-stepper__circle-background">
                        <span className="govuk-visually-hidden">
                          {locale.components.stepper.step}
                        </span>
                        {stepIndex + 1}
                      </span>
                    </span>
                  </span>
                  <span>
                    <button className="mtfh-stepper__button mtfh-stepper__button--title">
                      <span>{step}</span>
                    </button>
                  </span>
                </Heading>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
