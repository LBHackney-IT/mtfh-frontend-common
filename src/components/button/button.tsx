import React, { ElementType, forwardRef } from 'react';
import cn from 'classnames';

import { PolymorphicComponentProps } from '../../types';
import './styles.scss';

export interface ButtonOwnProps {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingText?: string;
}

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  ButtonOwnProps
>;

function ButtonWithRef<C extends ElementType = 'button'>(
  {
    as,
    variant = 'primary',
    isLoading = false,
    loadingText,
    isDisabled,
    children,
    className,
    ...props
  }: ButtonProps<C>,
  ref: any
) {
  const buttonClasses = cn('govuk-button', 'lbh-button', {
    'govuk-secondary lbh-button--secondary': variant === 'secondary',
    'lbh-button--disabled govuk-button--disabled': isDisabled,
    className,
  });

  const Component = as || 'button';

  return (
    <Component
      ref={ref}
      className={buttonClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <span className="button-loading-indicator">
          <span>Loading...</span>
        </span>
      )}
      {isLoading && loadingText ? loadingText : children}
    </Component>
  );
}

export const Button: <C extends ElementType = 'button'>(
  props: ButtonProps<C>
) => JSX.Element | null = forwardRef(ButtonWithRef);
