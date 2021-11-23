import React, { useEffect, useRef } from "react";
import cn from "classnames";
import { Details as DetailsJs } from "lbh-frontend";
import { ReactElement } from "react-router/node_modules/@types/react";

import "./styles.scss";

interface DetailsProps {
  title: string;
  children: ReactElement;
  className?: string;
}

export const Details = ({ title, children, className }: DetailsProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      new DetailsJs(ref.current).init();
    }
  }, []);

  const classes = {
    "govuk-details lbh-details": true,
  };

  return (
    <details
      id="mtfh-details"
      className={cn(classes, className)}
      data-module="govuk-details"
      ref={ref}
    >
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">{title}</span>
      </summary>
      <div className="govuk-details__text">{children}</div>
    </details>
  );
};
