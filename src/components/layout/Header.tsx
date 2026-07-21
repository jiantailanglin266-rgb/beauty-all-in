'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/gtag';

const navItems = [
  { label: 'サービス内容', href: '#services' },
  { label: '選ばれる理由', href: '#comparison' },
  { label: '料金', href: '#pricing' },
  { label: '導入の流れ', href: '#flow' },
  { label: 'よくある質問', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // メニュー開閉時に背面スクロールを固定
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/90 shadow-[0_1px_0_rgba(28,28,30,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between lg:h-20">
        {/* ロゴ */}
        <Link
          href="#top"
          className="group flex items-center gap-2"
          aria-label={`${siteConfig.serviceName} トップへ`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-charcoal text-[11px] font-bold tracking-tight text-gold">
            BAI
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-charcoal">
            {siteConfig.serviceName}
          </span>
        </Link>

        {/* PCナビ */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-gold-dark"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => trackEvent('hero_consultation_click')}
            className="btn-dark px-5 py-2.5 text-sm"
          >
            お問い合わせ
          </a>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-charcoal lg:hidden"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div className="border-t border-charcoal/10 bg-ivory lg:hidden">
          <nav className="container-content flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/5 py-3.5 text-[15px] font-medium text-charcoal"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                setOpen(false);
                trackEvent('hero_consultation_click');
              }}
              className="btn-dark mt-4 w-full"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
