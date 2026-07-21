import type { MetadataRoute } from 'next';
import { siteUrl } from '@/config/site';

// 静的書き出し（output: export）で生成させる
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thanks'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
