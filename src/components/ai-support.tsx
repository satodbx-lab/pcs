import { aiOfferings, aiSupportLead } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function AiSupport() {
  return (
    <section id="ai" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="AI Enablement"
          title="一人で完結し続けるための、AI化支援"
          lead={aiSupportLead}
        />

        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
          {aiOfferings.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06} className="flex flex-col gap-2.5 bg-surface p-6">
              <span className="font-mono text-[0.7rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1rem] font-bold leading-[1.6] text-ink">{o.title}</h3>
              <p className="text-[0.86rem] leading-[1.85] text-muted">{o.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <a href="#seminar" className="inline-flex items-center gap-2 text-[0.88rem] font-bold text-brand hover:text-brand-ink">
            次回セミナーの詳細を見る
            <span aria-hidden="true">↑</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
