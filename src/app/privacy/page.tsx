import type { Metadata } from 'next';
import { LegalLayout, LegalSection } from '@/components/layout/LegalLayout';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: `${siteConfig.serviceName}のプライバシーポリシー（個人情報保護方針）です。`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="プライバシーポリシー" updatedAt="2025年1月1日">
      <p className="text-[14px] leading-relaxed text-charcoal/80">
        {siteConfig.company.name}（以下「当社」）は、{siteConfig.serviceName}
        （以下「本サービス」）の提供にあたり、お客様の個人情報を適切に取り扱うことを社会的責務と考え、以下の方針に基づき個人情報の保護に努めます。
        ※本ページは仮の内容です。実際の運用に合わせて内容を修正してください。
      </p>

      <LegalSection heading="1. 個人情報の定義">
        <p>
          本ポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、氏名、住所、電話番号、メールアドレス、店舗情報等、特定の個人を識別できる情報をいいます。
        </p>
      </LegalSection>

      <LegalSection heading="2. 個人情報の取得">
        <p>
          当社は、お問い合わせフォームへの入力、お電話・メール等でのご連絡、契約手続き等を通じて、適法かつ公正な手段により個人情報を取得します。
        </p>
      </LegalSection>

      <LegalSection heading="3. 利用目的">
        <p>当社は、取得した個人情報を以下の目的で利用します。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>お問い合わせ・ご相談への対応、ご連絡のため</li>
          <li>本サービスの提供、運用、改善のため</li>
          <li>お見積り・ご提案・契約手続きのため</li>
          <li>サービスに関するご案内・情報提供のため</li>
          <li>法令に基づく対応のため</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. 第三者提供">
        <p>
          当社は、法令に定める場合を除き、あらかじめお客様の同意を得ることなく、個人情報を第三者に提供しません。
        </p>
      </LegalSection>

      <LegalSection heading="5. 業務委託">
        <p>
          当社は、利用目的の達成に必要な範囲内で、個人情報の取扱いを外部に委託する場合があります。この場合、委託先に対して適切な監督を行います。
        </p>
      </LegalSection>

      <LegalSection heading="6. 安全管理措置">
        <p>
          当社は、個人情報の漏えい、滅失またはき損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。
        </p>
      </LegalSection>

      <LegalSection heading="7. 開示・訂正・利用停止等">
        <p>
          お客様は、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止等を求めることができます。お問い合わせ窓口までご連絡ください。
        </p>
      </LegalSection>

      <LegalSection heading="8. アクセス解析ツールについて">
        <p>
          本サービスのウェブサイトでは、サービス向上のためGoogle
          Analytics等のアクセス解析ツールを利用する場合があります。これらのツールはCookieを利用して情報を収集しますが、個人を特定する情報は含まれません。
        </p>
      </LegalSection>

      <LegalSection heading="9. お問い合わせ窓口">
        <p>
          個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
        </p>
        <p className="rounded-lg bg-sand/60 p-4 text-[13px]">
          {siteConfig.company.name}
          <br />
          所在地：{siteConfig.company.address}
          <br />
          メール：{siteConfig.company.email}
          <br />
          電話：{siteConfig.company.tel}（{siteConfig.company.businessHours}）
        </p>
      </LegalSection>

      <LegalSection heading="10. 本ポリシーの改定">
        <p>
          当社は、法令の変更やサービス内容の変更等に応じて、本ポリシーを改定することがあります。改定後の内容は本ページに掲載した時点から効力を生じます。
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
