import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig, siteUrl } from '@/config/site';
import { buildStructuredData } from '@/lib/structured-data';
import {
  GoogleAnalytics,
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from '@/components/analytics/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.meta.title,
    template: `%s｜${siteConfig.serviceName}`,
  },
  description: siteConfig.meta.description,
  keywords: [...siteConfig.meta.keywords],
  applicationName: siteConfig.serviceName,
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: siteConfig.serviceName,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [
      {
        url: `${siteUrl}/ogp.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.serviceName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [`${siteUrl}/ogp.png`],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1c1c1e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildStructuredData();

  return (
    <html lang="ja">
      <head>
        <GoogleTagManager />
        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
