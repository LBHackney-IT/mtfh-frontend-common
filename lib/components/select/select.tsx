import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import classNames from "classnames";

import { widthOverrides } from "../../utils";
import "./styles.scss";
import { Spinner } from "@mtfh/common";

export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  error?: boolean;
  isLoading?: boolean;
  override?: number;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { error, className, override, isLoading = false, ...props },
  ref,
) {
  const selectClasses = classNames(
    "govuk-select",
    "lbh-select",
    { "govuk-select--error": error },
    widthOverrides(override),
    className,
  );
  if (isLoading) {
    return <Spinner />;
  }
  return <select ref={ref} className={selectClasses} {...props} />;
});
