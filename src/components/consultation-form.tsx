"use client";

import { useActionState, useEffect } from "react";
import { submitConsultation, type InquiryState } from "@/app/actions";
import { consultation, consultationApply, site } from "@/lib/site";
import { trackEvent } from "@/lib/track";

const field =
  "w-full rounded-sm border border-line bg-ground px-3.5 py-2.5 text-[0.92rem] text-ink outline-none transition-colors focus:border-brand";

const initial: InquiryState = { ok: false, message: "" };

export function ConsultationForm() {
  const [state, action, pending] = useActionState(submitConsultation, initial);

  // 送信完了を GA4 の「リード」として計測（入力内容は一切送らない）
  useEffect(() => {
    if (state.ok) trackEvent("generate_lead", { form: "consultation_apply" });
  }, [state.ok]);

  if (state.ok) {
    return (
      <div className="rounded-md border border-good/40 bg-good/10 p-6">
        <p className="text-[0.95rem] font-bold text-ink">お申し込みを受け付けました</p>
        <p className="mt-2 text-[0.9rem] leading-[1.9] text-muted">
          {state.message}
          日時はお申し込み後に個別に調整し、オンラインで1時間、無料でご相談いただけます。
        </p>
      </div>
    );
  }

  const mailtoHref =
    state.mailtoBody &&
    `mailto:${site.contactRecipients.join(",")}?subject=${encodeURIComponent(
      "個別相談会のお申し込み",
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
          <span>事業の形</span>
          <select name="business_type" defaultValue={consultationApply.businessTypes[0]} className={field}>
            {consultationApply.businessTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
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

      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-1.5 text-[0.82rem] font-medium text-muted">
          相談したいこと（複数選択可）
        </legend>
        {consultation.topics.map((t) => (
          <label
            key={t.n}
            className="flex items-start gap-2.5 rounded-sm border border-line bg-ground px-3.5 py-2.5 text-[0.9rem] text-ink"
          >
            <input
              type="checkbox"
              name="topics"
              value={t.title}
              className="mt-1 accent-[var(--brand)]"
            />
            <span>
              <span className="font-bold">{t.title}</span>
              <span className="mt-0.5 block text-[0.82rem] leading-[1.7] text-muted">{t.body}</span>
            </span>
          </label>
        ))}
        <label className="flex items-start gap-2.5 rounded-sm border border-line bg-ground px-3.5 py-2.5 text-[0.9rem] text-ink">
          <input
            type="checkbox"
            name="topics"
            value="その他"
            className="mt-1 accent-[var(--brand)]"
          />
          <span className="font-bold">その他</span>
        </label>
      </fieldset>

      <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
        <span>相談したいこと（自由記入）</span>
        <textarea
          name="message"
          rows={5}
          className={`${field} resize-y`}
          placeholder="いまの状況や、相談したいことをご自由にお書きください。内容がまとまっていなくても構いません。"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
        <span>希望日時（自由記入）</span>
        <input
          name="preferred_schedule"
          className={field}
          placeholder="例：平日の午前中／来週の火曜か木曜の午後 など"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-[0.82rem] font-medium text-muted">
        <span>備考</span>
        <textarea name="note" rows={3} className={`${field} resize-y`} />
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
        {pending ? "送信中…" : "申し込む"}
      </button>
      <p className="font-mono text-[0.72rem] text-muted">
        相談は無料・秘密厳守です。日時はお申し込み後に個別に調整します。
      </p>
    </form>
  );
}
