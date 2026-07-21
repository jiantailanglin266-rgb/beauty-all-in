import Image from 'next/image';
import flowImg from '@/assets/flow.jpg';
import { flowSteps } from '@/config/content';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 導入の流れ（Flow）— 画像先行型
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。見出し・7ステップは SEO / アクセシビリティ用に
 * sr-only で保持。
 *
 * 画像差し替え手順：src/assets/flow.jpg（縦型・約0.47）を同名で置き換え。
 * ステップの文言は src/config/content.ts の flowSteps を編集。
 */
export function Flow() {
  return (
    <section id="flow" className="section border-t border-charcoal/5 bg-white">
      {/* SEO・スクリーンリーダー用（画像内テキストをテキストでも保持） */}
      <h2 className="sr-only">導入の流れ</h2>
      <p className="sr-only">
        まずは無料相談から。現状を整理し、店舗に必要な施策の優先順位をご提案します。
      </p>
      <ol className="sr-only">
        {flowSteps.map((s, i) => (
          <li key={s.title}>{`${i + 1}. ${s.title}：${s.description}`}</li>
        ))}
      </ol>

      <div className="container-content">
        <Reveal>
          <Image
            src={flowImg}
            alt="導入の流れ：1.無料相談 2.現状ヒアリング 3.店舗・競合分析 4.集客導線と制作内容の設計 5.ホームページ・各種設定 6.公開・運用開始 7.改善・集客支援、の7ステップのイメージ"
            placeholder="blur"
            sizes="(max-width: 600px) 100vw, 600px"
            className="mx-auto h-auto w-full max-w-[600px] rounded-2xl shadow-card ring-1 ring-charcoal/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
