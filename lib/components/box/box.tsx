import React, { forwardRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import "./styles.scss";
import cn from "classnames";

interface BoxProps {
  status?: "warning" | "success";
}

export type BoxComponent = Polymorphic.ForwardRefComponent<"div", BoxProps>;

export const Box: BoxComponent = forwardRef(function Link(
  { as: BoxComponent = "div", status = "default", children },
  ref,
) {
  const classes = {
    "mtfh-box": true,
    "mtfh-box--success": status === "success",
    "mtfh-box--warning": status === "warning",
  };

  return (
    <BoxComponent ref={ref} className={cn(classes)}>
      {children}
    </BoxComponent>
  );
});
