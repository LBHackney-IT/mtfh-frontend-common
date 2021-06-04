import React, {
  Children,
  FC,
  ReactElement,
  cloneElement,
  isValidElement,
  useMemo,
} from 'react';

import { useBreakpoint } from '../../hooks';
import { Accordion, AccordionItem, AccordionItemProps } from '../accordion';

export interface SideBarSectionProps extends AccordionItemProps {
  isCollapsed?: boolean;
  heading?: string;
}

export const SideBarSection: FC<SideBarSectionProps> = ({
  children,
  isCollapsed = false,
  heading,
  ...props
}) => {
  if (isCollapsed) {
    return <AccordionItem {...props}>{children}</AccordionItem>;
  }

  return (
    <>
      {heading ? <h2 className="lbh-heading-h2">{heading}</h2> : undefined}
      {children}
    </>
  );
};

export interface SideBarProps {
  top?: ReactElement;
  children:
    | ReactElement<SideBarSectionProps>
    | ReactElement<SideBarSectionProps>[];
}

export const SideBar: FC<SideBarProps> = ({ top, children }) => {
  const isDesktop = useBreakpoint('sm');

  const renderChildren = useMemo(() => {
    if (!isDesktop) {
      return (
        <Accordion id="sidebar-accordion">
          {Children.map<
            ReactElement<SideBarSectionProps> | undefined,
            ReactElement<SideBarSectionProps>
          >(children, (child) =>
            isValidElement(child)
              ? cloneElement(child, {
                  isCollapsed: true,
                })
              : undefined
          )}
        </Accordion>
      );
    }

    return <>{children}</>;
  }, [isDesktop, children]);

  return (
    <div className="mtfh-sidebar">
      {top}
      {renderChildren}
    </div>
  );
};
