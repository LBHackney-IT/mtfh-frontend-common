import React, { forwardRef, useMemo } from "react";

import { Heading } from "../heading";
import { DefaultIcon, SuccessIcon, WarningIcon } from "../status-icon";

import type * as Polymorphic from "@radix-ui/react-polymorphic";

import "./styles.scss";

export type StatusBoxVariant = "base" | "success" | "warning" | undefined;
interface StatusBoxProps {
  title: string;
  variant?: StatusBoxVariant;
}

export type StatusBoxComponent = Polymorphic.ForwardRefComponent<"div", StatusBoxProps>;
export const StatusBox: StatusBoxComponent = forwardRef(function StatusBox(
  { children, className, title, variant = "base", ...props },
  ref,
) {
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
    <div ref={ref} className="mtfh-status-box" {...props}>
      {icon}
      <div>
        <div className="mtfh-status-heading__title">
          <Heading variant="h4">{title}</Heading>
        </div>
        {children}
      </div>
    </div>
  );
});
