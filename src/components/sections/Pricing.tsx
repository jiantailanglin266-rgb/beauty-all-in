import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import priceImg from '@/assets/price.jpg';
import { priceIncludes, priceNotes } from '@/config/content';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';
import { CtaButton } from '@/components/ui/CtaButton';

/**
 * 料金（Price）— 画像先行型 ＋ 実CTA
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。見出し・含まれる内容・注意書きは
 * SEO / アクセシビリティ用に sr-only で保持。
 * 画像内にCTAボタンは無いため、実際に押せるCTA（無料相談）を画像下に配置し計測も維持。
 *
 * 画像差し替え手順：src/assets/price.jpg（縦型・約0.47）を同名で置き換え。
 * 含まれる内容・注意書きは src/config/content.ts の priceIncludes / priceNotes を編集。
 */
export function Pricing() {
  return (
    <section id="pricing" className="section border-t border-charcoal/5 bg-white">
      {/* SEO・スクリーンリーダー用（画像内テキストをテキストでも保持） */}
      <h2 className="sr-only">シンプルな、月額料金</h2>
      <p className="sr-only">
        必要な集客施策と顧客管理の基盤を、ひとつの料金でまとめて。BEAUTY ALL IN
        は月額{siteConfig.price.monthlyExcl.toLocaleString()}円（{siteConfig.price.taxNote}
        ）です。月額料金に含まれる内容：{priceIncludes.join('、')}。
      </p>
      <ul className="sr-only">
        {priceNotes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>

      <div className="container-content">
        <Reveal>
          <Image
            src={priceImg}
            alt="料金：BEAUTY ALL IN は月額30,000円（税込33,000円）。集客戦略設計・ホームページ制作改善・SEO・LLMO・MEO・SNS集客導線・CRM・PR支援・運用改善が含まれる、という料金案内のイメージ"
            placeholder="blur"
            sizes="(max-width: 600px) 100vw, 600px"
            className="mx-auto h-auto w-full max-w-[600px] rounded-2xl shadow-card ring-1 ring-charcoal/5"
          />
        </Reveal>

        {/* 実際に押せるCTA（画像内にはボタンが無いため） */}
        <Reveal delay={0.1}>
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
        </Reveal>
      </div>
    </section>
  );
}
