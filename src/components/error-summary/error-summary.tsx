import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
} from 'react';
import type * as Polymoprphic from '@radix-ui/react-polymorphic';
import cn from 'classnames';
import { ErrorSummary as ErrorSummaryJs } from 'lbh-frontend';
import mergeRefs from 'react-merge-refs';

import { widthOverrides } from '../../utils';
import './styles.scss';

export interface ErrorSummaryProps {
  id: string;
  title: string;
  description?: string;
  reFocus?: number;
  children?:
    | ReactElement<ComponentProps<'a'>>
    | null
    | Array<ReactElement<ComponentProps<'a'>> | null>;
  override?: number;
}

export type ErrorSummaryComponent = Polymoprphic.ForwardRefComponent<
  'div',
  ErrorSummaryProps
>;

export const ErrorSummary: ErrorSummaryComponent = forwardRef(
  function ErrorSummary(
    {
      as: ErrorSummaryComp = 'div',
      id,
      title,
      description,
      className,
      children,
      reFocus,
      override,
      ...props
    },
    ref
  ) {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      /* istanbul ignore else */
      if (localRef.current) {
        // eslint-disable-next-line no-new
        new ErrorSummaryJs(localRef.current);
        localRef.current.scrollIntoView(true);
      }
    }, []);

    useEffect(() => {
      /* istanbul ignore else */
      if (localRef.current) {
        localRef.current.scrollIntoView(true);
      }
    }, [reFocus]);

    return (
      <ErrorSummaryComp
        ref={mergeRefs([localRef, ref])}
        className={cn(
          'govuk-error-summary',
          'lbh-error-summary',
          widthOverrides(override),
          className
        )}
        aria-labelledby={id}
        role="alert"
        {...props}
      >
        <h2 className="govuk-error-summary__title" id={id}>
          {title}
        </h2>
        {description || children ? (
          <div className="govuk-error-summary__body">
            {description ? <p>{description}</p> : null}
            {children ? (
              <ul className="govuk-list govuk-error-summary__list">
                {React.Children.map(
                  children,
                  (child) => child && isValidElement(child) && <li>{child}</li>
                )}
              </ul>
            ) : null}
          </div>
        ) : null}
      </ErrorSummaryComp>
    );
  }
);
