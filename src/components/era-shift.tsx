import { eraShift } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { CompareTable } from "@/components/compare-table";

export function EraShift() {
  return (
    <section id="style" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="Why now"
          title="なぜ今、PCSスタイルなのか"
          lead="都会にオフィスを構え、社員を雇って利益を出す――その前提が変わりました。"
        />

        <CompareTable
          caption="従来型とPCSスタイルの比較"
          columns={eraShift.columns}
          rows={eraShift.rows}
        />

        <Reveal className="mt-4">
          <p className="text-[0.8rem] leading-[1.8] text-muted">※ {eraShift.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
