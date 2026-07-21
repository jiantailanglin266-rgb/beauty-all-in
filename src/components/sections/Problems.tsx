import { AlertCircle } from 'lucide-react';
import { problems } from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Problems() {
  return (
    <section id="problems" className="section border-t border-charcoal/5 bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Problem"
          title={<span className="gold-rule">こんなお悩みはありませんか？</span>}
          description="ひとつでも当てはまるなら、集客の仕組みを見直すサインかもしれません。"
        />

        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-xl border border-charcoal/8 bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover">
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <AlertCircle size={16} />
                </span>
                <p className="text-[15px] leading-relaxed text-charcoal/90">
                  {p}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
