import React, { ReactNode } from "react";
import "./phase-banner.styles.scss";

export enum PhaseBannerColor {
  RED = "red",
  AMBER = "amber",
  GREEN = "green",
}

export interface PhaseBannerProps {
  environmentName: string;
  children: ReactNode;
  color: PhaseBannerColor;
}

export const PhaseBanner = ({
  environmentName,
  children,
  color,
}: PhaseBannerProps): JSX.Element => {
  return (
    <div className="container-max-width lbh-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong
          className={`phase-tag-${color} govuk-tag govuk-phase-banner__content__tag lbh-tag phase-tag`}
        >
          {environmentName}
        </strong>
        {children}
      </p>
    </div>
  );
};
