import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';

import './styles.scss';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, className, ...props },
  ref
) {
  const inputClasses = classNames(
    'govuk-input',
    'lbh-input',
    {
      'govuk-input--error': error,
    },
    className
  );

  return <input ref={ref} className={inputClasses} {...props} />;
});
