import React, { useMemo } from "react";

import { DefaultIcon, SuccessIcon, WarningIcon } from "../status-icon";

// import "./styles.scss";

export type StatusHeadingVariant = "base" | "success" | "warning" | undefined;
interface StatusHeadingProps {
  title: string;
  variant?: StatusHeadingVariant;
}

export const StatusHeading = ({ title, variant = "base" }: StatusHeadingProps) => {
  const icon = useMemo(() => {
    if (variant === "success") {
      return <SuccessIcon />;
    }
    if (variant === "warning") {
      return <WarningIcon />;
    }
    return <DefaultIcon />;
  }, [variant]);

  return (
    <div className="mtfh-status-heading">
      {icon}
      <h4 className="lbh-heading-h4 mtfh-status-heading__title">{title}</h4>
    </div>
  );
};
