import React, { ElementType, forwardRef } from 'react';
import classNames from 'classnames';

import { PolymorphicComponentProps } from '../../types';
import './styles.scss';

export interface InputOwnProps {
  error?: boolean;
}

export type InputProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  InputOwnProps
>;

export function InputWithRef<C extends ElementType = 'input'>(
  { as, error, className, ...props }: InputProps<C>,
  ref: any
): JSX.Element {
  const inputClasses = classNames(
    'govuk-input',
    'lbh-input',
    { 'govuk-input--error': error },
    className
  );

  const Component = as || 'input';

  return <Component ref={ref} className={inputClasses} {...props} />;
}

export const Input: <C extends ElementType = 'input'>(
  props: InputProps<C>
) => JSX.Element | null = forwardRef(InputWithRef);
