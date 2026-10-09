import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  alternates: { canonical: "/legal" },
  description: "特定商取引法に基づく表記です。",
};

type Row = { label: string; value: string };

/** サービスごとの契約・請求主体 */
const sellers: { heading: string; scope: string; rows: Row[] }[] = [
  {
    heading: "私的整理に関するご相談",
    scope: "時管式私的整理・会社の整理に関するご相談",
    rows: [
      { label: "事業者名", value: site.operator },
      { label: "代表者", value: site.operatorRepresentative },
      { label: "所在地", value: "［所在地］" },
      { label: "電話番号", value: `${site.phone}（受付時間 ${site.phoneHours}）` },
      { label: "メールアドレス", value: site.contactEmail },
    ],
  },
  {
    heading: "上記以外のサービス",
    scope: "仕事紹介、セミナー、AI学習プログラム、業務用AIシステムの提供ほか",
    rows: [
      { label: "事業者名", value: `${site.publisher}（${site.publisherType}）` },
      { label: "代表者", value: site.representative },
      { label: "所在地", value: site.address },
      {
        label: "電話番号",
        value: `${site.phone}（${site.operator}と共通／受付時間 ${site.phoneHours}）`,
      },
      { label: "メールアドレス", value: site.contactEmail },
    ],
  },
];

const commonRows: Row[] = [
  { label: "役務の対価", value: "個別のお見積り・ご案内時に明示します（無料のセミナー等は参加費無料）" },
  { label: "対価以外の必要料金", value: "通信料等はお客様のご負担となります" },
  { label: "支払方法・時期", value: "個別のご契約時にご案内します" },
  { label: "役務の提供時期", value: "個別のご契約時にご案内します" },
  { label: "返品・キャンセル", value: "個別のご契約条件に従います" },
];

function RowsTable({ rows }: { rows: Row[] }) {
  return (
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
  );
}

export default function LegalPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="特定商取引法に基づく表記"
      intro="サービスの内容によって、契約・ご請求の主体が異なります。ご利用のサービスに該当する事業者をご確認ください。"
    >
      <div className="flex flex-col gap-10">
        {sellers.map((s) => (
          <section key={s.heading}>
            <h2 className="text-[1.1rem] font-bold text-ink">{s.heading}</h2>
            <p className="mb-4 mt-1 text-[0.84rem] leading-[1.8] text-muted">{s.scope}</p>
            <RowsTable rows={s.rows} />
          </section>
        ))}

        <section>
          <h2 className="mb-4 text-[1.1rem] font-bold text-ink">共通事項</h2>
          <RowsTable rows={commonRows} />
        </section>
      </div>
      <Prose>
        <p className="mt-8 text-[0.82rem] text-muted">
          ※ 角括弧［　］の項目は、事業者ご自身の情報を記載してください。
        </p>
      </Prose>
    </PageShell>
  );
}
