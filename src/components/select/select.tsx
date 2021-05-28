import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';

import './styles.scss';

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  error?: boolean;
  isFullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ error, className, isFullWidth, ...props }, ref) {
    const selectClasses = classNames(
      'govuk-select',
      { 'govuk-!-width-full': isFullWidth },
      'lbh-select',
      { 'govuk-select--error': error },
      className
    );
    return <select ref={ref} className={selectClasses} {...props} />;
  }
);
