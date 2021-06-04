import React, {
  ComponentPropsWithoutRef,
  ReactElement,
  forwardRef,
} from 'react';
import cn from 'classnames';

import { Link } from '../link';
import './styles.scss';

export interface LayoutProps extends ComponentPropsWithoutRef<'div'> {
  backLabel: string;
  backLink: string;
  top?: ReactElement;
  side?: ReactElement;
}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(function Layout(
  { backLabel, backLink, children, top, side, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn('mtfh-layout', { 'mtfh-layout--narrow': !side }, className)}
      {...props}
    >
      <Link href={backLink} variant="back-link">
        {backLabel}
      </Link>
      {top}
      <div className="mtfh-layout__container">
        {side ? <div className="mtfh-layout__aside">{side}</div> : null}
        <div className="mtfh-layout__main">{children}</div>
      </div>
    </div>
  );
});
