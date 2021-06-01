import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
} from 'react';
import cn from 'classnames';
import { ErrorSummary as ErrorSummaryJs } from 'lbh-frontend';
import mergeRefs from 'react-merge-refs';

import './styles.scss';

export interface ErrorSummaryProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
  title: string;
  description?: string;
  children?:
    | ReactElement<ComponentProps<'a'>>
    | ReactElement<ComponentProps<'a'>>[];
}

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  function ErrorSummary(
    { id, title, description, className, children, ...props },
    ref
  ) {
    const localRef = useRef<HTMLDivElement>();

    useEffect(() => {
      if (localRef.current) {
        // eslint-disable-next-line no-new
        new ErrorSummaryJs(localRef.current);
      }
    }, []);

    return (
      <div
        ref={mergeRefs([localRef, ref])}
        className={cn('govuk-error-summary', className, 'lbh-error-summary')}
        aria-labelledby={id}
        role="alert"
        tabIndex={-1}
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
                  (child) => isValidElement(child) && <li>{child}</li>
                )}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
);
