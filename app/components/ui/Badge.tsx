import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-4 py-1 rounded-full bg-brand-blue-500 text-white text-xs font-semibold uppercase tracking-wide ${className}`}>
      {children}
    </span>
  );
}
