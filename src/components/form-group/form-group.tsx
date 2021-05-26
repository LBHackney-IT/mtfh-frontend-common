import React, {
  Children,
  ElementType,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
} from 'react';
import classNames from 'classnames';

import { PolymorphicComponentProps } from '../../types';
import { TextArea } from '../text-area';
import './styles.scss';

export interface FormGroupOwnProps {
  id: string;
  name: string;
  label: string;
  hint?: string;
  error?: string | false;
  required?: boolean;
  children: ReactElement;
}

export type FormGroupProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  FormGroupOwnProps
>;

export function FormGroupWithRef<C extends ElementType = 'div'>(
  {
    as,
    id,
    name,
    label,
    hint,
    error,
    required,
    children,
    className,
    ...props
  }: FormGroupProps<C>,
  ref: any
): JSX.Element {
  const formGroupClasses = classNames(
    'govuk-form-group',
    {
      'govuk-form-group--error': !!error,
    },
    'lbh-form-group',
    className
  );

  const describedBy = useMemo(() => {
    const classes: string[] = [];
    if (hint) {
      classes.push(`${id}-hint`);
    }
    if (error) {
      classes.push(`${id}-error`);
    }
    return classes.join(' ');
  }, [id, hint, error]);

  const Component = as || 'div';

  const formGroup = (
    <Component ref={ref} className={formGroupClasses} {...props}>
      <label className="govuk-label lbh-label" htmlFor={id}>
        {label}
        {required ? <sup>*</sup> : ''}
      </label>
      {!!hint && (
        <span id={`${id}-hint`} className="govuk-hint lbh-hint">
          {hint}
        </span>
      )}
      {!!error && (
        <span
          id={`${id}-error`}
          className="govuk-error-message lbh-error-message"
        >
          <span className="govuk-visually-hidden">Error:</span> {error}
        </span>
      )}
      {!!children &&
        Children.only(
          cloneElement(children, {
            id,
            name,
            required,
            error: !!error,
            'aria-describedby': describedBy || undefined,
          })
        )}
    </Component>
  );

  return isValidElement(children) && children.type === TextArea ? (
    <div className="govuk-character-count">{formGroup}</div>
  ) : (
    formGroup
  );
}

export const FormGroup: <C extends ElementType = 'button'>(
  props: FormGroupProps<C>
) => JSX.Element | null = forwardRef(FormGroupWithRef);
