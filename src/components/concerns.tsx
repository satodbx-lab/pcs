import Link from "next/link";
import { fitCaution, fitCriteria, fitTypes } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function Concerns() {
  return (
    <section id="fit" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="01 ／ 適性を見極める"
          title="その仕事、PCSに向いていますか？"
          lead="当てはまる数が多いほど、その仕事はPCSスタイルに向いています。今の仕事や、始めようとしている仕事に当てはめてみてください。"
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {fitCriteria.map((c, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 0.04}
              className="flex items-start gap-3 rounded-md border border-line bg-surface p-4"
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[0.92rem] leading-[1.8] text-ink">{c}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14">
          <p className="mb-5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            PCS向きの仕事の型
          </p>
          <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
            {fitTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05} className="flex flex-col gap-2 bg-surface p-5">
                <h3 className="text-[0.95rem] font-bold leading-[1.6] text-ink">{t.title}</h3>
                <p className="text-[0.86rem] leading-[1.85] text-muted">{t.body}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-5 flex gap-3 rounded-md border border-warn/40 bg-warn/10 p-4">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-warn"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[0.86rem] leading-[1.85] text-ink">{fitCaution}</p>
        </Reveal>

        <Reveal className="mt-8">
          <Link
            href="/about/pcs"
            className="inline-flex items-center gap-2 text-[0.92rem] font-bold text-brand hover:text-brand-ink"
          >
            PCSスタイルの考え方をもっと詳しく
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
