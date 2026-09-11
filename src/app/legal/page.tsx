import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "特定商取引法に基づく表記です。",
};

const rows: { label: string; value: string }[] = [
  { label: "事業者名", value: "［一般社団法人 倒産回避支援中小企業協会］" },
  { label: "代表者", value: "［代表者氏名］" },
  { label: "所在地", value: "［〒000-0000 住所］" },
  { label: "電話番号", value: "［電話番号／受付時間］" },
  { label: "メールアドレス", value: "info@energysite.net" },
  { label: "役務の対価", value: "個別のお見積り・ご案内時に明示します" },
  { label: "対価以外の必要料金", value: "通信料等はお客様のご負担となります" },
  { label: "支払方法・時期", value: "個別のご契約時にご案内します" },
  { label: "役務の提供時期", value: "個別のご契約時にご案内します" },
  { label: "返品・キャンセル", value: "個別のご契約条件に従います" },
];

export default function LegalPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="特定商取引法に基づく表記"
      intro="以下は雛形です。実際の事業者情報に置き換えてご利用ください。"
    >
      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[30rem] border-collapse text-left text-[0.9rem]">
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-line last:border-0">
                <th
                  scope="row"
                  className="w-[11rem] bg-surface-2 p-4 align-top text-[0.82rem] font-medium text-muted"
                >
                  {r.label}
                </th>
                <td className="p-4 align-top leading-[1.9] text-ink">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Prose>
        <p className="text-[0.82rem] text-muted">
          ※ 角括弧［　］の項目は、事業者ご自身の情報を記載してください。
        </p>
      </Prose>
    </PageShell>
  );
}
