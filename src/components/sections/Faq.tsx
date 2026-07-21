'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className="overflow-hidden rounded-xl border border-charcoal/8 bg-white shadow-card">
      <h3>
        <button
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="flex items-start gap-3">
            <span className="font-serif text-lg font-bold text-gold">Q</span>
            <span className="pt-0.5 text-[15px] font-semibold leading-snug text-charcoal">
              {question}
            </span>
          </span>
          <ChevronDown
            size={20}
            className={`flex-none text-gold-dark transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-charcoal/5 px-5 py-4 pl-11 text-[14px] leading-relaxed text-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section bg-sand">
      <div className="container-content">
        <SectionHeading
          eyebrow="FAQ"
          title={<span className="gold-rule">よくある質問</span>}
          description="お問い合わせの前に、よくいただくご質問をまとめました。"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.question} delay={(i % 4) * 0.04}>
              <FaqItem question={f.question} answer={f.answer} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
