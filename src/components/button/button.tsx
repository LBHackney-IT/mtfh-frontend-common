import React, { forwardRef } from 'react';
import type * as Polymoprphic from '@radix-ui/react-polymorphic';
import cn from 'classnames';

import { widthOverrides } from '../../utils';
import './styles.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingText?: string;
  override?: number;
}

export type ButtonComponent = Polymoprphic.ForwardRefComponent<
  'button',
  ButtonProps
>;

export const Button: ButtonComponent = forwardRef(function Button(
  {
    as: ButtonComp = 'button',
    variant = 'primary',
    isLoading = false,
    loadingText,
    isDisabled,
    children,
    className,
    override,
    ...props
  },
  ref
) {
  const buttonClasses = cn(
    'govuk-button',
    'lbh-button',
    {
      'govuk-secondary lbh-button--secondary': variant === 'secondary',
      'lbh-button--disabled govuk-button--disabled': isDisabled,
    },
    widthOverrides(override),
    className
  );

  const maybeDisable = isDisabled || isLoading || undefined;

  return (
    <ButtonComp
      ref={ref}
      type="button"
      className={buttonClasses}
      disabled={maybeDisable}
      aria-disabled={maybeDisable}
      {...props}
    >
      {isLoading && (
        <span className="button-loading-indicator">
          <span>Loading...</span>
        </span>
      )}
      {isLoading && loadingText ? loadingText : children}
    </ButtonComp>
  );
});
