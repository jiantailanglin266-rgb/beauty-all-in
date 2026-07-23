/**
 * ============================================================
 * BEAUTY ALL IN サイト設定（一括変更ファイル）
 * ------------------------------------------------------------
 * 会社名・住所・電話・料金・CTA先などの「仮情報」はすべてここで管理します。
 * コード本体を触らずに、このファイルの値を書き換えるだけで反映されます。
 * ============================================================
 */

/** サイトの公開URL（環境変数が優先、なければ既定値） */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://beauty-all-in.example.com';

export const siteConfig = {
  /** サービス名 */
  serviceName: 'BEAUTY ALL IN',
  /** サービス名読み・英字表記（見出し装飾用） */
  serviceNameEn: 'BEAUTY ALL IN',

  /** キャッチコピー */
  tagline: '集客に必要なことを、全部ひとつに。',

  /** メタ情報 */
  meta: {
    title:
      'BEAUTY ALL IN｜美容サロン・クリニック・接骨院の集客を月額3万円で一括支援',
    description:
      'ホームページ制作、SEO、MEO、LLMO、Instagram集客導線、CRM、PR支援までを月額30,000円で一括提供。美容サロン、クリニック、接骨院・整骨院のポータルサイト依存と集客コスト削減を支援します。',
    keywords: [
      '美容サロン 集客',
      'サロン 集客支援',
      '美容室 集客',
      '接骨院 集客',
      '整骨院 集客',
      'クリニック 集客',
      'サロン ホームページ制作',
      '美容サロン SEO',
      '美容サロン MEO',
      '美容サロン CRM',
      'ホットペッパービューティー 固定費削減',
      'ポータルサイト 依存 集客',
      '店舗 集客 オールインワン',
    ],
  },

  /** 料金（税別を基準に税込を併記） */
  price: {
    monthlyExcl: 30000, // 税別
    monthlyIncl: 33000, // 税込
    currency: '円',
    taxNote: '税込33,000円',
    initialFeeNote:
      '初期費用については、店舗の状況や制作内容に応じて個別にご案内します',
  },

  /** 会社情報 */
  company: {
    name: 'IMPメディア事業部',
    address: '東京都〇〇区〇〇',
    tel: '00-0000-0000',
    telHref: 'tel:0000000000',
    email: 'support@imp-aicreat.com',
    businessHours: '平日10:00〜18:00',
    ceo: '代表取締役 〇〇 〇〇', // 特商法表記用（仮）
    established: '2020年', // 仮
  },

  /** 外部リンク（仮URL） */
  links: {
    line: 'https://line.me/', // 仮URL
    instagram: 'https://www.instagram.com/', // 仮URL
    // お問い合わせ送信先（サーバー側環境変数 CONTACT_TO_EMAIL が優先）
    contactEmail: 'support@imp-aicreat.com',
  },

  /** CTA文言 */
  cta: {
    primary: '無料相談を申し込む',
    secondary: 'サービス資料を受け取る',
    document: '資料請求する',
    phone: '電話で相談',
  },

  /** 注意書き（ファーストビュー下部などで使用） */
  disclaimers: {
    scope:
      '施策内容や対応範囲は、店舗の状況や契約内容により異なります。',
    noGuarantee:
      '検索順位、集客数、メディア掲載等を保証するものではありません。',
  },
} as const;

/** 料金の表示用文字列（例: 「月額30,000円（税込33,000円）」） */
export const priceLabel = `月額${siteConfig.price.monthlyExcl.toLocaleString()}円（${siteConfig.price.taxNote}）`;

export type SiteConfig = typeof siteConfig;
