# BEAUTY ALL IN — 集客オールインワン支援 LP

美容サロン・クリニック・接骨院などの集客とホームページ、SEO・MEO・LLMO・SNS・CRM を、
月額 30,000円（税込 33,000円）でまとめて支援するサービス「BEAUTY ALL IN」のランディングページです。

コンバージョン（無料相談・お問い合わせ）を目的に設計しています。

---

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| フレームワーク | Next.js 15（App Router） |
| 言語 | TypeScript |
| スタイル | Tailwind CSS 3 |
| フォーム | React Hook Form + Zod |
| アニメーション | Framer Motion |
| アイコン | Lucide React |

---

## セットアップ

```bash
# 1. 依存関係のインストール
npm install

# 2. 環境変数ファイルを作成（サンプルをコピー）
cp .env.local.example .env.local
#   ↑ Windows PowerShell の場合: Copy-Item .env.local.example .env.local

# 3. 開発サーバー起動（http://localhost:3200）
npm run dev
```

### その他のコマンド

```bash
npm run build      # 本番ビルド
npm run start      # 本番サーバー起動（要 build 済み）
npm run typecheck  # 型チェックのみ
npm run lint       # Lint
```

---

## ディレクトリ構成

```
beauty-all-in/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          # メタデータ・OGP・構造化データ・GA4/GTM
│  │  ├─ page.tsx            # LP本体（全16セクションを組み立て）
│  │  ├─ globals.css         # Tailwind + 共通スタイル
│  │  ├─ icon.svg            # ファビコン（自動適用）
│  │  ├─ sitemap.ts          # /sitemap.xml を生成
│  │  ├─ robots.ts           # /robots.txt を生成
│  │  ├─ not-found.tsx       # 404
│  │  ├─ thanks/             # 送信完了画面
│  │  ├─ privacy/            # プライバシーポリシー（仮）
│  │  ├─ terms/              # 利用規約（仮）
│  │  ├─ tokushoho/          # 特定商取引法に基づく表記（仮）
│  │  └─ api/contact/route.ts# お問い合わせ受信API
│  ├─ components/
│  │  ├─ layout/  # Header / Footer / FixedCta / LegalLayout
│  │  ├─ sections/# Hero〜ContactForm（各セクション）
│  │  ├─ ui/      # Reveal / SectionHeading / CtaButton
│  │  └─ analytics/# GA4 / GTM
│  ├─ config/
│  │  ├─ site.ts    # ★会社情報・料金・CTA などの一括管理
│  │  └─ content.ts # ★各セクションの文章・カード内容
│  └─ lib/
│     ├─ schema.ts         # フォームの Zod バリデーション
│     ├─ gtag.ts           # 計測イベント送信
│     └─ structured-data.ts# JSON-LD 構造化データ
└─ .env.local.example      # 環境変数サンプル
```

---

## よくある変更のしかた

### 料金を変更する

`src/config/site.ts` の `price` を編集します。

```ts
price: {
  monthlyExcl: 30000,   // 税別金額
  monthlyIncl: 33000,   // 税込金額
  taxNote: '税込33,000円',
  ...
}
```
表示（例：「月額30,000円（税込33,000円）」）はこの値から自動生成されます。

### 会社名・住所・電話・メール・LINE URL を変更する

`src/config/site.ts` の `company` と `links` を編集します。
コード本体を触る必要はありません。

### 文章（コピー）を変更する

- ファーストビュー等の見出し・本文 … 各セクション `src/components/sections/*.tsx`
- サービスカード / 比較表 / FAQ / 業種別など一覧系 … `src/config/content.ts`

### FAQ を追加・変更する

`src/config/content.ts` の `faqs` 配列を編集します。
FAQ の構造化データ（FAQPage）にも自動反映されます。

### 画像を差し替える

現状、ファーストビューのビジュアルや各種イメージは **CSS/コードによるモック** です。
実写画像に差し替える場合は、`public/images/` に画像を置き、
差し替え箇所（Hero の `HeroVisual` など、コメントに「画像差し替え箇所」と記載）で
`next/image` を使って読み込んでください。

```tsx
import Image from 'next/image';
<Image src="/images/salon.jpg" alt="施術空間" width={640} height={480} />
```

OGP 画像は `public/ogp.png`（1200×630）を使用しています。
差し替える場合は同名・同サイズの画像で上書きしてください（`layout.tsx` の
`openGraph.images` で参照しています）。

---

## 計測（GA4 / GTM）

`.env.local` に測定IDを設定すると、自動でタグが出力されます（未設定なら出力されません）。

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX    # GA4
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX    # GTM
```

### 計測されるコンバージョンイベント

| イベント名 | 発火タイミング |
| --- | --- |
| `hero_consultation_click` | ファーストビュー「無料相談」/ ヘッダー / 最終CTA |
| `hero_document_click` | ファーストビュー「資料を受け取る」/ 最終CTA |
| `fixed_cta_click` | スマホ固定CTA（type: phone / consultation） |
| `price_consultation_click` | 料金セクションのCTA |
| `form_start` | フォーム入力開始時 |
| `form_submit` | フォーム送信成功時 |
| `phone_click` | 電話番号タップ |
| `line_click` | LINE リンク（設置時） |

---

## お問い合わせフォームの送信先設定

送信は `POST /api/contact`（`src/app/api/contact/route.ts`）で受け取ります。
初期状態では **サーバーログに出力するモック** として動作し、フォームの成功フローを確認できます。

実際にメール送信する場合は、`route.ts` の該当箇所（`TODO` コメント）で
Resend / SendGrid 等のメール送信サービスに接続してください。
送信先アドレスは環境変数 `CONTACT_TO_EMAIL` で指定します。

スパム対策として、honeypot（非表示項目）とサーバー側 Zod バリデーションを実装しています。

---

## SEO / 構造化データ

- タイトル・ディスクリプション・キーワード … `src/config/site.ts` の `meta`
- canonical / robots / OGP / X カード … `src/app/layout.tsx`
- `/sitemap.xml`・`/robots.txt` … `sitemap.ts` / `robots.ts` が自動生成
- 構造化データ（JSON-LD）… `src/lib/structured-data.ts`
  - Organization / WebSite / WebPage / Service / FAQPage / BreadcrumbList

> 検索順位・集客数・掲載等の成果を保証する表現は使用していません。
> 医療広告ガイドライン・景品表示法・薬機法に配慮した表現にしています。

---

## 公開手順（デプロイ）

### Vercel（推奨）

1. このディレクトリを Git リポジトリにして GitHub 等に push
2. [Vercel](https://vercel.com/) で対象リポジトリをインポート
3. 環境変数（`NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` / `CONTACT_TO_EMAIL`）を設定
4. デプロイ（`npm run build` が自動実行されます）

### 自前サーバー

```bash
npm run build
npm run start   # 3200番ポートで起動
```
Node.js 実行環境の前段に Nginx 等のリバースプロキシを置く構成を想定しています。

---

## 仮情報について

会社名・住所・電話番号・メール・LINE URL などは仮の値です。
`src/config/site.ts` の値を実際の情報に置き換えてください。
プライバシーポリシー・利用規約・特定商取引法表記の各ページも仮の内容のため、
実際の運用に合わせて内容を修正してください。
