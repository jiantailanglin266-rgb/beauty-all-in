import { Plus, ArrowRight, Clock } from 'lucide-react';
import { separateCostItems } from '@/config/content';
import { siteConfig } from '@/config/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function CostComparison() {
  return (
    <section className="section border-t border-charcoal/5 bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Cost"
          title={<span className="gold-rule">別々に依頼すると、どうなる？</span>}
          description="複数のサービスを別々に依頼すると、毎月の費用だけでなく、各業者との連絡や管理にも時間がかかります。"
        />

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* 個別依頼 */}
          <Reveal>
            <div className="rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card">
              <p className="mb-4 text-sm font-semibold text-charcoal/70">
                個別に依頼した場合
              </p>
              <ul className="space-y-2.5">
                {separateCostItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between rounded-lg bg-sand/60 px-4 py-3 text-[13px] text-charcoal/80"
                  >
                    <span className="flex items-center gap-2">
                      <Plus size={14} className="text-charcoal/40" />
                      {item}
                    </span>
                    <span className="text-charcoal/30">＋費用</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-charcoal/5 p-3 text-[12px] leading-relaxed text-muted">
                <Clock size={15} className="mt-0.5 flex-none text-charcoal/40" />
                各社との契約・連絡・管理の手間が積み重なり、毎月の費用も高額になりやすくなります。
              </div>
            </div>
          </Reveal>

          {/* 矢印 */}
          <div className="flex justify-center lg:flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-charcoal shadow-gold">
              <ArrowRight size={22} className="lg:block" />
            </span>
          </div>

          {/* まとめて */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-gold/40 bg-charcoal p-6 text-ivory shadow-card-hover">
              <p className="mb-2 text-sm font-semibold text-gold">
                BEAUTY ALL IN なら
              </p>
              <p className="text-[15px] leading-relaxed text-ivory/80">
                集客と顧客管理の基盤を、まとめてひとつに。
              </p>
              <div className="mt-6 rounded-xl border border-gold/20 bg-charcoal-soft/60 p-5 text-center">
                <span className="text-xs text-ivory/60">月額</span>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="font-serif text-4xl font-bold text-gold">
                    {siteConfig.price.monthlyExcl.toLocaleString()}
                  </span>
                  <span className="text-lg text-gold">円</span>
                </div>
                <span className="mt-1 block text-xs text-ivory/50">
                  {siteConfig.price.taxNote}
                </span>
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-ivory/55">
                窓口はひとつ。連絡や管理の手間を減らしながら、集客の基盤を整えられます。
              </p>
            </div>
          </Reveal>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-muted">
          ※上記は施策を個別に依頼した場合の一般的なイメージです。金額や内容は依頼先・契約条件により異なります。特定の相場を保証・断定するものではありません。
        </p>
      </div>
    </section>
  );
}
