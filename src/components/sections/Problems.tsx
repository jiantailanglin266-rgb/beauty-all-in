import Image from 'next/image';
import problemImg from '@/assets/problem.jpg';
import { problems } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 共感・課題提起（画像先行型）
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。見出し・お悩み一覧は SEO / アクセシビリティ用に
 * sr-only でテキスト保持（画像内テキストは読み上げ・検索対象にならないため）。
 *
 * 画像差し替え手順：src/assets/problem.jpg（1774×887・2:1）を同名で置き換え。
 * お悩みの文言は src/config/content.ts の `problems` を編集。
 */
export function Problems() {
  return (
    <section
      id="problems"
      className="section border-t border-charcoal/5 bg-white"
    >
      {/* SEO・スクリーンリーダー用（画像内テキストをテキストでも保持） */}
      <h2 className="sr-only">こんなお悩みはありませんか？</h2>
      <p className="sr-only">
        ひとつでも当てはまるなら、集客の仕組みを見直すサインかもしれません。
      </p>
      <ul className="sr-only">
        {problems.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <div className="container-content">
        <Reveal>
          <Image
            src={problemImg}
            alt="美容サロン・クリニック・接骨院の集客でよくあるお悩みのチェックリスト（イメージ）"
            placeholder="blur"
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="h-auto w-full rounded-2xl shadow-card ring-1 ring-charcoal/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
