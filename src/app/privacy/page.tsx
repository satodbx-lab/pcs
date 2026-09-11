import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "個人情報の取り扱いについて定めたプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="プライバシーポリシー"
      intro={`${site.operator}（以下「当会」）は、本サイトで取得する個人情報を次のとおり取り扱います。`}
    >
      <Prose>
        <h2>1. 取得する情報</h2>
        <p>
          お問い合わせフォームを通じて、お名前、会社名、メールアドレス、電話番号、
          ご相談内容などをご提供いただく場合があります。
        </p>
        <h2>2. 利用目的</h2>
        <ul>
          <li>お問い合わせ・ご相談への対応のため</li>
          <li>サービスに関するご案内・ご連絡のため</li>
          <li>本サイトの改善および統計的分析のため</li>
        </ul>
        <h2>3. 第三者提供</h2>
        <p>
          法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
        </p>
        <h2>4. アクセス解析</h2>
        <p>
          本サイトでは、利用状況の把握のためアクセス解析ツールを利用する場合があります。
          取得されるデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <h2>5. 開示・訂正・削除</h2>
        <p>
          保有個人データの開示・訂正・利用停止等をご希望の場合は、お問い合わせ窓口までご連絡ください。
        </p>
        <h2>6. お問い合わせ窓口</h2>
        <p>［事業者名・担当部署・連絡先を記載してください］</p>
        <p className="text-[0.82rem] text-muted">
          制定日：［YYYY年M月D日］／ 最終改定日：［YYYY年M月D日］
        </p>
      </Prose>
    </PageShell>
  );
}
