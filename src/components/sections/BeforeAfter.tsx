import { ArrowRight } from 'lucide-react';
import { beforeAfter } from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function BeforeAfter() {
  return (
    <section className="section border-t border-charcoal/5 bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Before / After"
          title={<span className="gold-rule">導入後、集客はこう変わる</span>}
          description="ポータル頼みの集客から、自社に資産が積み上がる集客へ。"
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {/* ヘッダー行 */}
          <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-4 px-2 text-xs font-semibold sm:grid">
            <span className="text-muted">Before（導入前）</span>
            <span />
            <span className="text-right text-gold-dark">After（導入後）</span>
          </div>

          {beforeAfter.map((row, i) => (
            <Reveal key={row.before} delay={i * 0.05}>
              <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
                {/* Before */}
                <div className="flex items-center rounded-xl border border-charcoal/8 bg-sand/60 px-4 py-4 text-[14px] text-muted">
                  {row.before}
                </div>
                {/* 矢印 */}
                <div className="flex items-center justify-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-dark sm:rotate-0">
                    <ArrowRight size={16} className="max-sm:rotate-90" />
                  </span>
                </div>
                {/* After */}
                <div className="flex items-center rounded-xl border border-gold/25 bg-white px-4 py-4 text-[14px] font-medium text-charcoal shadow-card">
                  {row.after}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
