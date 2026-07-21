import Image from 'next/image';
import aboutImg from '@/assets/about.jpg';
import { journeySteps } from '@/config/content';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

/**
 * BEAUTY ALL IN とは（画像先行型）
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。見出し・5ステップ・まとめ文は
 * SEO / アクセシビリティ用に sr-only でテキスト保持。
 *
 * 画像差し替え手順：src/assets/about.jpg（縦型・約0.47）を同名で置き換え。
 * 5ステップの文言は src/config/content.ts の `journeySteps` を編集。
 */
export function About() {
  return (
    <section id="about" className="section border-t border-charcoal/5 bg-white">
      {/* SEO・スクリーンリーダー用（画像内テキストをテキストでも保持） */}
      <h2 className="sr-only">BEAUTY ALL IN とは</h2>
      <p className="sr-only">
        「作る」だけで終わらせません。作る → 見つけてもらう → 予約につなげる →
        顧客を管理する →
        再来店につなげるまで、集客の一連の流れをまとめて整えるサービスです。
      </p>
      <ol className="sr-only">
        {journeySteps.map((s, i) => (
          <li key={s.label}>{`0${i + 1} ${s.label}：${s.description}`}</li>
        ))}
      </ol>
      <p className="sr-only">
        ホームページ、SEO、MEO、AI検索、SNS、CRMを別々の会社に依頼する必要はありません。月額
        {siteConfig.price.monthlyExcl.toLocaleString()}円（{siteConfig.price.taxNote}
        ）で、店舗集客の仕組みをまとめて整えます。
      </p>

      <div className="container-content">
        <Reveal>
          <Image
            src={aboutImg}
            alt="BEAUTY ALL IN のサービス全体像（作る→見つけてもらう→予約につなげる→顧客を管理する→再来店につなげるの5ステップ）イメージ"
            placeholder="blur"
            sizes="(max-width: 600px) 100vw, 600px"
            className="mx-auto h-auto w-full max-w-[600px] rounded-2xl shadow-card ring-1 ring-charcoal/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
