'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Loader2,
  Send,
  AlertTriangle,
  Phone,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import Link from 'next/link';
import {
  contactSchema,
  industryOptions,
  contactMethodOptions,
  type ContactFormValues,
} from '@/lib/schema';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/gtag';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-gold';
const labelClass = 'mb-1.5 block text-sm font-semibold text-charcoal';
const errorClass = 'mt-1 text-xs text-red-600';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [startTracked, setStartTracked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const handleFirstInteraction = () => {
    if (!startTracked) {
      trackEvent('form_start');
      setStartTracked(true);
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    // スパム対策：honeypot に値があれば bot とみなし、何もせず成功表示
    if (values.company_website && values.company_website.length > 0) {
      setStatus('success');
      reset();
      return;
    }

    setStatus('submitting');
    try {
      // 静的ホスティング（GitHub Pages）ではサーバーAPIを使えないため、
      // 入力内容を本文に組み立ててメールソフトを起動します。
      const lines = [
        `店舗名・法人名：${values.storeName}`,
        `ご担当者名：${values.personName}`,
        `業種：${values.industry}`,
        `電話番号：${values.tel}`,
        `メールアドレス：${values.email}`,
        `店舗所在地：${values.storeArea}`,
        `ホームページURL：${values.websiteUrl || '（未入力）'}`,
        `現在使用中の集客媒体：${values.currentMedia || '（未入力）'}`,
        `現在の月額集客費：${values.currentCost || '（未入力）'}`,
        `希望する連絡方法：${values.contactMethod}`,
        '',
        '【相談内容】',
        values.message || '（未入力）',
      ];
      const subject = `【無料相談のお申し込み】${values.storeName}`;
      const mailto = `mailto:${siteConfig.company.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(lines.join('\n'))}`;

      trackEvent('form_submit');
      window.location.href = mailto;
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-ivory">
      <div className="container-content">
        <SectionHeading
          eyebrow="Contact"
          title={<span className="gold-rule">無料相談・お問い合わせ</span>}
          description="下記フォームよりお気軽にご相談ください。内容を確認のうえ、担当者よりご連絡します。"
        />

        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl">
            {status === 'success' ? (
              <div className="rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-card sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <CheckCircle2 size={34} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-charcoal">
                  内容を確認しました
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-muted">
                  ご入力ありがとうございます。メールソフトが起動しますので、
                  <br className="hidden sm:block" />
                  内容をご確認のうえ「送信」してください。
                  <br />
                  受信後、担当者よりご連絡いたします。
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="btn-secondary text-sm"
                  >
                    <Mail size={16} />
                    メールソフトが開かない場合はこちら
                  </a>
                  <a
                    href={siteConfig.company.telHref}
                    onClick={() => trackEvent('phone_click')}
                    className="btn-dark text-sm"
                  >
                    <Phone size={16} />
                    電話で相談（{siteConfig.company.tel}）
                  </a>
                </div>
              </div>
            ) : (
              <>
            {status === 'error' && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <AlertTriangle size={18} className="mt-0.5 flex-none" />
                <div>
                  送信に失敗しました。時間をおいて再度お試しいただくか、
                  お電話（
                  <a
                    href={siteConfig.company.telHref}
                    className="font-semibold underline"
                  >
                    {siteConfig.company.tel}
                  </a>
                  ）でもご相談を承ります。
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              onChange={handleFirstInteraction}
              noValidate
              className="space-y-5 rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card sm:p-8"
            >
              {/* honeypot（スパム対策・非表示） */}
              <div
                aria-hidden
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="company_website">Webサイト（入力不要）</label>
                <input
                  id="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register('company_website')}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="storeName" className={labelClass}>
                    店舗名・法人名 <Req />
                  </label>
                  <input
                    id="storeName"
                    className={inputClass}
                    placeholder="例）BEAUTY SALON 〇〇"
                    {...register('storeName')}
                  />
                  {errors.storeName && (
                    <p className={errorClass}>{errors.storeName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="personName" className={labelClass}>
                    ご担当者名 <Req />
                  </label>
                  <input
                    id="personName"
                    className={inputClass}
                    placeholder="例）美容 花子"
                    {...register('personName')}
                  />
                  {errors.personName && (
                    <p className={errorClass}>{errors.personName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="industry" className={labelClass}>
                    業種 <Req />
                  </label>
                  <select
                    id="industry"
                    className={inputClass}
                    defaultValue=""
                    {...register('industry')}
                  >
                    <option value="" disabled>
                      選択してください
                    </option>
                    {industryOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className={errorClass}>{errors.industry.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactMethod" className={labelClass}>
                    希望する連絡方法 <Req />
                  </label>
                  <select
                    id="contactMethod"
                    className={inputClass}
                    defaultValue=""
                    {...register('contactMethod')}
                  >
                    <option value="" disabled>
                      選択してください
                    </option>
                    {contactMethodOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.contactMethod && (
                    <p className={errorClass}>{errors.contactMethod.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="tel" className={labelClass}>
                    電話番号 <Req />
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    inputMode="tel"
                    className={inputClass}
                    placeholder="例）03-0000-0000"
                    {...register('tel')}
                  />
                  {errors.tel && (
                    <p className={errorClass}>{errors.tel.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    メールアドレス <Req />
                  </label>
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    className={inputClass}
                    placeholder="例）info@example.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className={errorClass}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="storeArea" className={labelClass}>
                  店舗所在地 <Req />
                </label>
                <input
                  id="storeArea"
                  className={inputClass}
                  placeholder="例）東京都渋谷区"
                  {...register('storeArea')}
                />
                {errors.storeArea && (
                  <p className={errorClass}>{errors.storeArea.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="websiteUrl" className={labelClass}>
                  ホームページURL{' '}
                  <span className="text-xs font-normal text-muted">（任意）</span>
                </label>
                <input
                  id="websiteUrl"
                  type="url"
                  className={inputClass}
                  placeholder="例）https://example.com"
                  {...register('websiteUrl')}
                />
                {errors.websiteUrl && (
                  <p className={errorClass}>{errors.websiteUrl.message}</p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="currentMedia" className={labelClass}>
                    現在使用中の集客媒体{' '}
                    <span className="text-xs font-normal text-muted">
                      （任意）
                    </span>
                  </label>
                  <input
                    id="currentMedia"
                    className={inputClass}
                    placeholder="例）ホットペッパー、Instagram"
                    {...register('currentMedia')}
                  />
                </div>
                <div>
                  <label htmlFor="currentCost" className={labelClass}>
                    現在の月額集客費{' '}
                    <span className="text-xs font-normal text-muted">
                      （任意）
                    </span>
                  </label>
                  <input
                    id="currentCost"
                    className={inputClass}
                    placeholder="例）月10万円ほど"
                    {...register('currentCost')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  相談内容{' '}
                  <span className="text-xs font-normal text-muted">（任意）</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClass} resize-y`}
                  placeholder="現在のお悩みやご相談内容をご記入ください。"
                  {...register('message')}
                />
                {errors.message && (
                  <p className={errorClass}>{errors.message.message}</p>
                )}
              </div>

              {/* 個人情報同意 */}
              <div className="rounded-lg bg-sand/60 p-4">
                <label className="flex items-start gap-3 text-sm text-charcoal/85">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 flex-none rounded border-charcoal/30 text-gold accent-[#c2a05a]"
                    {...register('privacyAgreed')}
                  />
                  <span>
                    <Link
                      href="/privacy"
                      className="font-semibold text-gold-dark underline"
                      target="_blank"
                    >
                      個人情報保護方針
                    </Link>
                    に同意します <Req />
                  </span>
                </label>
                {errors.privacyAgreed && (
                  <p className={errorClass}>{errors.privacyAgreed.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    送信中…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    この内容で無料相談を申し込む
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted">
                お急ぎの方はお電話でも承ります：
                <a
                  href={siteConfig.company.telHref}
                  onClick={() => trackEvent('phone_click')}
                  className="ml-1 inline-flex items-center gap-1 font-semibold text-gold-dark"
                >
                  <Phone size={13} />
                  {siteConfig.company.tel}
                </a>
                （{siteConfig.company.businessHours}）
              </p>
            </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Req() {
  return (
    <span className="align-middle text-[10px] font-bold text-red-500">必須</span>
  );
}
