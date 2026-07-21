import type { Metadata } from 'next';
import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: '利用規約',
  description: `${siteConfig.serviceName}の利用規約です。`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="利用規約" updatedAt="2025年1月1日">
      <p className="text-[14px] leading-relaxed text-charcoal/80">
        本利用規約（以下「本規約」）は、{siteConfig.company.name}
        （以下「当社」）が提供する{siteConfig.serviceName}
        （以下「本サービス」）の利用条件を定めるものです。ご利用にあたっては本規約に同意いただいたものとみなします。
        ※本ページは仮の内容です。実際の契約・運用に合わせて内容を修正してください。
      </p>

      <LegalSection heading="第1条（適用）">
        <p>
          本規約は、本サービスの利用に関する当社とお客様との間の一切の関係に適用されます。
        </p>
      </LegalSection>

      <LegalSection heading="第2条（サービス内容）">
        <p>
          本サービスは、店舗の集客支援、ホームページ制作・改善、SEO、MEO、LLMO・AI検索対策、SNS集客導線設計、CRM、PR支援、運用改善等を、月額料金にて提供するものです。具体的な対応範囲は、契約プランおよび店舗の状況により個別に定めます。
        </p>
      </LegalSection>

      <LegalSection heading="第3条（成果に関する留意事項）">
        <p>
          当社は本サービスの提供にあたり誠実に業務を遂行しますが、検索順位、集客数、売上、メディア掲載等の成果を保証するものではありません。検索エンジンやプラットフォームの仕様変更等、当社の管理が及ばない要因により成果が変動する場合があります。
        </p>
      </LegalSection>

      <LegalSection heading="第4条（料金および支払い）">
        <p>
          本サービスの月額料金は{siteConfig.price.monthlyExcl.toLocaleString()}
          円（{siteConfig.price.taxNote}）とします。初期費用、広告出稿費、外部有料ツール費、撮影費、ドメイン・サーバー費等は、契約内容により別途となる場合があります。支払方法・時期は別途契約で定めます。
        </p>
      </LegalSection>

      <LegalSection heading="第5条（禁止事項）">
        <p>お客様は、本サービスの利用にあたり以下の行為をしてはなりません。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>法令または公序良俗に違反する行為</li>
          <li>当社または第三者の権利を侵害する行為</li>
          <li>虚偽の情報を提供する行為</li>
          <li>本サービスの運営を妨害する行為</li>
        </ul>
      </LegalSection>

      <LegalSection heading="第6条（契約期間・解約）">
        <p>
          契約期間、更新、解約の条件は、契約プランに応じて個別に定めます。詳細は契約時にご案内します。
        </p>
      </LegalSection>

      <LegalSection heading="第7条（知的財産権）">
        <p>
          本サービスにより制作された成果物の権利の帰属については、別途契約で定めるものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第8条（免責事項）">
        <p>
          当社は、本サービスに関してお客様に生じた損害について、当社の故意または重過失による場合を除き、責任を負わないものとします。
        </p>
      </LegalSection>

      <LegalSection heading="第9条（規約の変更）">
        <p>
          当社は、必要と判断した場合、お客様に通知することなく本規約を変更することがあります。
        </p>
      </LegalSection>

      <LegalSection heading="第10条（準拠法・管轄）">
        <p>
          本規約は日本法に準拠します。本サービスに関して紛争が生じた場合、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
