import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'お問い合わせありがとうございます',
  description: 'お問い合わせを受け付けました。',
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-radial px-5 py-16 text-ivory">
      <div className="w-full max-w-lg rounded-3xl border border-gold/25 bg-charcoal-soft/70 p-8 text-center shadow-2xl backdrop-blur sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 size={36} />
        </div>
        <h1 className="mt-6 font-serif text-2xl font-bold text-ivory sm:text-3xl">
          お問い合わせ
          <br className="sm:hidden" />
          ありがとうございます
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-ivory/75">
          内容を確認のうえ、
          <span className="font-semibold text-ivory">
            {siteConfig.company.businessHours}
          </span>
          を目安に担当者よりご連絡いたします。
          <br />
          今しばらくお待ちください。
        </p>

        <div className="mt-8 rounded-xl border border-ivory/10 bg-ivory/5 p-5 text-left text-sm text-ivory/70">
          <p className="mb-2 font-semibold text-ivory/90">お急ぎの場合</p>
          <p>
            お電話でもご相談を承ります。
            <br />
            <a
              href={siteConfig.company.telHref}
              className="mt-1 inline-block text-lg font-bold text-gold"
            >
              {siteConfig.company.tel}
            </a>
            <span className="ml-2 text-xs text-ivory/50">
              （{siteConfig.company.businessHours}）
            </span>
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
        >
          <ArrowLeft size={16} />
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
