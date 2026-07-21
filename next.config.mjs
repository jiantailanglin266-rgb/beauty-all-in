/**
 * GitHub Pages（静的書き出し）と通常サーバーの両対応。
 * 環境変数 GITHUB_PAGES=true のときだけ静的エクスポート + basePath を有効化します。
 * （ローカル開発・Vercel等では従来どおり動的に動作します）
 */
const isPages = process.env.GITHUB_PAGES === 'true';
const repo = 'beauty-all-in'; // ← リポジトリ名。変更したらここも合わせる

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(isPages
    ? {
        output: 'export',
        // basePath だけで /_next/ アセットもリンクも自動的に prefix される。
        // assetPrefix は併用すると二重スラッシュ(/repo//_next)になるため設定しない。
        basePath: `/${repo}`,
        trailingSlash: true,
      }
    : {}),
  images: {
    // 静的書き出しでは画像最適化サーバーが使えないため無効化
    unoptimized: isPages,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
