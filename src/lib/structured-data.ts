/**
 * 構造化データ（JSON-LD）生成
 * ------------------------------------------------------------
 * Organization / Service / FAQPage / BreadcrumbList / WebSite / WebPage
 * 検索エンジン・生成AIが情報を理解しやすいように整理します。
 * 成果保証は行わず、透明性のある記述にします。
 */

import { siteConfig, siteUrl } from '@/config/site';
import { faqs } from '@/config/content';

export function buildStructuredData() {
  const organization = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.company.name,
    url: siteUrl,
    email: siteConfig.company.email,
    telephone: siteConfig.company.tel,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressLocality: siteConfig.company.address,
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.serviceName,
    description: siteConfig.meta.description,
    inLanguage: 'ja',
    publisher: { '@id': `${siteUrl}/#organization` },
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': `${siteUrl}/#webpage`,
    url: siteUrl,
    name: siteConfig.meta.title,
    description: siteConfig.meta.description,
    inLanguage: 'ja',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#service` },
  };

  const service = {
    '@type': 'Service',
    '@id': `${siteUrl}/#service`,
    name: siteConfig.serviceName,
    serviceType: '店舗集客・ホームページ・SEO・MEO・CRMのオールインワン支援',
    description: siteConfig.meta.description,
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed: { '@type': 'Country', name: '日本' },
    audience: {
      '@type': 'BusinessAudience',
      name: '美容サロン・クリニック・接骨院・整骨院などの地域密着型店舗',
    },
    offers: {
      '@type': 'Offer',
      price: siteConfig.price.monthlyExcl,
      priceCurrency: 'JPY',
      description: `月額${siteConfig.price.monthlyExcl.toLocaleString()}円（${siteConfig.price.taxNote}）。対応範囲は契約プランや店舗の状況により異なります。`,
    },
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: siteConfig.serviceName,
        item: siteUrl,
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      website,
      webpage,
      service,
      faqPage,
      breadcrumb,
    ],
  };
}
