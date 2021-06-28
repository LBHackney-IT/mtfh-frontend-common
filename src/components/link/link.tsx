import React, { forwardRef } from 'react';
import type * as Polymoprphic from '@radix-ui/react-polymorphic';
import cn from 'classnames';

import { widthOverrides } from '../../utils';
import './styles.scss';

export interface LinkProps {
  variant?:
    | 'link'
    | 'danger'
    | 'text-colour'
    | 'muted'
    | 'back-link'
    | 'native';
  isExternal?: boolean;
  override?: number;
}

export type LinkComponent = Polymoprphic.ForwardRefComponent<'a', LinkProps>;

export const Link: LinkComponent = forwardRef(function Link(
  {
    as: LinkComp = 'a',
    variant = 'link',
    isExternal = false,
    className,
    rel,
    target,
    override,
    ...props
  },
  ref
) {
  const linkClasses = cn(
    variant !== 'native' && {
      'govuk-link lbh-link': variant !== 'back-link',
      'govuk-back-link lbh-back-link': variant === 'back-link',
      [`lbh-link--${variant}`]: variant !== 'link' && variant !== 'back-link',
      'lbh-link--no-visited-state': !isExternal,
    },
    widthOverrides(override),
    className
  );
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <LinkComp
      ref={ref}
      className={linkClasses}
      rel={isExternal ? 'noopener noreferrer' : rel}
      target={isExternal ? '_blank' : target}
      {...props}
    />
  );
});
