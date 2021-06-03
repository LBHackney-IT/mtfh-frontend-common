import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import cn from 'classnames';
import './styles.scss';

export const SimplePagination = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'nav'>
>(function SimplePagination({ className, ...props }, ref) {
  return (
    <nav
      ref={ref}
      className={cn('lbh-simple-pagination', className)}
      {...props}
    />
  );
});

export interface SimplePaginationButtonProps
  extends ComponentPropsWithoutRef<'button'> {
  title?: string;
  variant: 'previous' | 'next';
}

export const SimplePaginationButton = forwardRef<
  HTMLButtonElement,
  SimplePaginationButtonProps
>(function SimplePaginationButton(
  { variant, className, title, children, ...props },
  ref
) {
  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        'lbh-simple-pagination__link',
        { 'lbh-simple-pagination__link--next': variant === 'next' },
        className
      )}
      {...props}
    >
      {variant === 'previous' ? (
        <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
          <path d="M10 1L2 9.5L10 18" strokeWidth="2" />
        </svg>
      ) : null}
      {children}
      {title ? (
        <span className="lbh-simple-pagination__title">{title}</span>
      ) : null}
      {variant === 'next' ? (
        <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
          <path d="M1 18L9 9.5L1 1" strokeWidth="2" />
        </svg>
      ) : null}
    </button>
  );
});
