import React, {
  ComponentPropsWithoutRef,
  ReactElement,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import cn from 'classnames';
import { Accordion as AccordionJs } from 'lbh-frontend';
import mergeRefs from 'react-merge-refs';

import './styles.scss';

export interface AccordionItemProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
  title: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem({ children, className, id, title }, ref) {
    return (
      <div ref={ref} className={cn('govuk-accordion__section', className)}>
        <div className="govuk-accordion__section-header">
          <h3 className="govuk-accordion__section-heading lbh-heading-h5">
            <span
              className="govuk-accordion__section-button"
              id={`accordion-heading-${id}`}
            >
              {title}
            </span>
          </h3>
        </div>
        <div
          id={`accordion-content-${id}`}
          className="govuk-accordion__section-content"
          aria-labelledby={`accordion-heading-${id}`}
        >
          {children}
        </div>
      </div>
    );
  }
);

interface AccordionProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
  children: ReactElement<AccordionItemProps>[];
  defaultIndex?: number;
  visuallyHideControls?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    { className, defaultIndex, visuallyHideControls = false, ...props },
    ref
  ) {
    const localRef = useRef<HTMLDivElement>(null);
    const defaultIndexRef = useRef<number | undefined>(defaultIndex);

    useEffect(() => {
      if (localRef.current) {
        const acc = new AccordionJs(localRef.current);
        acc.init();

        if (defaultIndexRef.current !== undefined) {
          const section = acc.$sections.item(defaultIndexRef.current);
          if (section) {
            const button = section.querySelector<HTMLButtonElement>(
              `.${acc.sectionButtonClass}`
            );
            if (button) {
              const contentId = button.getAttribute('aria-controls');
              if (contentId && !window.sessionStorage.getItem(contentId)) {
                acc.setExpanded(
                  true,
                  acc.$sections.item(defaultIndexRef.current)
                );
              }
            }
          }
        }
      }
    }, []);

    return (
      <div
        className={cn(
          'govuk-accordion',
          'lbh-accordion',
          { 'lbh-accordion--hide-controls': visuallyHideControls },
          className
        )}
        data-attribute="value"
        ref={mergeRefs([localRef, ref])}
        {...props}
      />
    );
  }
);
