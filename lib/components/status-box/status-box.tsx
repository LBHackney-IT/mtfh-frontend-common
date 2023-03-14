import React, { forwardRef, useMemo } from "react";

import { Box } from "../box";
import { Heading } from "../heading";
import { DefaultIcon, SuccessIcon, WarningIcon } from "../status-icon";

import type * as Polymorphic from "@radix-ui/react-polymorphic";

// import "./styles.scss";

export type StatusBoxVariant = "success" | "warning" | undefined;
interface StatusBoxProps {
  title: string;
  variant?: StatusBoxVariant;
}

export type StatusBoxComponent = Polymorphic.ForwardRefComponent<"div", StatusBoxProps>;
export const StatusBox: StatusBoxComponent = forwardRef(function StatusBox(
  { children, className, title, variant, ...props },
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
    <Box variant={variant}>
      <div ref={ref} className="mtfh-status-box" {...props}>
        {icon}
        <div>
          <div className="mtfh-status-heading__title">
            <Heading variant="h4">{title}</Heading>
          </div>
          {children}
        </div>
      </div>
    </Box>
  );
});
