'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { industries } from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Industries() {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active) ?? industries[0];

  return (
    <section id="industries" className="section border-t border-charcoal/5 bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Use Case"
          title={<span className="gold-rule">業種別の活用例</span>}
          description="美容・医療・健康系の店舗それぞれに合わせて、活用のしかたをご提案します。"
        />

        {/* タブ */}
        <Reveal>
          <div
            role="tablist"
            aria-label="業種"
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {industries.map((ind) => {
              const isActive = ind.id === active;
              return (
                <button
                  key={ind.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${ind.id}`}
                  id={`tab-${ind.id}`}
                  onClick={() => setActive(ind.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-charcoal text-gold shadow-card'
                      : 'border border-charcoal/12 bg-white text-charcoal/70 hover:border-gold hover:text-gold-dark'
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* パネル */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mx-auto mt-8 max-w-3xl"
        >
          <div
            key={current.id}
            className="animate-fade-up rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card sm:p-8"
          >
            <h3 className="text-xl font-bold text-charcoal">{current.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gold-dark">
              {current.lead}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 rounded-lg bg-sand/60 px-4 py-3 text-[13px] leading-relaxed text-charcoal/85"
                >
                  <Check size={16} className="mt-0.5 flex-none text-gold-dark" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
