import { Reveal } from "@/components/reveal";

type Row = { label: string; values: string[] };

/**
 * 2列の比較表。
 * - md 以上：表形式（右側の列を強調）
 * - スマホ：項目ごとのカードを縦に積む（横スクロールが不要なので、見落としが起きない）
 */
export function CompareTable({
  caption,
  columns,
  rows,
  highlight = 1,
}: {
  caption: string;
  columns: string[];
  rows: Row[];
  /** 強調する列（0始まり） */
  highlight?: number;
}) {
  return (
    <>
      {/* スマホ：縦並び */}
      <ul className="flex flex-col gap-3 md:hidden" aria-label={caption}>
        {rows.map((row, r) => (
          <Reveal as="li" key={row.label} delay={r * 0.04} className="overflow-hidden rounded-md border border-line bg-surface">
            <p className="bg-surface-2 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
              {row.label}
            </p>
            <div className="divide-y divide-line">
              {columns.map((col, i) => (
                <div key={col} className={`px-4 py-3 ${i === highlight ? "bg-brand/5" : ""}`}>
                  <p className={`text-[0.74rem] font-bold ${i === highlight ? "text-brand" : "text-muted"}`}>
                    {col}
                  </p>
                  <p
                    className={`mt-0.5 text-[0.92rem] leading-[1.8] ${
                      i === highlight ? "font-medium text-ink" : "text-muted"
                    }`}
                  >
                    {row.values[i]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </ul>

      {/* md 以上：表 */}
      <Reveal className="hidden overflow-x-auto rounded-md border border-line md:block">
        <table className="w-full border-collapse text-left text-[0.9rem]">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-surface-2">
              <th scope="col" className="w-[9rem] p-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                比較項目
              </th>
              {columns.map((col, i) => (
                <th
                  scope="col"
                  key={col}
                  className={`p-4 text-[0.86rem] font-bold ${
                    i === highlight ? "bg-brand text-brand-contrast" : "text-ink"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-line">
                <th scope="row" className="p-4 align-top text-[0.82rem] font-medium text-muted">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className={`p-4 align-top leading-[1.8] ${
                      i === highlight ? "bg-brand/5 font-medium text-ink" : "text-muted"
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
    </>
  );
}
