import Image from 'next/image';
import comparisonImg from '@/assets/comparison.jpg';
import {
  comparisonColumns,
  comparisonRows,
  comparisonFairNote,
  type CompareValue,
} from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 従来サービスとの比較（画像先行型）
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。比較内容は SEO / アクセシビリティ用に
 * sr-only の表としてテキスト保持。
 *
 * 画像差し替え手順：src/assets/comparison.jpg（縦型・約0.47）を同名で置き換え。
 * 比較項目の文言は src/config/content.ts の comparisonRows / comparisonColumns を編集。
 */
const valueLabel: Record<CompareValue, string> = {
  yes: '対応',
  partial: '一部・条件により対応',
  no: '対象外',
};

export function Comparison() {
  return (
    <section
      id="comparison"
      className="section border-t border-charcoal/5 bg-white"
    >
      {/* SEO・スクリーンリーダー用（比較表をテキストでも保持） */}
      <h2 className="sr-only">従来サービスとの比較</h2>
      <table className="sr-only">
        <caption>
          ポータルサイト・HP制作会社・広告運用会社とBEAUTY ALL INの対応範囲の比較
        </caption>
        <thead>
          <tr>
            <th>比較項目</th>
            {comparisonColumns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.values.map((v, i) => (
                <td key={i}>{valueLabel[v]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="sr-only">{comparisonFairNote}</p>

      <div className="container-content">
        <Reveal>
          <Image
            src={comparisonImg}
            alt="従来サービス（ポータルサイト・HP制作会社・広告運用会社）とBEAUTY ALL INの対応範囲の比較表イメージ"
            placeholder="blur"
            sizes="(max-width: 600px) 100vw, 600px"
            className="mx-auto h-auto w-full max-w-[600px] rounded-2xl shadow-card ring-1 ring-charcoal/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
