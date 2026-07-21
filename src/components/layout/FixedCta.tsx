'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/gtag';

/**
 * スマートフォン画面下部の固定CTA（無料相談 / 電話相談）。
 * ファーストビューを抜けたあたりで表示します。
 */
export function FixedCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-2 gap-px border-t border-charcoal/10 bg-charcoal/10 shadow-[0_-4px_20px_-6px_rgba(28,28,30,0.25)]">
        <a
          href={siteConfig.company.telHref}
          onClick={() => {
            trackEvent('fixed_cta_click', { type: 'phone' });
            trackEvent('phone_click');
          }}
          className="flex items-center justify-center gap-2 bg-white py-3.5 text-sm font-bold text-charcoal"
        >
          <Phone size={18} className="text-gold-dark" />
          電話で相談
        </a>
        <a
          href="#contact"
          onClick={() => trackEvent('fixed_cta_click', { type: 'consultation' })}
          className="flex items-center justify-center gap-2 bg-gold py-3.5 text-sm font-bold text-charcoal"
        >
          <MessageCircle size={18} />
          無料相談
        </a>
      </div>
    </div>
  );
}
