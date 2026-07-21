import { ArrowRight, ArrowDown, Unplug, Workflow } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const before = ['広告', 'ホームページ', '予約', '顧客管理', '再来店'];
const after = ['集客', '予約', '顧客管理', '再来店', '紹介'];

export function Essence() {
  return (
    <section className="section bg-charcoal text-ivory">
      <div className="container-content">
        <SectionHeading
          tone="dark"
          eyebrow="Why"
          title={
            <>
              集客がうまくいかない理由は、
              <br className="hidden sm:block" />
              一つ一つの施策が「バラバラ」だから
            </>
          }
          description="広告・ホームページ・Instagram・Googleマップ・CRM。それぞれが別会社・別ツール・別担当で分断されていると、流れがつながらず成果が積み上がりません。"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Before：分断 */}
          <Reveal>
            <div className="h-full rounded-2xl border border-ivory/10 bg-charcoal-soft/60 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2 text-ivory/60">
                <Unplug size={18} />
                <span className="text-sm font-semibold">
                  従来：分断された状態
                </span>
              </div>
              <div className="space-y-2.5">
                {before.map((step, i) => (
                  <div key={step}>
                    <div className="rounded-lg border border-dashed border-ivory/20 bg-ivory/5 px-4 py-3 text-sm text-ivory/75">
                      {step}
                      <span className="ml-2 text-[11px] text-ivory/40">
                        別会社 / 別ツール / 別担当
                      </span>
                    </div>
                    {i < before.length - 1 && (
                      <div className="flex justify-center py-1 text-ivory/25">
                        <ArrowDown size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* After：一本化 */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2 text-gold">
                <Workflow size={18} />
                <span className="text-sm font-semibold">
                  BEAUTY ALL IN 導入後：一本の導線
                </span>
              </div>
              <div className="space-y-2.5">
                {after.map((step, i) => (
                  <div key={step}>
                    <div className="flex items-center justify-between rounded-lg border border-gold/30 bg-charcoal/40 px-4 py-3 text-sm font-medium text-ivory">
                      {step}
                      <span className="text-[11px] text-gold">つながる</span>
                    </div>
                    {i < after.length - 1 && (
                      <div className="flex justify-center py-1 text-gold/50">
                        <ArrowDown size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-gold-light">
                <ArrowRight size={16} />
                集客から再来店・紹介まで、ひとつの流れで設計します。
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
