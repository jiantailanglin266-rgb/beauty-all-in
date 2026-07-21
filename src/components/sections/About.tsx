import { journeySteps } from '@/config/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/config/site';

export function About() {
  return (
    <section id="about" className="section border-t border-charcoal/5 bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="About"
          title={
            <span className="gold-rule">
              BEAUTY ALL IN とは
            </span>
          }
          description={
            <>
              「作る」だけで終わらせません。
              <span className="font-semibold text-charcoal">
                作る → 見つけてもらう → 予約につなげる → 顧客を管理する → 再来店につなげる
              </span>
              まで、集客の一連の流れをまとめて整えるサービスです。
            </>
          }
        />

        {/* 5段階ステップ */}
        <div className="mt-14">
          <div className="grid gap-4 md:grid-cols-5">
            {journeySteps.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-charcoal/8 bg-white p-5 shadow-card">
                  <span className="font-serif text-3xl font-bold text-gold/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-charcoal">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-charcoal p-6 text-center sm:p-8">
            <p className="text-balance text-[15px] leading-relaxed text-ivory/85 sm:text-lg">
              ホームページ、SEO、MEO、AI検索、SNS、CRMを
              <span className="font-semibold text-gold">別々の会社に依頼する必要はありません。</span>
              <br className="hidden sm:block" />
              月額{siteConfig.price.monthlyExcl.toLocaleString()}円で、店舗集客の仕組みをまとめて整えます。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
