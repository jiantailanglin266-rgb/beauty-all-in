/**
 * Google Analytics 4 / GTM 用のイベント送信ヘルパー
 * ------------------------------------------------------------
 * CTAクリックやフォーム操作のコンバージョン計測に使用します。
 * gtag / dataLayer が存在しない環境（未設定時）では安全に何もしません。
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';

/** 計測イベント名（仕様で定義されたコンバージョン計測用イベント） */
export type AnalyticsEvent =
  | 'hero_consultation_click'
  | 'hero_document_click'
  | 'fixed_cta_click'
  | 'price_consultation_click'
  | 'form_start'
  | 'form_submit'
  | 'phone_click'
  | 'line_click';

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * イベントを送信する。
 * GA4 (gtag) と GTM (dataLayer) の両方に送信します。
 */
export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  // GA4 (gtag.js)
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params ?? {});
  }

  // Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...(params ?? {}) });
  }
}
