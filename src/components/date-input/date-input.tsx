import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'classnames';

import { NumberInput, NumberInputProps } from '../number-input';
import './styles.scss';

export interface DateInputProps extends ComponentPropsWithoutRef<'div'> {
  error?: string;
  required?: boolean;
  dayProps?: NumberInputProps;
  monthProps?: NumberInputProps;
  yearProps?: NumberInputProps;
}

export const DateInput = forwardRef<HTMLDivElement, DateInputProps>(
  function DateInput(
    { dayProps, monthProps, yearProps, error, required, className, ...props },
    ref
  ) {
    return (
      <div ref={ref} className={cn('mtfh-date-input', className)} {...props}>
        <NumberInput
          name="day"
          required={required}
          maxLength={2}
          min={1}
          max={31}
          padStart={2}
          {...dayProps}
        />
        <NumberInput
          name="month"
          required={required}
          maxLength={2}
          min={1}
          max={12}
          padStart={2}
          {...monthProps}
        />
        <NumberInput
          name="year"
          required={required}
          maxLength={4}
          padStart={4}
          {...yearProps}
        />
      </div>
    );
  }
);
