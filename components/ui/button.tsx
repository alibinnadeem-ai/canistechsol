import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = BaseProps & {
  href: string;
};

type NativeButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-700',
  secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
  ghost: 'text-slate-700 hover:bg-slate-100',
};

const baseClasses = 'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition';

export function Button(props: LinkProps | NativeButtonProps) {
  const variant = props.variant ?? 'primary';
  const className = cn(baseClasses, variantClasses[variant], props.className);

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={className}>
      {children}
    </button>
  );
}
