import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'classnames';

import './styles.scss';

export interface CenterProps extends ComponentPropsWithoutRef<'div'> {
  horizontally?: boolean;
  vertically?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(function Center(
  { horizontally = true, vertically = true, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'mtfh-center',
        {
          'mtfh-center--horizontal': horizontally,
          'mtfh-center--vertical': vertically,
        },
        className
      )}
      {...props}
    />
  );
});
