import React, { ReactNode } from "react";
import "./phase-banner.styles.scss";

type TagColorVariants =
  | "grey"
  | "purple"
  | "turquoise"
  | "blue"
  | "yellow"
  | "orange"
  | "red"
  | "pink"
  | "green";

export interface PhaseBannerProps {
  tag: string;
  children: ReactNode;
  variant?: TagColorVariants;
}

export const PhaseBanner = ({
  tag,
  children,
  variant,
}: PhaseBannerProps): JSX.Element => {
  const lbhTagColor = variant ? `lbh-tag--${variant} govuk-tag--${variant}` : "";

  return (
    <div className="container-max-width lbh-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong
          className={`govuk-phase-banner__content__tag govuk-tag lbh-tag ${lbhTagColor}`}
        >
          {tag}
        </strong>
        <span className="govuk-phase-banner__text">{children}</span>
      </p>
    </div>
  );
};
