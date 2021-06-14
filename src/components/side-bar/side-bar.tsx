import React, {
  Children,
  ComponentPropsWithoutRef,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
} from 'react';
import cn from 'classnames';

import { useBreakpoint } from '../../hooks';
import { Accordion, AccordionItem, AccordionItemProps } from '../accordion';
import './styles.scss';

export interface SideBarSectionProps extends AccordionItemProps {
  isCollapsed?: boolean;
  heading?: string;
}

export const SideBarSection = forwardRef<HTMLDivElement, SideBarSectionProps>(
  function SideBarSection(
    { children, heading, className, isCollapsed = false, ...props },
    ref
  ) {
    if (isCollapsed) {
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

export interface SideBarProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
  top?: ReactElement;
  children:
    | ReactElement<SideBarSectionProps>
    | null
    | Array<ReactElement<SideBarSectionProps> | null>;
}

export const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  function SideBar({ id, top, children, className, ...props }, ref) {
    const isDesktop = useBreakpoint('md');
    const sidebarClasses = cn('mtfh-sidebar', className);
    const renderChildren = useMemo(() => {
      if (!isDesktop) {
        return (
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
        );
      }

      return <div id={id}>{children}</div>;
    }, [isDesktop, children, id]);

    return (
      <div ref={ref} className={sidebarClasses} {...props}>
        {top}
        {renderChildren}
      </div>
    );
  }
);
