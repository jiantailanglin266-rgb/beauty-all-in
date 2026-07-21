'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroFv from '@/assets/hero-fv.jpg';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/gtag';

/**
 * ファーストビュー（画像先行型＋ハイエンドなアニメーション）
 * ------------------------------------------------------------
 * 演出：
 *  1. 下から立ち上がるリビール＋スケールの沈み込み（settle）… CSS(.hero-reveal)
 *  2. 一度だけ走る光沢スイープ（sheen）… CSS(.hero-sheen)
 *  3. 主CTAの呼吸するゴールドグロー（視線誘導）… CSS(.hero-cta-glow)
 *  4. 背景に漂うゴールドの光… CSS(.hero-orb-a/b)
 *  5. スクロール連動の控えめなパララックス… Framer(useScroll)
 *
 * 設計方針：LCP画像を隠す演出はJSではなくCSSで駆動（初回ペイントで発火し、
 * JSが失敗しても必ず表示状態で着地）。Framerは「失敗しても画像が見える」
 * パララックスにのみ使用。画像内の焼き込みCTAには透明の実クリック領域を重ね計測維持。
 *
 * 画像差し替え手順：src/assets/hero-fv.jpg（1024×1536・2:3）を同名で置き換え。
 * ボタン位置が変わる場合は overlay の top/left/width/height（％）を調整。
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // スクロールで画像がゆっくり沈む（パララックス）。JS不発時は 0＝通常位置で表示。
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const decorOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden bg-white pt-20 lg:pt-24"
    >
      {/* 背景に漂うゴールドの光（CSSで浮遊、スクロールで退場） */}
      <motion.div
        aria-hidden
        style={{ opacity: decorOpacity }}
        className="hero-orb-a pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ opacity: decorOpacity }}
        className="hero-orb-b pointer-events-none absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      {/* SEO・スクリーンリーダー用（画像内の文言をテキストでも保持） */}
      <h1 className="sr-only">集客に必要なことを、全部ひとつに。</h1>
      <p className="sr-only">
        ホームページ、SEO、MEO、AI検索対策、Instagram導線、CRMまで。美容サロン・クリニック・接骨院の集客と業務を、月額
        {siteConfig.price.monthlyExcl.toLocaleString()}円（{siteConfig.price.taxNote}
        ）でまとめて支援します。ポータルサイトに頼り切る集客から、自社に顧客と集客資産が残る仕組みへ。
        ※{siteConfig.disclaimers.scope}※{siteConfig.disclaimers.noGuarantee}
      </p>

      <div className="container-content relative pb-10 sm:pb-14">
        <motion.div
          style={{ y: parallaxY }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          {/* 画像：CSSリビール＋settle（初回ペイントで発火） */}
          <div className="hero-reveal relative overflow-hidden rounded-2xl shadow-[0_16px_50px_-16px_rgba(28,28,30,0.22)] ring-1 ring-charcoal/5">
            <Image
              src={heroFv}
              alt="集客に必要なことを、全部ひとつに。ホームページ・SEO・MEO・AI検索対策・Instagram導線・CRMまで、美容サロン・クリニック・接骨院の集客を月額30,000円（税込33,000円）で一括支援"
              priority
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, 620px"
              className="h-auto w-full"
            />
            {/* 光沢スイープ（一度だけ） */}
            <span
              aria-hidden
              className="hero-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
            />
          </div>

          {/* 焼き込みボタン上の透明クリック領域（無料相談）＋呼吸するグロー */}
          <a
            href="#contact"
            onClick={() => trackEvent('hero_consultation_click')}
            aria-label={siteConfig.cta.primary}
            className="absolute left-[3%] top-[41.5%] block h-[5.6%] w-[40%] rounded-full focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <span
              aria-hidden
              className="hero-cta-glow absolute -inset-1 rounded-full bg-gold/25 opacity-0 blur-md"
            />
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
        </motion.div>
      </div>
    </section>
  );
}
