import React, { forwardRef, useCallback, useState } from 'react';

import { Input, InputProps } from '../input';

export interface NumberInputProps extends InputProps {
  min?: number;
  max?: number;
  value?: string | number;
  defaultValue?: string | number;
  maxLength?: number;
  padStart?: number;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(
    {
      onChange,
      onBlur,
      min,
      max,
      value,
      defaultValue,
      maxLength,
      padStart = 0,
      ...props
    },
    ref
  ) {
    const parser = useCallback(
      (num: string | number) => {
        let numString = String(num).replace(/[^\d]+/g, '');
        if (maxLength !== undefined && maxLength < numString.length) {
          numString = numString.slice(0, maxLength);
        }

        return numString;
      },
      [maxLength]
    );

    const formatter = useCallback(
      (num: string | number) => {
        let numInt = parseInt(String(num), 10);
        if (max !== undefined && numInt > max) {
          numInt = max;
        }

        if (min !== undefined && numInt < min) {
          numInt = min;
        }

        return String(numInt).padStart(padStart, '0');
      },
      [min, max, padStart]
    );

    const [output, setOutput] = useState(parser(defaultValue ?? value ?? ''));

    return (
      <Input
        ref={ref}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={parseInt(output, 10)}
        value={output}
        onChange={(e) => {
          const update = parser(e.target.value);
          e.target.value = update;
          e.currentTarget.value = update;
          setOutput(update);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          const update = formatter(e.target.value);
          e.target.value = update;
          e.currentTarget.value = update;
          setOutput(update);
          if (onChange) {
            onChange(e);
          }
          if (onBlur) {
            onBlur(e);
          }
        }}
        {...props}
      />
    );
  }
);
