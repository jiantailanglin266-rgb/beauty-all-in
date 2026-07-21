import { flowSteps } from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Flow() {
  return (
    <section id="flow" className="section border-t border-charcoal/5 bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Flow"
          title={<span className="gold-rule">導入の流れ</span>}
          description="まずは無料相談から。現状を整理し、店舗に必要な施策の優先順位をご提案します。"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <ol className="relative border-l border-charcoal/10 pl-2">
            {flowSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.05}>
                <div className="relative pb-8 pl-8 last:pb-0">
                  {/* ノード */}
                  <span className="absolute -left-[9px] top-0 flex h-[34px] w-[34px] -translate-x-1/2 items-center justify-center rounded-full border border-gold/40 bg-charcoal font-serif text-sm font-bold text-gold">
                    {i + 1}
                  </span>
                  <div className="rounded-xl border border-charcoal/8 bg-white p-5 shadow-card">
                    <h3 className="text-base font-bold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
