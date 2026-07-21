'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackEvent, type AnalyticsEvent } from '@/lib/gtag';

type Props = {
  href: string;
  children: ReactNode;
  event?: AnalyticsEvent;
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

/**
 * コンバージョン計測イベントを発火する CTA ボタン。
 * 内部アンカー（#form 等）は smooth scroll、外部は新規タブ。
 */
export function CtaButton({
  href,
  children,
  event,
  variant = 'primary',
  className = '',
  external = false,
  ariaLabel,
}: Props) {
  const cls = `${
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'dark'
        ? 'btn-dark'
        : 'btn-secondary'
  } ${className}`;

  const onClick = () => {
    if (event) trackEvent(event);
  };

  if (external) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
