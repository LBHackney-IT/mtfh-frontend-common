import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'classnames';

import './styles.scss';

export interface TableProps extends ComponentPropsWithoutRef<'table'> {}
export const Table = forwardRef<HTMLTableElement, TableProps>(function Thead(
  { className, ...props },
  ref
) {
  return (
    <table
      ref={ref}
      className={cn('govuk-table', 'lbh-table', className)}
      {...props}
    />
  );
});

export interface TheadProps extends ComponentPropsWithoutRef<'thead'> {}
export const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
  function Thead({ children, ...props }, ref) {
    return (
      <thead ref={ref} className="govuk-table__head" {...props}>
        {children}
      </thead>
    );
  }
);

export interface TbodyProps extends ComponentPropsWithoutRef<'tbody'> {}
export const Tbody = forwardRef<HTMLTableSectionElement, TbodyProps>(
  function Tbody({ children, ...props }, ref) {
    return (
      <tbody ref={ref} className="govuk-table__body" {...props}>
        {children}
      </tbody>
    );
  }
);

export interface TrProps extends ComponentPropsWithoutRef<'tr'> {}
export const Tr = forwardRef<HTMLTableRowElement, TrProps>(function Tr(
  { children, ...props },
  ref
) {
  return (
    <tr ref={ref} className="govuk-table__row" {...props}>
      {children}
    </tr>
  );
});

export interface ThProps extends ComponentPropsWithoutRef<'th'> {
  isNumeric?: boolean;
}
export const Th = forwardRef<HTMLTableHeaderCellElement, ThProps>(function Th(
  { children, isNumeric, ...props },
  ref
) {
  const linkedClasses = cn('govuk-table__cell', 'govuk-table__header', {
    'govuk-table__cell--numeric': isNumeric,
  });

  return (
    <th ref={ref} className={linkedClasses} {...props}>
      {children}
    </th>
  );
});

export interface TdProps extends ComponentPropsWithoutRef<'td'> {
  isNumeric?: boolean;
}
export const Td = forwardRef<HTMLTableCellElement, TdProps>(function Td(
  { children, isNumeric },
  ref
) {
  const linkedClasses = cn('govuk-table__cell', {
    'govuk-table__cell--numeric': isNumeric,
  });

  return (
    <td ref={ref} className={linkedClasses}>
      {children}
    </td>
  );
});

export interface TableCaptionProps extends ComponentPropsWithoutRef<'caption'> {
  title: string;
  variant?: 'xlarge' | 'large' | 'medium' | 'small';
}
export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(function TableCaption({ title, variant }, ref) {
  const linkedClasses = cn('govuk-table__caption', 'lbh-table__caption', {
    'govuk-table__caption--s': variant === 'small',
    'govuk-table__caption--m': variant === 'medium',
    'govuk-table__caption--l': variant === 'large',
    'govuk-table__caption--xl': variant === 'xlarge',
  });

  return <caption className={linkedClasses}>{title}</caption>;
});
