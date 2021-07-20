import React, {
  Children,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import cn from 'classnames';

import { Accordion, AccordionItem, AccordionItemProps } from '../accordion';
import './styles.scss';

export interface SideBarSectionProps extends AccordionItemProps {
  isAccordion?: boolean;
  isCollapsed?: boolean;
  heading?: string;
}

export type SideBarSectionComponent = Polymorphic.ForwardRefComponent<
  'div',
  SideBarSectionProps
>;

export const SideBarSection: SideBarSectionComponent = forwardRef(
  function SideBarSection(
    {
      children,
      heading,
      className,
      isAccordion = false,
      isCollapsed = false,
      ...props
    },
    ref
  ) {
    if (isAccordion && isCollapsed) {
      return (
        <AccordionItem ref={ref} {...props}>
          {children}
        </AccordionItem>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('mtfh-sidebar-section', className)}
        {...props}
      >
        {heading ? <h2 className="lbh-heading-h2">{heading}</h2> : undefined}
        {children}
      </div>
    );
  }
);

export interface SideBarProps {
  id: string;
  top?: ReactElement;
  children:
    | ReactElement<SideBarSectionProps>
    | null
    | Array<ReactElement<SideBarSectionProps> | null>;
}

export type SideBarComponent = Polymorphic.ForwardRefComponent<
  'div',
  SideBarProps
>;

export const SideBar: SideBarComponent = forwardRef(function SideBar(
  { as: SideBarComp = 'div', id, top, children, className, ...props },
  ref
) {
  const sidebarClasses = cn('mtfh-sidebar', className);

  return (
    <SideBarComp ref={ref} className={sidebarClasses} {...props}>
      {top}
      <Accordion id={id}>
        {Children.map<
          ReactElement<SideBarSectionProps> | undefined,
          ReactElement<SideBarSectionProps> | null
        >(children, (child) =>
          child && isValidElement(child)
            ? cloneElement(child, {
                isCollapsed: true,
              })
            : undefined
        )}
      </Accordion>
    </SideBarComp>
  );
});
