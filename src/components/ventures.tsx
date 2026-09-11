import { ventures, venturesNote } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function Ventures() {
  return (
    <section id="ventures" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="03 ／ 今すぐ収入を得る"
          title="PCSスタイルを始めるための仕事紹介"
          lead="PCSスタイルを始めたくても、すぐの収入がないと困る方へ。研究会が紹介している、着手しやすい仕事の例です。"
        />

        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05} className="flex flex-col gap-2.5 bg-surface p-6">
              <span className="font-mono text-[0.7rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1rem] font-bold leading-[1.6] text-ink">{v.title}</h3>
              <p className="text-[0.86rem] leading-[1.85] text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <p className="text-[0.8rem] leading-[1.8] text-muted">※ {venturesNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
