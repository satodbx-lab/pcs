"use server";

import { Resend } from "resend";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
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
      replyTo: email,
      subject: `【お問い合わせ】${topic} / ${name}様`,
      text: lines,
    });
    if (error) {
      return { ok: false, message: "送信に失敗しました。時間をおいて再度お試しください。", mailtoBody: lines };
    }
    return { ok: true, message: "送信しました。1営業日以内にご返信します。" };
  } catch {
    return { ok: false, message: "送信に失敗しました。時間をおいて再度お試しください。", mailtoBody: lines };
  }
}
