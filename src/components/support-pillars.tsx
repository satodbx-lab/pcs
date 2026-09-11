import { pillars } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function SupportPillars() {
  return (
    <section id="pillars" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="4 steps"
          title="PCSスタイルを確立するための4つの情報"
          lead="向いているかを見極め、今の会社を整理し、収入をつなぎながら、資金を調達する。この順で読み進められます。"
        />

        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06} className="bg-surface">
              <a href={p.href} className="group flex h-full flex-col gap-3 p-6 sm:p-7">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[1.05rem] font-medium text-accent">{p.n}</span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    {p.label}
                  </span>
                </div>
                <h3 className="text-[1.1rem] font-bold leading-[1.6] text-ink">{p.title}</h3>
                <p className="text-[0.88rem] leading-[1.9] text-muted">{p.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.84rem] font-bold text-brand group-hover:text-brand-ink">
                  詳しく見る
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
