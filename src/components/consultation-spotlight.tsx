import { consultation } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/tracked-link";

export function ConsultationSpotlight() {
  return (
    <section id="consultation" className="brand-field border-b border-line text-brand-contrast">
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-16">
        <Reveal className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-contrast/70">
              Free Consultation ／ {consultation.tagline}
            </p>
            <h2 className="text-[length:var(--text-fluid-h2)] font-bold leading-[1.4] text-brand-contrast">
              {consultation.title}
            </h2>
            <p className="mt-5 max-w-[38rem] text-[0.94rem] leading-[1.95] text-brand-contrast/85">
              {consultation.lead}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {consultation.notes.map((n) => (
                <li
                  key={n}
                  className="rounded-sm border border-brand-contrast/25 px-3 py-1 text-[0.76rem] text-brand-contrast/80"
                >
                  {n}
                </li>
              ))}
            </ul>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-brand-contrast/20 pt-6">
              {(
                [
                  ["日時", [consultation.schedule]],
                  ["形式", [consultation.format]],
                  ["所要時間", [consultation.duration]],
                  ["相談料", [consultation.fee]],
                  ["お申し込み", [consultation.howToApply]],
                ] as [string, string[]][]
              ).map(([label, lines]) => (
                <div key={label}>
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-brand-contrast/60">
                    {label}
                  </dt>
                  <dd className="mt-1 font-bold text-brand-contrast">
                    {lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <TrackedLink
                href={consultation.href}
                eventName="consultation_click"
                eventParams={{ location: "spotlight" }}
                className="inline-flex items-center rounded-sm bg-brand-contrast px-6 py-3 text-[0.92rem] font-bold text-brand transition-opacity hover:opacity-90"
              >
                個別相談会に申し込む
              </TrackedLink>
              <span className="text-[0.78rem] text-brand-contrast/60">
                ご相談内容がまとまっていなくても構いません
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-md border border-brand-contrast/20 bg-brand-contrast/5 p-5">
              <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand-contrast/60">
                ご相談いただけること
              </p>
              <ul className="flex flex-col gap-4">
                {consultation.topics.map((t) => (
                  <li key={t.n} className="flex gap-3">
                    <span className="font-mono text-[0.85rem] font-bold text-brand-contrast/80">{t.n}</span>
                    <div>
                      <p className="text-[0.9rem] font-bold text-brand-contrast">{t.title}</p>
                      <p className="mt-0.5 text-[0.82rem] leading-[1.8] text-brand-contrast/75">
                        {t.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
