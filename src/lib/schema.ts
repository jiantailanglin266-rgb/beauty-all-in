import { z } from 'zod';

/** 業種の選択肢 */
export const industryOptions = [
  '美容室',
  'ネイル',
  'まつ毛',
  'エステ',
  '脱毛',
  'リラクゼーション',
  'クリニック',
  '歯科',
  '接骨院・整骨院',
  '整体・鍼灸',
  'その他',
] as const;

/** 希望連絡方法 */
export const contactMethodOptions = [
  '電話',
  'メール',
  'LINE',
  'どれでも可',
] as const;

/** お問い合わせフォームのバリデーションスキーマ */
export const contactSchema = z.object({
  storeName: z
    .string()
    .min(1, '店舗名・法人名を入力してください')
    .max(100, '100文字以内で入力してください'),
  personName: z
    .string()
    .min(1, 'ご担当者名を入力してください')
    .max(50, '50文字以内で入力してください'),
  industry: z.enum(industryOptions, {
    errorMap: () => ({ message: '業種を選択してください' }),
  }),
  tel: z
    .string()
    .min(1, '電話番号を入力してください')
    .regex(
      /^[0-9+\-()\s]{8,20}$/,
      '正しい電話番号を入力してください（半角数字・ハイフン）'
    ),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('正しいメールアドレスを入力してください'),
  storeArea: z
    .string()
    .min(1, '店舗所在地を入力してください')
    .max(100, '100文字以内で入力してください'),
  websiteUrl: z
    .union([z.string().url('正しいURLを入力してください'), z.literal('')])
    .optional(),
  currentMedia: z.string().max(200, '200文字以内で入力してください').optional(),
  currentCost: z.string().max(100, '100文字以内で入力してください').optional(),
  message: z
    .string()
    .max(2000, '2000文字以内で入力してください')
    .optional(),
  contactMethod: z.enum(contactMethodOptions, {
    errorMap: () => ({ message: '希望する連絡方法を選択してください' }),
  }),
  privacyAgreed: z.literal(true, {
    errorMap: () => ({
      message: '個人情報保護方針への同意が必要です',
    }),
  }),
  /**
   * スパム対策：honeypot（人間には見えない項目）。
   * スキーマ上は任意の値を許容し、値が入っていたらサーバー側で
   * bot とみなして静かに成功扱いにします（route.ts 参照）。
   */
  company_website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
