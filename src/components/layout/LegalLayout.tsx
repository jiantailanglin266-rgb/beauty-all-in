import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import logo from '@/assets/logo.png';
import { siteConfig } from '@/config/site';

/** 規約・ポリシー等の下層ページ共通レイアウト */
export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* 簡易ヘッダー */}
      <header className="border-b border-charcoal/8 bg-white/90 backdrop-blur">
        <div className="container-content flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label={siteConfig.serviceName}
          >
            <Image src={logo} alt={siteConfig.serviceName} className="h-7 w-auto sm:h-8" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/70 hover:text-gold-dark"
          >
            <ArrowLeft size={16} />
            トップへ戻る
          </Link>
        </div>
      </header>

      <main className="container-content py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-charcoal sm:text-3xl">
            {title}
          </h1>
          {updatedAt && (
            <p className="mt-2 text-xs text-muted">最終更新日：{updatedAt}</p>
          )}
          <div className="legal-body mt-10 space-y-8">{children}</div>
        </div>
      </main>

      <footer className="border-t border-charcoal/8 py-8">
        <div className="container-content text-center text-xs text-muted">
          © 2025 {siteConfig.company.name} / {siteConfig.serviceName}
        </div>
      </footer>
    </div>
  );
}

/** 規約本文の見出し + 段落ブロック */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-charcoal">{heading}</h2>
      <div className="space-y-3 text-[14px] leading-relaxed text-charcoal/80">
        {children}
      </div>
    </section>
  );
}
