import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import cn from "classnames";

import "./styles.scss";

export type CardComponent = Polymorphic.ForwardRefComponent<
  "div",
  ComponentPropsWithoutRef<"div">
>;

export const Card: CardComponent = forwardRef(function Link(
  { as: CardComp = "div", className, children },
  ref,
) {
  return (
    <CardComp ref={ref} className={cn("mtfh-card", className)}>
      {children}
    </CardComp>
  );
});
