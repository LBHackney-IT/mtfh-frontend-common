import React, { ReactNode } from "react";
import "./phase-banner.styles.scss";

export interface PhaseBannerProps {
  tag: string;
  children: ReactNode;
  variant: "green" | "amber" | "red";
}

export const PhaseBanner = ({
  tag,
  children,
  variant,
}: PhaseBannerProps): JSX.Element => {
  return (
    <div className="container-max-width lbh-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong
          className={`phase-tag-${variant} govuk-tag govuk-phase-banner__content__tag lbh-tag phase-tag`}
        >
          {tag}
        </strong>
        <span className="govuk-phase-banner__text">{children}</span>
      </p>
    </div>
  );
};
