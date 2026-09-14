import { seminar } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function SeminarSpotlight() {
  return (
    <section id="seminar" className="brand-field border-b border-line text-brand-contrast">
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-16">
        <Reveal className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-contrast/70">
              Online Seminar ／ {seminar.tagline}
            </p>
            <h2 className="text-[length:var(--text-fluid-h2)] font-bold leading-[1.4] text-brand-contrast">
              {seminar.title}
            </h2>
            <p className="mt-2 text-[0.95rem] text-brand-contrast/70">― {seminar.subtitle} ―</p>
            <p className="mt-5 max-w-[38rem] text-[0.94rem] leading-[1.95] text-brand-contrast/85">
              {seminar.teaser}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {seminar.notes.map((n) => (
                <li
                  key={n}
                  className="rounded-sm border border-brand-contrast/25 px-3 py-1 text-[0.76rem] text-brand-contrast/80"
                >
                  {n}
                </li>
              ))}
            </ul>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-brand-contrast/20 pt-6 sm:grid-cols-4">
              {[
                ["日時", seminar.date],
                ["時間", seminar.time],
                ["形式", seminar.format],
                ["参加費", seminar.fee],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-brand-contrast/60">
                    {label}
                  </dt>
                  <dd className="mt-1 font-bold text-brand-contrast">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={seminar.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-sm bg-brand-contrast px-6 py-3 text-[0.92rem] font-bold text-brand transition-opacity hover:opacity-90"
              >
                無料で申し込む
              </a>
              <span className="text-[0.78rem] text-brand-contrast/60">{seminar.registerNote}</span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-md border border-brand-contrast/20 bg-brand-contrast/5 p-5">
              <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand-contrast/60">
                当日お見せする、3つのこと
              </p>
              <ul className="flex flex-col gap-4">
                {seminar.highlights.map((h) => (
                  <li key={h.n} className="flex gap-3">
                    <span className="font-mono text-[0.85rem] font-bold text-brand-contrast/80">{h.n}</span>
                    <div>
                      <p className="text-[0.9rem] font-bold text-brand-contrast">{h.title}</p>
                      <p className="mt-0.5 text-[0.82rem] leading-[1.8] text-brand-contrast/75">
                        {h.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border border-brand-contrast/20 bg-brand-contrast/5 p-5">
              <p className="text-[0.88rem] font-bold text-brand-contrast">
                {seminar.speakerName}
                <span className="ml-2 font-normal text-brand-contrast/70">{seminar.speakerRole}</span>
              </p>
              <p className="mt-2 text-[0.82rem] leading-[1.85] text-brand-contrast/75">
                {seminar.speakerBio}
              </p>
            </div>

            <p className="text-[0.72rem] leading-[1.8] text-brand-contrast/50">
              対象：{seminar.target}
              <br />
              主催：{seminar.organizer} ／ 共催：{seminar.coHost}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
