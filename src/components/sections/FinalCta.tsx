'use client';

import Image from 'next/image';
import finalCtaImg from '@/assets/finalcta.jpg';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/gtag';

/**
 * 最終CTA（画像先行型）
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。見出し・本文は SEO / アクセシビリティ用に
 * sr-only で保持。画像内に焼き込まれた2つのボタンの上に透明の実クリック領域を
 * 重ね、実際に押せる・計測できるようにしています。
 *
 * 画像差し替え手順：src/assets/finalcta.jpg（864×1821・約1:2.1）を同名で置き換え。
 * ボタン位置が変わる場合は overlay の top/left/width/height（％）を調整。
 */
export function FinalCta() {
  return (
    <section className="section border-t border-charcoal/5 bg-white">
      {/* SEO・スクリーンリーダー用（画像内テキストをテキストでも保持） */}
      <h2 className="sr-only">
        集客の悩みを、一つずつ別の会社に相談するのは終わりにしませんか？
      </h2>
      <p className="sr-only">
        まずは現在の集客状況や固定費をお聞かせください。店舗に必要な施策を整理し、優先順位をご提案します。相談は無料です。
      </p>

      <div className="container-content">
        <div className="relative mx-auto w-full max-w-[460px]">
          <Image
            src={finalCtaImg}
            alt="集客の悩みを、一つずつ別の会社に相談するのは終わりにしませんか？ まずは現在の集客状況や固定費をお聞かせください。相談は無料です。"
            placeholder="blur"
            sizes="(max-width: 460px) 100vw, 460px"
            className="h-auto w-full rounded-2xl shadow-[0_16px_50px_-16px_rgba(28,28,30,0.22)] ring-1 ring-charcoal/5"
          />

          {/* 焼き込みボタン上の透明クリック領域（無料相談） */}
          <a
            href="#contact"
            onClick={() => trackEvent('hero_consultation_click')}
            aria-label={siteConfig.cta.primary}
            className="absolute left-[4%] top-[66%] block h-[10%] w-[92%] rounded-2xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <span className="sr-only">{siteConfig.cta.primary}</span>
          </a>

          {/* 焼き込みボタン上の透明クリック領域（資料請求） */}
          <a
            href="#contact"
            onClick={() => trackEvent('hero_document_click')}
            aria-label={siteConfig.cta.document}
            className="absolute left-[4%] top-[78.3%] block h-[9.8%] w-[92%] rounded-2xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <span className="sr-only">{siteConfig.cta.document}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
