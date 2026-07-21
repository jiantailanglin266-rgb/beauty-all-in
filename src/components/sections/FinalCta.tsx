import { MessageCircle, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';
import { CtaButton } from '@/components/ui/CtaButton';

export function FinalCta() {
  return (
    <section className="section bg-charcoal text-ivory">
      <div className="container-content">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-b from-gold/12 to-transparent px-6 py-14 text-center sm:px-12">
            <span className="eyebrow">Contact</span>
            <h2 className="text-balance text-2xl font-bold leading-tight text-ivory sm:text-3xl lg:text-4xl">
              集客の悩みを、一つずつ別の会社に
              <br className="hidden sm:block" />
              相談するのは終わりにしませんか？
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/70">
              まずは現在の集客状況や固定費をお聞かせください。
              店舗に必要な施策を整理し、優先順位をご提案します。
              相談は無料です。
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton
                href="#contact"
                event="hero_consultation_click"
                variant="primary"
              >
                <MessageCircle size={20} />
                {siteConfig.cta.primary}
              </CtaButton>
              <CtaButton
                href="#contact"
                event="hero_document_click"
                variant="secondary"
                className="border-ivory/25 bg-transparent text-ivory hover:border-gold hover:text-gold"
              >
                <FileText size={20} />
                {siteConfig.cta.document}
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
