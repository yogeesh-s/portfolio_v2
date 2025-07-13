'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  as?: 'button' | 'link';
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  variant = 'primary',
  href,
  as = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium text-sm rounded-full transition-colors px-4 py-1.5 shadow-sm';

  const variants = {
    primary:
      'bg-[var(--accent)] text-black hover:bg-[var(--accent-dark)]',
    secondary:
      'border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]',
    ghost:
      'text-[var(--text-secondary)] hover:text-[var(--accent)]',
  };

  const classes = clsx(base, variants[variant], className);

  if (as === 'link' && href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
