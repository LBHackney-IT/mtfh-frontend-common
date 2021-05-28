import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'classnames';
import { navigateToUrl } from 'single-spa';

import './styles.scss';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?:
    | 'link'
    | 'danger'
    | 'text-colour'
    | 'muted'
    | 'back-link'
    | 'native';
  isExternal?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    variant = 'link',
    isExternal = false,
    href,
    className,
    children,
    rel,
    target,
    ...props
  },
  ref
) {
  const linkClasses = cn(
    variant !== 'native' && {
      'govuk-link lbh-link': variant !== 'back-link',
      'govuk-back-link lbh-back-link': variant === 'back-link',
      [`lbh-link--${variant}`]: variant !== 'link' && variant !== 'back-link',
    },
    className
  );
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      ref={ref}
      href={href}
      className={linkClasses}
      rel={isExternal ? 'noopener noreferrer' : rel}
      target={isExternal ? '_blank' : target}
      onClick={!isExternal ? navigateToUrl : undefined}
      {...props}
    >
      {children}
    </a>
  );
});
