import React, { ReactNode } from "react";
import cn from "classnames";
import locale from "../../locale";
import { Heading } from "../heading";

interface StepProps {
  isActive?: boolean;
  stepIndex?: number;
  children: ReactNode;
}

export const Step = ({ isActive, stepIndex, children }: StepProps): JSX.Element => (
  <li
    className={cn("mtfh-stepper__step", {
      "mtfh-stepper__step--active": isActive,
    })}
  >
    <div className="mtfh-stepper__header">
      <Heading as="h3" variant="h3" className="mtfh-stepper__title">
        <span className="mtfh-stepper__circle mtfh-stepper__circle--number">
          <span className="mtfh-stepper__circle-inner">
            <span className="mtfh-stepper__circle-background">
              <span className="govuk-visually-hidden">
                {locale.components.stepper.step}
              </span>
              {stepIndex}
            </span>
          </span>
        </span>
        <span>
          <button className="mtfh-stepper__button mtfh-stepper__button--title">
            <span>{children}</span>
          </button>
        </span>
      </Heading>
    </div>
  </li>
);
