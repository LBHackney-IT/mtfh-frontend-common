import React, {
  Children,
  ComponentPropsWithoutRef,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import cn from 'classnames';
import { Radios as RadiosJs } from 'lbh-frontend';
import mergeRefs from 'react-merge-refs';

import './styles.scss';

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  id: string;
  hint?: string;
  children: ReactNode;
  conditionalId?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Input(
  { id, className, type = 'radio', hint, children, conditionalId, ...props },
  ref
) {
  return (
    <div className={cn('govuk-radios__item', className)}>
      <input
        ref={ref}
        id={id}
        className="govuk-radios__input"
        type={type}
        aria-describedby={hint ? `${id}-hint` : undefined}
        data-aria-controls={conditionalId}
        {...props}
      />
      <label className="govuk-label govuk-radios__label" htmlFor={id}>
        {children}
      </label>
      {hint ? (
        <span id={`${id}-hint`} className="govuk-hint govuk-radios__hint">
          {hint}
        </span>
      ) : null}
    </div>
  );
});

export const RadioDivider = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(function RadioDivider(props, ref) {
  return <div ref={ref} className="govuk-radios__divider" {...props} />;
});

export const RadioConditional = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(function RadioConditional(props, ref) {
  return (
    <div
      ref={ref}
      className="govuk-radios__conditional govuk-radios__conditional--hidden"
      {...props}
    />
  );
});

export interface RadiosProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'base' | 'small';
  inline?: boolean;
  name?: string;
  error?: string;
}

export const Radios = forwardRef<HTMLDivElement, RadiosProps>(function Radios(
  { variant = 'base', inline = false, name, children, error, ...props },
  ref
) {
  const localRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (localRef.current) {
      new RadiosJs(localRef.current).init();
    }
  }, []);

  const hasConditionals = useMemo(
    () =>
      Children.toArray(children).some(
        (child) => isValidElement(child) && child.type === RadioConditional
      ),
    [children]
  );

  return (
    <div
      ref={mergeRefs([localRef, ref])}
      className={cn(
        'govuk-radios',
        {
          'govuk-radios-small': variant === 'small',
          'govuk-radios--inline': inline,
          'govuk-radios--conditionals': hasConditionals,
        },
        'lbh-radios'
      )}
      {...props}
    >
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child, {
            name,
          })
      )}
    </div>
  );
});
