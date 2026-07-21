import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { siteConfig, priceLabel } from '@/config/site';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: `${siteConfig.serviceName}の特定商取引法に基づく表記です。`,
  robots: { index: true, follow: true },
};

const rows: { label: string; value: React.ReactNode }[] = [
  { label: '販売事業者', value: siteConfig.company.name },
  { label: '運営統括責任者', value: siteConfig.company.ceo },
  { label: '所在地', value: siteConfig.company.address },
  { label: '電話番号', value: siteConfig.company.tel },
  {
    label: 'お問い合わせ',
    value: (
      <>
        {siteConfig.company.email}
        <br />
        受付時間：{siteConfig.company.businessHours}
      </>
    ),
  },
  {
    label: '販売価格',
    value: (
      <>
        {priceLabel}
        <br />
        <span className="text-xs text-muted">
          初期費用は、店舗の状況や制作内容に応じて個別にご案内します。広告出稿費、外部有料ツール費、撮影費、ドメイン・サーバー費等は別途となる場合があります。
        </span>
      </>
    ),
  },
  {
    label: '商品代金以外の必要料金',
    value:
      'インターネット接続に必要な通信料金、および契約内容に応じた別途費用（広告費・外部ツール費等）',
  },
  {
    label: '支払方法',
    value: '銀行振込、クレジットカード等（契約時に個別にご案内します）',
  },
  {
    label: '支払時期',
    value: '契約時に定める方法・時期に従ってお支払いいただきます。',
  },
  {
    label: 'サービス提供時期',
    value:
      'ご契約後、ヒアリング・設計を経て順次提供を開始します。開始時期は制作内容や店舗の状況により異なります。',
  },
  {
    label: 'キャンセル・解約',
    value:
      'サービスの性質上、提供開始後の返金は原則対応しかねます。契約期間・解約条件は契約プランに応じて個別に定めます。',
  },
];

export default function TokushohoPage() {
  return (
    <LegalLayout title="特定商取引法に基づく表記">
      <p className="text-[14px] leading-relaxed text-charcoal/80">
        ※本ページは仮の内容です。実際の事業者情報・取引条件に合わせて内容を修正してください。
      </p>
      <div className="overflow-hidden rounded-2xl border border-charcoal/10">
        <dl>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 gap-1 p-4 sm:grid-cols-[200px_1fr] sm:gap-4 ${
                i % 2 === 0 ? 'bg-sand/50' : 'bg-white'
              }`}
            >
              <dt className="text-[13px] font-semibold text-charcoal">
                {row.label}
              </dt>
              <dd className="text-[14px] leading-relaxed text-charcoal/80">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </LegalLayout>
  );
}
