"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type InquiryState = {
  ok: boolean;
  message: string;
  /** mailto フォールバック用に、整形済み本文を返す */
  mailtoBody?: string;
};

const MAX = { name: 100, company: 120, tel: 40, email: 160, message: 4000 };

function str(v: FormDataEntryValue | null, cap: number) {
  return typeof v === "string" ? v.trim().slice(0, cap) : "";
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // ハニーポット（人間は入力しない隠しフィールド）
  if (str(formData.get("company_url"), 200)) {
    return { ok: true, message: "送信しました。" };
  }

  const name = str(formData.get("name"), MAX.name);
  const company = str(formData.get("company"), MAX.company);
  const email = str(formData.get("email"), MAX.email);
  const tel = str(formData.get("tel"), MAX.tel);
  const topic = str(formData.get("topic"), 60) || "その他";
  const message = str(formData.get("message"), MAX.message);

  if (!name || !email || !message) {
    return { ok: false, message: "お名前・メールアドレス・ご相談内容は必須です。" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "メールアドレスの形式をご確認ください。" };
  }

  const lines = [
    `お名前: ${name}`,
    `会社名: ${company || "—"}`,
    `メール: ${email}`,
    `電話: ${tel || "—"}`,
    `ご相談の種類: ${topic}`,
    "",
    "【ご相談内容】",
    message,
  ].join("\n");

  return deliverInquiry(
    `【お問い合わせ】${topic} / ${name}様`,
    lines,
    email,
    "送信しました。1営業日以内にご返信します。",
  );
}

/**
 * 個別相談会の専用申込フォーム（/consultation/apply）用。
 * 送信先・送信方法は通常のお問い合わせと同じ仕組みを使う。
 */
export async function submitConsultation(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // ハニーポット（人間は入力しない隠しフィールド）
  if (str(formData.get("company_url"), 200)) {
    return { ok: true, message: "送信しました。" };
  }

  const name = str(formData.get("name"), MAX.name);
  const businessType = str(formData.get("business_type"), 60) || "未選択";
  const email = str(formData.get("email"), MAX.email);
  const tel = str(formData.get("tel"), MAX.tel);
  const topics = formData
    .getAll("topics")
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim().slice(0, 80))
    .filter(Boolean);
  const message = str(formData.get("message"), MAX.message);
  const schedule = str(formData.get("preferred_schedule"), 200);
  const note = str(formData.get("note"), MAX.message);

  if (!name || !email) {
    return { ok: false, message: "お名前・メールアドレスは必須です。" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "メールアドレスの形式をご確認ください。" };
  }
  if (topics.length === 0 && !message) {
    return {
      ok: false,
      message: "相談したいことを1つ以上選ぶか、自由記入欄にご記入ください。",
    };
  }

  const lines = [
    `お名前: ${name}`,
    `事業の形: ${businessType}`,
    `メール: ${email}`,
    `電話: ${tel || "—"}`,
    `相談したいこと: ${topics.length > 0 ? topics.join("／") : "—"}`,
    `希望日時: ${schedule || "—"}`,
    "",
    "【相談したいこと（自由記入）】",
    message || "—",
    "",
    "【備考】",
    note || "—",
  ].join("\n");

  return deliverInquiry(
    `【個別相談会申込】${name}様`,
    lines,
    email,
    "送信しました。日程調整のため、こちらからご連絡します。",
  );
}

/** Resend で送信先（site.contactRecipients）へメールを送る共通処理 */
async function deliverInquiry(
  subject: string,
  lines: string,
  replyTo: string,
  successMessage: string,
): Promise<InquiryState> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  // 環境変数で追加の宛先を指定できるが、既定では site.contactRecipients 全員に送る
  const to = process.env.CONTACT_TO_EMAIL
    ? [...new Set([process.env.CONTACT_TO_EMAIL, ...site.contactRecipients])]
    : site.contactRecipients;

  if (!apiKey || !from) {
    return {
      ok: false,
      message:
        "現在フォームからの送信を受け付けられません。お手数ですがメールでお問い合わせください。",
      mailtoBody: lines,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo,
      subject,
      text: lines,
    });
    if (error) {
      return { ok: false, message: "送信に失敗しました。時間をおいて再度お試しください。", mailtoBody: lines };
    }
    return { ok: true, message: successMessage };
  } catch {
    return { ok: false, message: "送信に失敗しました。時間をおいて再度お試しください。", mailtoBody: lines };
  }
}
