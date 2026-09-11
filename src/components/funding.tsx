import { fundingMethods, fundingNote } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function Funding() {
  return (
    <section id="funding" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="04 ／ 資金を調達する"
          title="法人を使った資金調達"
          lead="法人という信用は、それ自体が資金調達の手段になります。PCSスタイルの立ち上げ・運転資金づくりに使える、代表的な選択肢です。"
        />

        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {fundingMethods.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05} className="flex flex-col gap-2.5 bg-surface p-6">
              <span className="font-mono text-[0.7rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1rem] font-bold leading-[1.6] text-ink">{f.title}</h3>
              <p className="text-[0.86rem] leading-[1.85] text-muted">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <p className="text-[0.8rem] leading-[1.8] text-muted">※ {fundingNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
