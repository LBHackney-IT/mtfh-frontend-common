import React, {
  ComponentPropsWithoutRef,
  ReactElement,
  forwardRef,
} from 'react';
import cn from 'classnames';

import { ButtonLinkProps } from '../button-link';
import { LinkProps } from '../link';
import './styles.scss';

interface LinkOverlayProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactElement<LinkProps | ButtonLinkProps>;
}

export const LinkOverlay = forwardRef<HTMLDivElement, LinkOverlayProps>(
  function LinkOverlay({ children, className, ...props }, ref) {
    return (
      <div ref={ref} className={cn('mtfh-link-overlay', className)} {...props}>
        {children}
      </div>
    );
  }
);

export const LinkBox = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(function LinkBox({ children, className, ...props }, ref) {
  return (
    <div ref={ref} className={cn('mtfh-link-box', className)} {...props}>
      {children}
    </div>
  );
});
