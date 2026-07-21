import { Check, Minus, Triangle, Info } from 'lucide-react';
import {
  comparisonColumns,
  comparisonRows,
  comparisonFairNote,
  type CompareValue,
} from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

function Mark({ value }: { value: CompareValue }) {
  if (value === 'yes')
    return (
      <span className="inline-flex items-center justify-center text-gold-dark">
        <Check size={20} strokeWidth={2.5} />
        <span className="sr-only">対応</span>
      </span>
    );
  if (value === 'partial')
    return (
      <span className="inline-flex items-center justify-center text-charcoal/40">
        <Triangle size={15} />
        <span className="sr-only">一部対応</span>
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center text-charcoal/25">
      <Minus size={18} />
      <span className="sr-only">対象外</span>
    </span>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="section bg-ivory">
      <div className="container-content">
        <SectionHeading
          eyebrow="Comparison"
          title={<span className="gold-rule">従来サービスとの比較</span>}
          description="ポータルサイト・HP制作会社・広告運用会社と比べたときの対応範囲の違いです。"
        />

        {/* PC・タブレット：横スクロール可能なテーブル */}
        <Reveal>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-charcoal/8 bg-white shadow-card">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white p-4 text-left text-xs font-semibold text-muted">
                    比較項目
                  </th>
                  {comparisonColumns.map((c) => {
                    const isOurs = c === 'BEAUTY ALL IN';
                    return (
                      <th
                        key={c}
                        className={`p-4 text-center text-xs font-bold ${
                          isOurs
                            ? 'bg-charcoal text-gold'
                            : 'text-charcoal/70'
                        }`}
                      >
                        {c}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={ri % 2 === 0 ? 'bg-sand/40' : 'bg-white'}
                  >
                    <td className="sticky left-0 z-10 bg-inherit p-4 text-left text-[13px] font-medium text-charcoal">
                      {row.label}
                    </td>
                    {row.values.map((v, ci) => {
                      const isOurs = ci === row.values.length - 1;
                      return (
                        <td
                          key={ci}
                          className={`p-4 text-center ${
                            isOurs ? 'bg-gold/8' : ''
                          }`}
                        >
                          <Mark value={v} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* 凡例 */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Check size={14} className="text-gold-dark" />
            対応
          </span>
          <span className="inline-flex items-center gap-1">
            <Triangle size={12} className="text-charcoal/40" />
            一部・条件により対応
          </span>
          <span className="inline-flex items-center gap-1">
            <Minus size={14} className="text-charcoal/25" />
            対象外
          </span>
        </div>

        {/* 公平な注記 */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-charcoal/8 bg-sand p-5">
            <Info size={18} className="mt-0.5 flex-none text-gold-dark" />
            <p className="text-[13px] leading-relaxed text-muted">
              {comparisonFairNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
