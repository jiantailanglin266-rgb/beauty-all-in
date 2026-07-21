'use client';

import Image from 'next/image';
import heroFv from '@/assets/hero-fv.jpg';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/gtag';

/**
 * ファーストビュー（画像先行型）
 * ------------------------------------------------------------
 * 完成デザイン画像を1枚のビジュアルとして大きく表示し、
 * 画像内に焼き込まれたCTAボタンの上に「透明の実クリック領域」を重ねて
 * 実際に押せる・計測できるようにしています。
 * 見出し等のテキストは SEO / アクセシビリティ用に sr-only で保持。
 *
 * 画像差し替え手順：src/assets/hero-fv.jpg（1024×1536・2:3）を同名で置き換え。
 * ボタン位置が変わる場合は下部の overlay の top/left/width/height（％）を調整。
 */
export function Hero() {
  return (
    <section id="top" className="relative bg-white pt-20 lg:pt-24">
      {/* SEO・スクリーンリーダー用（画像内の文言をテキストでも保持） */}
      <h1 className="sr-only">
        集客に必要なことを、全部ひとつに。
      </h1>
      <p className="sr-only">
        ホームページ、SEO、MEO、AI検索対策、Instagram導線、CRMまで。美容サロン・クリニック・接骨院の集客と業務を、月額
        {siteConfig.price.monthlyExcl.toLocaleString()}円（{siteConfig.price.taxNote}
        ）でまとめて支援します。ポータルサイトに頼り切る集客から、自社に顧客と集客資産が残る仕組みへ。
        ※{siteConfig.disclaimers.scope}※{siteConfig.disclaimers.noGuarantee}
      </p>

      <div className="container-content pb-10 sm:pb-14">
        <div className="relative mx-auto w-full max-w-[620px]">
          <Image
            src={heroFv}
            alt="集客に必要なことを、全部ひとつに。ホームページ・SEO・MEO・AI検索対策・Instagram導線・CRMまで、美容サロン・クリニック・接骨院の集客を月額30,000円（税込33,000円）で一括支援"
            priority
            placeholder="blur"
            sizes="(max-width: 640px) 100vw, 620px"
            className="h-auto w-full rounded-2xl shadow-[0_16px_50px_-16px_rgba(28,28,30,0.22)] ring-1 ring-charcoal/5"
          />

          {/* 焼き込みボタン上の透明クリック領域（無料相談） */}
          <a
            href="#contact"
            onClick={() => trackEvent('hero_consultation_click')}
            aria-label={siteConfig.cta.primary}
            className="absolute left-[3%] top-[41.5%] block h-[5.6%] w-[40%] rounded-full focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <span className="sr-only">{siteConfig.cta.primary}</span>
          </a>

          {/* 焼き込みボタン上の透明クリック領域（資料請求） */}
          <a
            href="#contact"
            onClick={() => trackEvent('hero_document_click')}
            aria-label={siteConfig.cta.secondary}
            className="absolute left-[3%] top-[47.6%] block h-[4.9%] w-[39%] rounded-full focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <span className="sr-only">{siteConfig.cta.secondary}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
