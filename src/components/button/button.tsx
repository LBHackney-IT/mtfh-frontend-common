import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'classnames';

import './styles.scss';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  isOverride?: boolean;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingText?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      isLoading = false,
      loadingText,
      isDisabled,
      children,
      className,
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
      className
    );

    const maybeDisable = isDisabled || isLoading || undefined;

    return (
      <button
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
      </button>
    );
  }
);
