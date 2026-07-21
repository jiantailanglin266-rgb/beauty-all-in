import { Check, MessageCircle } from 'lucide-react';
import { priceIncludes, priceNotes } from '@/config/content';
import { siteConfig } from '@/config/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CtaButton } from '@/components/ui/CtaButton';

export function Pricing() {
  return (
    <section id="pricing" className="section bg-hero-radial text-ivory">
      <div className="container-content">
        <SectionHeading
          tone="dark"
          eyebrow="Price"
          title={<span className="text-ivory">シンプルな、月額料金</span>}
          description="必要な集客施策と顧客管理の基盤を、ひとつの料金でまとめて。"
        />

        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-gold/30 bg-charcoal-soft/70 shadow-2xl backdrop-blur">
            {/* 上部：料金 */}
            <div className="border-b border-gold/20 bg-gradient-to-b from-gold/10 to-transparent p-8 text-center sm:p-10">
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-wide text-gold-light">
                {siteConfig.serviceName}
              </span>
              <div className="mt-6 flex items-end justify-center gap-2">
                <span className="text-lg text-ivory/60">月額</span>
                <span className="font-serif text-6xl font-bold leading-none text-gold sm:text-7xl">
                  {siteConfig.price.monthlyExcl.toLocaleString()}
                </span>
                <span className="text-2xl font-bold text-gold">円</span>
              </div>
              <p className="mt-2 text-sm text-ivory/60">
                {siteConfig.price.taxNote}
              </p>
            </div>

            {/* 含まれる内容 */}
            <div className="p-8 sm:p-10">
              <p className="mb-5 text-sm font-semibold text-ivory/80">
                月額料金に含まれる内容
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {priceIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg border border-ivory/10 bg-ivory/5 px-4 py-3 text-sm text-ivory/85"
                  >
                    <Check size={16} className="flex-none text-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 flex justify-center">
                <CtaButton
                  href="#contact"
                  event="price_consultation_click"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={20} />
                  {siteConfig.cta.primary}
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 注意書き */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-ivory/10 bg-charcoal-soft/40 p-6">
            <p className="mb-3 text-xs font-semibold text-ivory/70">
              料金に関するご注意
            </p>
            <ul className="space-y-2">
              {priceNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-2 text-[12px] leading-relaxed text-ivory/55"
                >
                  <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold/60" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
