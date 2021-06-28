import React, { forwardRef } from 'react';
import type * as Polymoprphic from '@radix-ui/react-polymorphic';
import cn from 'classnames';

import { widthOverrides } from '../../utils';
import './styles.scss';

export interface CenterProps {
  horizontally?: boolean;
  vertically?: boolean;
  override?: number;
}

export type CenterComponent = Polymoprphic.ForwardRefComponent<
  'div',
  CenterProps
>;

export const Center: CenterComponent = forwardRef(function Center(
  {
    as: CenterComp = 'div',
    horizontally = true,
    vertically = true,
    className,
    override,
    ...props
  },
  ref
) {
  return (
    <CenterComp
      ref={ref}
      className={cn(
        'mtfh-center',
        {
          'mtfh-center--horizontal': horizontally,
          'mtfh-center--vertical': vertically,
        },
        widthOverrides(override),
        className
      )}
      {...props}
    />
  );
});
