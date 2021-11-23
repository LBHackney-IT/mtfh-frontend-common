import React, { ComponentPropsWithoutRef, ReactElement, forwardRef } from "react";

import cn from "classnames";

import "./styles.scss";

export interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
  top?: ReactElement;
  backLink?: ReactElement;
  side?: ReactElement;
  sidePosition?: "left" | "right";
}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(function Layout(
  { children, top, backLink, side, className, sidePosition = "left", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn("mtfh-layout", { "mtfh-layout--narrow": !side }, className)}
      {...props}
    >
      {backLink}
      <div id="content" />
      {top}
      <div className="mtfh-layout__container">
        {side ? (
          <div
            className={cn("mtfh-layout__aside", {
              "mtfh-layout__aside--right": sidePosition === "right",
            })}
          >
            {side}
          </div>
        ) : null}
        <div
          className={cn("mtfh-layout__main", {
            "mtfh-layout__main__aside--right": sidePosition === "right",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
});
