import Image from 'next/image';
import essenceImg from '@/assets/essence.jpg';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 問題の本質（Why）— 画像先行型
 * ------------------------------------------------------------
 * 完成デザイン画像を主役に表示。見出し・本文は SEO / アクセシビリティ用に
 * sr-only で保持。
 *
 * 画像差し替え手順：src/assets/essence.jpg（縦型・約0.47）を同名で置き換え。
 */
export function Essence() {
  return (
    <section className="section border-t border-charcoal/5 bg-white">
      {/* SEO・スクリーンリーダー用（画像内テキストをテキストでも保持） */}
      <h2 className="sr-only">
        集客がうまくいかない理由は、一つ一つの施策が「バラバラ」だから
      </h2>
      <p className="sr-only">
        広告・ホームページ・Instagram・Googleマップ・CRM。それぞれが別会社・別ツール・別担当で分断されていると、流れがつながらず成果が積み上がりません。BEAUTY
        ALL IN
        導入後は、集客→予約→顧客管理→再来店→紹介までを一本の導線でつなぎ、集客の悩みをまるごと解決へ導きます。
      </p>

      <div className="container-content">
        <Reveal>
          <Image
            src={essenceImg}
            alt="集客がうまくいかない理由は、施策がバラバラだから。BEAUTY ALL IN 導入後は集客から予約・顧客管理・再来店・紹介までを一本の導線でつなぐ、という説明のイメージ"
            placeholder="blur"
            sizes="(max-width: 600px) 100vw, 600px"
            className="mx-auto h-auto w-full max-w-[600px] rounded-2xl shadow-card ring-1 ring-charcoal/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
