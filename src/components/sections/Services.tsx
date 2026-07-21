import { Check } from 'lucide-react';
import { services } from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Services() {
  return (
    <section id="services" className="section border-t border-charcoal/5 bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Service"
          title={<span className="gold-rule">9つの支援を、ひとつに。</span>}
          description="集客戦略から運用改善まで。店舗の状況に合わせて必要な施策を組み合わせて支援します。"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-charcoal text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-charcoal">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted">
                    {s.summary}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-charcoal/5 pt-4">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-charcoal/80"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 flex-none text-gold-dark"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
