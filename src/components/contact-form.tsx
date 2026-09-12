"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { site } from "@/lib/site";

const field =
  "w-full rounded-sm border border-line bg-ground px-3.5 py-2.5 text-[0.92rem] text-ink outline-none transition-colors focus:border-brand";

const initial: InquiryState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitInquiry, initial);

  if (state.ok) {
    return (
      <div className="rounded-md border border-good/40 bg-good/10 p-6">
        <p className="text-[0.95rem] font-bold text-ink">送信を受け付けました</p>
        <p className="mt-2 text-[0.9rem] leading-[1.9] text-muted">{state.message}</p>
      </div>
    );
  }

  const mailtoHref =
    state.mailtoBody &&
    `mailto:${site.contactRecipients.join(",")}?subject=${encodeURIComponent(
      "お問い合わせ",
    )}&body=${encodeURIComponent(state.mailtoBody)}`;

  return (
    <form action={action} className="flex flex-col gap-5">
      {/* ハニーポット */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {state.message && !state.ok ? (
        <p
          role="alert"
          className="rounded-sm border border-warn/40 bg-warn/10 px-4 py-3 text-[0.86rem] leading-[1.8] text-ink"
        >
          {state.message}
          {mailtoHref ? (
            <>
              {" "}
              <a href={mailtoHref} className="font-bold text-brand underline">
                メールソフトで送信する
              </a>
            </>
          ) : null}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
          <span className="flex items-center gap-1.5">
            お名前 <span className="text-warn">必須</span>
          </span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
          <span>会社名</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
          <span className="flex items-center gap-1.5">
            メールアドレス <span className="text-warn">必須</span>
          </span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
          <span>電話番号</span>
          <input name="tel" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
        <span>ご相談の種類</span>
        <select name="topic" defaultValue="私的整理・負債の整理" className={field}>
          <option>私的整理・負債の整理</option>
          <option>仕事紹介</option>
          <option>資金調達・財務改善</option>
          <option>信用を活かした収益化</option>
          <option>その他</option>
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
        <span className="flex items-center gap-1.5">
          ご相談内容 <span className="text-warn">必須</span>
        </span>
        <textarea name="message" required rows={6} className={`${field} resize-y`} />
      </label>

      <label className="flex items-start gap-2.5 text-[0.82rem] leading-[1.7] text-muted">
        <input type="checkbox" required className="mt-1 accent-[var(--brand)]" />
        <span>
          <a href="/privacy" className="text-brand hover:text-brand-ink">
            プライバシーポリシー
          </a>
          に同意します。
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-sm bg-brand px-6 py-3.5 text-[0.95rem] font-bold text-brand-contrast transition-colors hover:bg-brand-ink disabled:opacity-60 sm:w-auto"
      >
        {pending ? "送信中…" : "送信する"}
      </button>
      <p className="font-mono text-[0.72rem] text-muted">
        相談は無料・秘密厳守です。1営業日以内にご返信します。
      </p>
    </form>
  );
}
