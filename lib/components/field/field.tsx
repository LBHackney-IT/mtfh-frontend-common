import React, { ComponentPropsWithoutRef, ReactElement, cloneElement } from "react";

import { useField } from "formik";

import { DateInput } from "../date-input";
import { FormGroup } from "../form-group";
import { NumberInputProps } from "../number-input";
import { SelectProps } from "../select";
import { TimeInput } from "../time-input";

export interface FieldProps {
  name: string;
  id: string;
  label: string;
  children: ReactElement;
  className?: string;
  required?: boolean;
  type?: "checkbox" | "radio" | "text" | "number";
}

export const Field = ({
  id,
  label,
  children,
  name,
  type,
  ...props
}: FieldProps): JSX.Element => {
  const [field, meta] = useField({ name, type, value: children.props.value });
  const comp = type === "checkbox" || type === "radio" ? "fieldset" : "div";
  return (
    <FormGroup as={comp} id={id} label={label} error={meta.error} {...props}>
      {cloneElement(children, { ...field })}
    </FormGroup>
  );
};

export interface InlineFieldProps {
  name: string;
  children: ReactElement;
  type?: "checkbox" | "radio" | "text" | "number";
}

export const InlineField = ({
  children,
  name,
  type,
  ...props
}: InlineFieldProps): JSX.Element => {
  const [field, meta] = useField({ name, type, value: children.props.value });
  return cloneElement(children, { ...field, ...props, error: meta.error });
};

type DateInputFieldProps = Omit<NumberInputProps, "name"> & { name: string };

export interface DateFieldProps extends ComponentPropsWithoutRef<"fieldset"> {
  id: string;
  label: string;
  dayProps: DateInputFieldProps;
  monthProps: DateInputFieldProps;
  yearProps: DateInputFieldProps;
  dayLabel?: string;
  monthLabel?: string;
  yearLabel?: string;
  required?: boolean;
}

export const DateField = ({
  dayProps: { name: dayName, ...dayProps },
  monthProps: { name: monthName, ...monthProps },
  yearProps: { name: yearName, ...yearProps },
  dayLabel = "Day",
  monthLabel = "Month",
  yearLabel = "Year",
  ...props
}: DateFieldProps): JSX.Element => {
  const [dayField, dayMeta] = useField(dayName);
  const [monthField, monthMeta] = useField(monthName);
  const [yearField, yearMeta] = useField(yearName);

  const error = dayMeta.error || monthMeta.error || yearMeta.error;

  return (
    <FormGroup as="fieldset" error={error} {...props}>
      <DateInput
        dayProps={{ ...dayField, ...dayProps, error: !!dayMeta.error }}
        dayLabel={dayLabel}
        monthProps={{
          ...monthField,
          ...monthProps,
          error: !!monthMeta.error,
        }}
        monthLabel={monthLabel}
        yearProps={{ ...yearField, ...yearProps, error: !!yearMeta.error }}
        yearLabel={yearLabel}
      />
    </FormGroup>
  );
};

type TimeInputFieldProps = Omit<NumberInputProps, "name"> & { name: string };
type SelectFieldProps = Omit<SelectProps, "name"> & { name: string };

export interface TimeFieldProps extends ComponentPropsWithoutRef<"fieldset"> {
  id: string;
  label: string;
  hourProps: TimeInputFieldProps;
  minuteProps: TimeInputFieldProps;
  amPmProps: SelectFieldProps;
  hourLabel?: string;
  minuteLabel?: string;
  amPmLabel?: string;
  required?: boolean;
}

export const TimeField = ({
  hourProps: { name: hourName, ...hourProps },
  minuteProps: { name: minuteName, ...minuteProps },
  amPmProps: { name: amPmName, ...amPmProps },
  hourLabel = "Hour",
  minuteLabel = "Minute",
  amPmLabel = "am/pm",
  ...props
}: TimeFieldProps): JSX.Element => {
  const [hourField, hourMeta] = useField(hourName);
  const [minuteField, minuteMeta] = useField(minuteName);
  const [amPmField, amPmMeta] = useField(amPmName);

  const error = hourMeta.error || minuteMeta.error || amPmMeta.error;

  return (
    <FormGroup as="fieldset" error={error} {...props}>
      <TimeInput
        hourProps={{ ...hourField, ...hourProps, error: !!hourMeta.error }}
        hourLabel={hourLabel}
        minuteProps={{
          ...minuteField,
          ...minuteProps,
          error: !!minuteMeta.error,
        }}
        minuteLabel={minuteLabel}
        amPmProps={{
          ...amPmField,
          ...amPmProps,
          error: !!amPmMeta.error,
        }}
        amPmLabel={amPmLabel}
      />
    </FormGroup>
  );
};
