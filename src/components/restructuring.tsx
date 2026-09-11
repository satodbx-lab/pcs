import { comparison } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function Restructuring() {
  return (
    <section id="restructuring" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="02 ／ 今の会社を整理する"
          title="儲からない会社を、どう畳むか"
          lead="PCSスタイルへ移るために、今の事業をどう整理するか。法的整理（破産）を選ぶと、代表者は個人資産（自宅）を手放すことになりがちです。時管式私的整理であれば、会社も自宅も残せる可能性があります。"
        />

        <Reveal className="overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9rem]">
            <caption className="sr-only">法的整理と時管式私的整理の比較</caption>
            <thead>
              <tr className="bg-surface-2">
                <th scope="col" className="w-[9rem] p-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  比較項目
                </th>
                {comparison.columns.map((col, i) => (
                  <th
                    scope="col"
                    key={col}
                    className={`p-4 text-[0.86rem] font-bold ${
                      i === 1 ? "bg-brand text-brand-contrast" : "text-ink"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="p-4 align-top text-[0.82rem] font-medium text-muted">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`p-4 align-top leading-[1.8] ${
                        i === 1
                          ? "bg-brand/5 font-medium text-ink"
                          : "text-muted"
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="mt-4">
          <p className="text-[0.8rem] leading-[1.8] text-muted">※ {comparison.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
