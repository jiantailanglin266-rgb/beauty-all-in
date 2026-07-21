'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText, Check } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/gtag';

const chips = [
  '集客支援',
  'ホームページ',
  'SEO',
  'LLMO',
  'MEO',
  'SNS導線',
  'CRM',
  '店舗ビジネス特化',
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-radial pt-28 text-ivory sm:pt-32 lg:pt-40"
    >
      {/* 背景の装飾グリッド */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="container-content relative pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* 左：コピー */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-light">
                美容サロン・クリニック・接骨院の集客オールインワン
              </span>

              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                集客に必要なことを、
                <br />
                <span className="text-gold">全部ひとつに。</span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/75 sm:text-base">
                ホームページ、SEO、MEO、AI検索対策、Instagram導線、CRMまで。
                美容サロン・クリニック・接骨院の集客と業務を、
                <span className="font-semibold text-ivory">
                  月額{siteConfig.price.monthlyExcl.toLocaleString()}円
                </span>
                でまとめて支援。
              </p>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/55">
                ポータルサイトに頼り切る集客から、
                <br className="hidden sm:block" />
                自社に顧客と集客資産が残る仕組みへ。
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                onClick={() => trackEvent('hero_consultation_click')}
                className="btn-primary"
              >
                <MessageCircle size={20} />
                {siteConfig.cta.primary}
              </a>
              <a
                href="#contact"
                onClick={() => trackEvent('hero_document_click')}
                className="btn border border-ivory/25 text-ivory hover:border-gold hover:text-gold"
              >
                <FileText size={20} />
                {siteConfig.cta.secondary}
              </a>
            </motion.div>

            {/* チップ */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {chips.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-ivory/5 px-3 py-1.5 text-xs font-medium text-ivory/80"
                >
                  <Check size={13} className="text-gold" />
                  {c}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* 右：ビジュアル（管理画面イメージ／画像差し替え箇所） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* 料金バッジ */}
        <div className="mt-12 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-gold/30 bg-charcoal-soft/60 px-5 py-3">
          <span className="text-xs text-ivory/60">月額</span>
          <span className="font-serif text-2xl font-bold text-gold">
            {siteConfig.price.monthlyExcl.toLocaleString()}円
          </span>
          <span className="text-xs text-ivory/60">
            （{siteConfig.price.taxNote}）
          </span>
        </div>

        {/* 注意書き */}
        <p className="mt-6 max-w-2xl text-[11px] leading-relaxed text-ivory/45">
          ※{siteConfig.disclaimers.scope}
          <br />※{siteConfig.disclaimers.noGuarantee}
        </p>
      </div>
    </section>
  );
}

/** 管理画面／予約画面を想起させるモックビジュアル（画像差し替え箇所） */
function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* ダッシュボード風カード */}
      <div className="rounded-2xl border border-ivory/10 bg-charcoal-soft/80 p-4 shadow-2xl backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ivory/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-ivory/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-ivory/20" />
          </div>
          <span className="text-[10px] text-ivory/40">集客ダッシュボード</span>
        </div>

        {/* KPI行 */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: '予約数', value: '128' },
            { label: '新規率', value: '42%' },
            { label: '再来店', value: '64%' },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-lg border border-ivory/10 bg-ivory/5 p-3"
            >
              <p className="text-[10px] text-ivory/50">{k.label}</p>
              <p className="mt-1 font-serif text-lg font-bold text-gold">
                {k.value}
              </p>
            </div>
          ))}
        </div>

        {/* 流入グラフ風 */}
        <div className="mt-3 rounded-lg border border-ivory/10 bg-ivory/5 p-3">
          <p className="mb-2 text-[10px] text-ivory/50">流入チャネル</p>
          <div className="flex items-end gap-1.5" style={{ height: 72 }}>
            {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-gold/40 to-gold"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* チャネルリスト */}
        <div className="mt-3 space-y-1.5">
          {['自社HP・SEO', 'Googleマップ / MEO', 'Instagram導線'].map((c) => (
            <div
              key={c}
              className="flex items-center justify-between rounded-md bg-ivory/5 px-3 py-2 text-[11px] text-ivory/70"
            >
              <span>{c}</span>
              <span className="text-gold">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* スマホ予約画面 */}
      <div className="absolute -bottom-6 -left-4 hidden w-36 rotate-[-6deg] rounded-2xl border border-ivory/10 bg-ivory p-2.5 shadow-2xl sm:block">
        <div className="rounded-lg bg-charcoal/5 p-2">
          <p className="text-[9px] font-bold text-charcoal">ご予約フォーム</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-2 rounded bg-charcoal/10" />
            <div className="h-2 w-3/4 rounded bg-charcoal/10" />
            <div className="mt-2 rounded-md bg-gold py-1.5 text-center text-[9px] font-bold text-charcoal">
              予約する
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
