import { comparison } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { CompareTable } from "@/components/compare-table";

export function Restructuring() {
  return (
    <section id="restructuring" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="02 ／ 今の会社を整理する"
          title="儲からない会社を、どう畳むか"
          lead="PCSスタイルへ移るために、今の事業をどう整理するか。法的整理（破産）を選ぶと、代表者は個人資産（自宅）を手放すことになりがちです。時管式私的整理であれば、会社も自宅も残せる可能性があります。"
        />

        <CompareTable
          caption="法的整理と時管式私的整理の比較"
          columns={comparison.columns}
          rows={comparison.rows}
        />

        <Reveal className="mt-4">
          <p className="text-[0.8rem] leading-[1.8] text-muted">※ {comparison.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
