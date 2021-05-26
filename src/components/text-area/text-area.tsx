import React, {
  ChangeEvent,
  ChangeEventHandler,
  ElementType,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';

import { PolymorphicComponentProps } from '../../types';
import { pluralize } from '../../utils';

export interface TextAreaOwnProps {
  onChange: ChangeEventHandler<Element>;
  maxLength?: number;
  error?: boolean;
}

export type TextAreaProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  TextAreaOwnProps
>;

const getLengthOfValue = (
  initialValue: string | number | readonly string[] | undefined
) => {
  if (typeof initialValue === 'string') {
    return initialValue.length;
  }
  if (Array.isArray(initialValue)) {
    return initialValue.join(',').length;
  }
  return String(initialValue || '').length;
};

export function TextAreaWithRef<C extends ElementType = 'textarea'>(
  { as, maxLength, error, className, onChange, ...props }: TextAreaProps<C>,
  ref: any
): JSX.Element {
  const { value, defaultValue } = props;
  const isControlled = value !== undefined;
  const initialValue = value || defaultValue;

  const [characterCount, setCharacterCount] = useState(
    getLengthOfValue(initialValue)
  );

  const onChangeHandler = useCallback(
    (
      event: ChangeEvent<
        JSX.LibraryManagedAttributes<C, React.ComponentPropsWithRef<C>>[string]
      >
    ) => {
      if (
        event?.currentTarget?.value !== undefined &&
        !isControlled &&
        maxLength !== undefined
      ) {
        setCharacterCount(String(event.currentTarget.value).length);
      }

      if (onChange) {
        onChange(event);
      }
    },
    [onChange, maxLength, isControlled]
  );

  const exceedingValue = useMemo(
    () =>
      maxLength !== undefined &&
      maxLength - (isControlled ? getLengthOfValue(value) : characterCount),
    [maxLength, characterCount, value, isControlled]
  );

  const textareaClasses = classNames(
    'govuk-textarea',
    { 'govuk-textarea--error': error },
    'lbh-character-count',
    className
  );

  const messageClasses = classNames(
    { 'govuk-hint': exceedingValue !== false && exceedingValue >= 0 },
    'govuk-character-count__message',
    {
      'govuk-error-message': exceedingValue !== false && exceedingValue < 0,
    }
  );

  const Component = as || 'textarea';

  return (
    <>
      <Component
        ref={ref}
        className={textareaClasses}
        onChange={onChangeHandler}
        {...props}
      />
      {maxLength !== undefined && exceedingValue !== false && (
        <span className={messageClasses} aria-live="polite">
          {exceedingValue >= 0
            ? `You have ${exceedingValue} ${pluralize(
                'character',
                exceedingValue
              )} remaining`
            : `You have ${Math.abs(exceedingValue)} ${pluralize(
                'character',
                exceedingValue
              )} too many`}
        </span>
      )}
    </>
  );
}

export const TextArea: <C extends ElementType = 'textarea'>(
  props: TextAreaProps<C>
) => JSX.Element | null = forwardRef(TextAreaWithRef);
