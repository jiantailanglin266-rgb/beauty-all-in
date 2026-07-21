'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import fvVideo from '@/assets/fv-video.mp4';
import poster from '@/assets/fv-video-poster.jpg';

/**
 * FV直下のサービス紹介動画（縦型9:16）
 * ------------------------------------------------------------
 * 自動再生（ミュート・ループ・インライン）。ポスター画像で初回表示を即時化し、
 * preload="metadata" で無駄なダウンロードを抑制。
 * prefers-reduced-motion の場合は自動再生せず、コントロールを表示して手動再生に。
 *
 * 動画差し替え手順：src/assets/fv-video.mp4 と fv-video-poster.jpg を同名で置き換え。
 */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // autoplay を確実にするため属性ではなくプロパティでもミュートを設定
    v.muted = true;
    if (!reduce) {
      const p = v.play();
      if (p) p.catch(() => {}); // 自動再生が拒否されてもポスター表示のままにする
    }
  }, [reduce]);

  return (
    <section className="bg-white pb-12 pt-4 sm:pb-16 sm:pt-6">
      <div className="container-content">
        <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl shadow-[0_16px_50px_-16px_rgba(28,28,30,0.22)] ring-1 ring-charcoal/5">
          <video
            ref={ref}
            className="block h-auto w-full"
            poster={poster.src}
            preload="metadata"
            muted
            loop
            playsInline
            autoPlay={!reduce}
            controls={Boolean(reduce)}
            aria-label="BEAUTY ALL IN サービス紹介動画"
          >
            <source src={fvVideo} type="video/mp4" />
            お使いのブラウザは動画再生に対応していません。
          </video>
        </div>
      </div>
    </section>
  );
}
