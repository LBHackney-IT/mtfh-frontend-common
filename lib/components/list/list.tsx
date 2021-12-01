import React, { forwardRef } from "react";

import cn from "classnames";

import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";

export interface ListProps {
  variant?: "base" | "bullets" | "numbers";
  items: string[];
}

export type ListComponent = Polymorphic.ForwardRefComponent<"ul", ListProps>;

export const List: ListComponent = forwardRef(function List(
  { as: ListComp = "ul", variant = "base", items, className, ...props },
  ref,
) {
  return (
    <ListComp
      ref={ref}
      className={cn(
        "lbh-list",
        {
          "lbh-list--bullet": variant === "bullets",
          "lbh-list--number": variant === "numbers",
        },
        className,
      )}
      {...props}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListComp>
  );
});
