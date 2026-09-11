import { eraShift } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function EraShift() {
  return (
    <section id="style" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead
          eyebrow="Why now"
          title="なぜ今、PCSスタイルなのか"
          lead="都会にオフィスを構え、社員を雇って利益を出す――その前提が変わりました。"
        />

        <Reveal className="overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[34rem] border-collapse text-left text-[0.9rem]">
            <caption className="sr-only">従来型とPCSスタイルの比較</caption>
            <thead>
              <tr className="bg-surface-2">
                <th scope="col" className="w-[8rem] p-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  比較項目
                </th>
                {eraShift.columns.map((col, i) => (
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
              {eraShift.rows.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="p-4 align-top text-[0.82rem] font-medium text-muted">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`p-4 align-top leading-[1.8] ${
                        i === 1 ? "bg-brand/5 font-medium text-ink" : "text-muted"
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
          <p className="text-[0.8rem] leading-[1.8] text-muted">※ {eraShift.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
