import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ConsultationForm } from "@/components/consultation-form";
import { consultation, consultationApply } from "@/lib/site";

export const metadata: Metadata = {
  title: "「AI社員を入れる」個別相談会のお申し込み",
  alternates: { canonical: "/consultation/apply" },
  description:
    "「AI社員を入れる」個別相談会（副題：PCSスタイルの始め方）の専用申込ページです。オンライン（Zoom）・1時間・初回無料。日時はお申し込み後に個別に調整します。",
};

const heading = "mt-10 mb-4 text-[1.15rem] font-bold text-ink first:mt-0";

export default function ConsultationApplyPage() {
  return (
    <PageShell
      eyebrow="Free Consultation"
      title={consultation.title}
      intro={consultation.lead}
    >
      <div>
        <p className="text-[0.95rem] font-bold text-brand">
          ― {consultation.tagline} ―
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {consultation.notes.map((n) => (
            <li
              key={n}
              className="rounded-sm border border-line px-3 py-1 text-[0.76rem] text-muted"
            >
              {n}
            </li>
          ))}
        </ul>

        <p className="mt-5 rounded-md border border-brand/30 bg-brand/5 px-4 py-3 text-[0.92rem] leading-[1.85] text-ink">
          <span className="font-bold text-brand">初回相談は無料です。</span>
          相談会はZoomで行います。まずはお気軽にお申し込みください。
        </p>

        <h2 className={heading}>相談できること</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {consultation.topics.map((t) => (
            <li key={t.n} className="rounded-md border border-line bg-ground p-5">
              <p className="font-mono text-[0.85rem] font-bold text-brand">{t.n}</p>
              <p className="mt-1 text-[0.92rem] font-bold text-ink">{t.title}</p>
              <p className="mt-1 text-[0.84rem] leading-[1.85] text-muted">{t.body}</p>
            </li>
          ))}
        </ul>

        <h2 className={heading}>相談会の条件</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-md border border-line bg-ground p-5 sm:grid-cols-3">
          {(
            [
              ["日時", consultation.schedule],
              ["形式", consultation.format],
              ["所要時間", consultation.duration],
              ["相談料", consultation.fee],
              ["お申し込み", "下のフォームから"],
            ] as [string, string][]
          ).map(([label, value]) => (
            <div key={label}>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                {label}
              </dt>
              <dd className="mt-1 text-[0.92rem] font-bold text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <h2 className={heading}>お申し込みの流れ</h2>
        <ol className="flex flex-col gap-4">
          {consultationApply.steps.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-mono text-[0.85rem] font-bold text-brand-contrast">
                {s.n}
              </span>
              <div>
                <p className="text-[0.92rem] font-bold text-ink">{s.title}</p>
                <p className="mt-0.5 text-[0.86rem] leading-[1.85] text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className={heading}>お申し込みフォーム</h2>
        <ConsultationForm />
      </div>
    </PageShell>
  );
}
