import { sendGAEvent } from "@next/third-parties/google";
import { site } from "@/lib/site";

/**
 * GA4 にイベントを送る（クライアントコンポーネントから呼ぶこと）。
 * 測定ID未設定の間は何もしない。個人情報（フォーム入力内容など）は渡さないこと。
 */
export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (!site.gaMeasurementId) return;
  sendGAEvent("event", name, params ?? {});
}
