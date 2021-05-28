import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'classnames';
import { navigateToUrl } from 'single-spa';

import './styles.scss';

export interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
  isExternal?: boolean;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      variant = 'primary',
      isExternal = false,
      href,
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

    return (
      <a
        ref={ref}
        href={href}
        className={buttonClasses}
        onClick={!isExternal ? navigateToUrl : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);
