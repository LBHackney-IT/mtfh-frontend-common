import React, { ReactElement, forwardRef } from 'react';
import type * as Polymoprphic from '@radix-ui/react-polymorphic';
import cn from 'classnames';

import { widthOverrides } from '../../utils';
import { ButtonLinkProps } from '../button-link';
import { LinkProps } from '../link';
import './styles.scss';

export interface LinkOverlayProps {
  children: ReactElement<LinkProps | ButtonLinkProps>;
  override?: number;
}

export type LinkOverlayComponent = Polymoprphic.ForwardRefComponent<
  'div',
  LinkOverlayProps
>;

export const LinkOverlay: LinkOverlayComponent = forwardRef(
  function LinkOverlay(
    { as: LinkOverlayComp = 'div', className, override, ...props },
    ref
  ) {
    return (
      <LinkOverlayComp
        ref={ref}
        className={cn('mtfh-link-overlay', widthOverrides(override), className)}
        {...props}
      />
    );
  }
);

export interface LinkBoxProps {
  override?: number;
}

export type LinkBoxComponent = Polymoprphic.ForwardRefComponent<
  'div',
  LinkBoxProps
>;

export const LinkBox: LinkBoxComponent = forwardRef(function LinkBox(
  { as: LinkBoxComp = 'div', className, override, ...props },
  ref
) {
  return (
    <LinkBoxComp
      ref={ref}
      className={cn('mtfh-link-box', widthOverrides(override), className)}
      {...props}
    />
  );
});
