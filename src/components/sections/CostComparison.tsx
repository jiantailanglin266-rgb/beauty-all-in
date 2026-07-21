import Image from 'next/image';
import costImg from '@/assets/cost.jpg';
import { separateCostItems } from '@/config/content';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 費用比較（Cost）— 画像先行型
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。本文・注記は SEO / アクセシビリティ用に
 * sr-only で保持。
 *
 * 画像差し替え手順：src/assets/cost.jpg（縦型・約0.47）を同名で置き換え。
 * 個別依頼の項目は src/config/content.ts の separateCostItems を編集。
 */
export function CostComparison() {
  return (
    <section className="section border-t border-charcoal/5 bg-white">
      {/* SEO・スクリーンリーダー用（画像内テキストをテキストでも保持） */}
      <h2 className="sr-only">別々に依頼すると、どうなる？</h2>
      <p className="sr-only">
        複数のサービスを別々に依頼すると、毎月の費用だけでなく、各業者との連絡や管理にも時間がかかります。個別に依頼した場合の項目：
        {separateCostItems.join('、')}
        。BEAUTY ALL IN なら、集客と顧客管理の基盤を月額
        {siteConfig.price.monthlyExcl.toLocaleString()}円（{siteConfig.price.taxNote}
        ）でまとめてひとつに整えられます。窓口はひとつで、連絡や管理の手間を減らせます。
      </p>
      <p className="sr-only">
        ※上記は施策を個別に依頼した場合の一般的なイメージです。金額や内容は依頼先・契約条件により異なり、特定の相場を保証・断定するものではありません。
      </p>

      <div className="container-content">
        <Reveal>
          <Image
            src={costImg}
            alt="複数のサービスを別々に依頼すると費用や管理の手間が積み重なるのに対し、BEAUTY ALL IN なら月額30,000円（税込33,000円）でまとめてひとつに整えられる、という費用比較のイメージ"
            placeholder="blur"
            sizes="(max-width: 600px) 100vw, 600px"
            className="mx-auto h-auto w-full max-w-[600px] rounded-2xl shadow-card ring-1 ring-charcoal/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
