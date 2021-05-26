import React, { ElementType, forwardRef } from 'react';
import classNames from 'classnames';

import { PolymorphicComponentProps } from '../../types';
import './styles.scss';

export interface SelectOwnProps {
  error?: boolean;
  isFullWidth?: boolean;
}

export type SelectProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  SelectOwnProps
>;

export function SelectWithRef<C extends ElementType = 'select'>(
  { as, error, className, isFullWidth, ...props }: SelectProps<C>,
  ref: any
): JSX.Element {
  const selectClasses = classNames(
    'govuk-select',
    { 'govuk-!-width-full': isFullWidth },
    'lbh-select',
    { 'govuk-select--error': error },
    className
  );
  const Component = as || 'select';
  return <Component ref={ref} className={selectClasses} {...props} />;
}

export const Select: <C extends ElementType = 'select'>(
  props: SelectProps<C>
) => JSX.Element | null = forwardRef(SelectWithRef);
