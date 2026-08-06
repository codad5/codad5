'use client';

import { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from './useReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  variant?: 'up' | 'scale' | 'line';
  style?: CSSProperties;
}

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  variant = 'up',
  style,
}: RevealProps) {
  const { ref, inView } = useReveal<HTMLElement>();
  const base =
    variant === 'scale' ? 'ed-reveal-scale' : variant === 'line' ? 'ed-line' : 'ed-reveal';

  return (
    <Tag
      ref={ref}
      className={`${base} ${inView ? 'ed-in' : ''} ${className}`}
      style={{ ...style, ['--ed-delay' as string]: `${delay}ms` } as CSSProperties}
    >
      {variant === 'line' ? <span>{children}</span> : children}
    </Tag>
  );
}
