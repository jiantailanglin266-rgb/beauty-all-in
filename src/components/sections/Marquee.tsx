import type { StaticImageData } from 'next/image';

/**
 * 無限マーキー（画像帯が自動で左へ流れ続ける）
 * ------------------------------------------------------------
 * IMPプロジェクトと同じ構造・サイズ（横220px/縦320px, mobile 140px/210px）。
 * ホバーで停止しない（意図的に hover-pause を入れていません）。
 * 速度・高さ・間隔は globals.css の .marquee 変数（--marquee-*）で調整。
 *
 * 画像差し替え手順：src/assets/marquee/ の h01〜h08.jpg / p01〜p12.jpg を同名で上書き。
 */
type Props = {
  images: StaticImageData[];
  variant?: 'landscape' | 'portrait';
};

export function Marquee({ images, variant = 'landscape' }: Props) {
  const className = variant === 'portrait' ? 'marquee marquee--portrait' : 'marquee';
  return (
    <section className={className} aria-label="ギャラリー">
      <div className="marquee__viewport">
        {/* セットA */}
        <ul className="marquee__track">
          {images.map((img, i) => (
            <li className="marquee__item" key={`a-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                width={img.width}
                height={img.height}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
        {/* セットB（Aの複製。ループの継ぎ目を消すためのもの） */}
        <ul className="marquee__track" aria-hidden="true">
          {images.map((img, i) => (
            <li className="marquee__item" key={`b-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                width={img.width}
                height={img.height}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
