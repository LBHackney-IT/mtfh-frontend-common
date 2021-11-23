import React, { forwardRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import "./styles.scss";
import cn from "classnames";

const STATUS = {
  WARNING: "warning",
  SUCCESS: "success",
};

interface BoxProps {
  status?: typeof STATUS;
}

export type BoxComponent = Polymorphic.ForwardRefComponent<"div", BoxProps>;

export const Box: BoxComponent = forwardRef(function Link(
  { as: BoxComponent = "div", status = "default", children },
  ref,
) {
  const classes = {
    "mtfh-box": true,
    "mtfh-box--success": status === STATUS.SUCCESS,
    "mtfh-box--warning": status === STATUS.WARNING,
  };

  return (
    <BoxComponent ref={ref} className={cn(classes)}>
      {children}
    </BoxComponent>
  );
});
