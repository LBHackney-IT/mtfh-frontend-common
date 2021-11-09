import React, { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import "./styles.scss";

export const CardListItem = ({
  className,
  children,
}: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("mtfh-card-list-item", className)}>{children}</div>;
};
