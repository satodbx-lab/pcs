import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  alternates: { canonical: "/privacy" },
  description: "個人情報の取り扱いについて定めたプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="プライバシーポリシー"
      intro={`${site.publisher}（以下「当会」）は、本サイトで取得する個人情報を次のとおり取り扱います。`}
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
        <h2>4. アクセス解析（情報の外部送信）</h2>
        {site.gaMeasurementId ? (
          <>
            <p>
              本サイトでは、利用状況の把握とサイトの改善のため、Google LLC が提供する
              アクセス解析ツール「Google アナリティクス（GA4）」を利用しています。
              本サイトの閲覧に伴い、次の情報が Google に送信されます。
            </p>
            <ul>
              <li>閲覧したページのURL、閲覧日時、流入元（参照元URL）</li>
              <li>端末・ブラウザ・OS・言語などの情報、おおよその地域</li>
              <li>Cookie 等のオンライン識別子</li>
              <li>リンクのクリックやフォーム送信完了といった操作の発生（フォームの入力内容は送信されません）</li>
            </ul>
            <p>
              送信先：Google LLC（米国を含む各国のサーバーで処理されます）。
              利用目的：アクセス状況の把握、サイトの改善。
              Google による情報の取扱いについては、
              <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer">
                Google のポリシー
              </a>
              をご確認ください。
            </p>
            <p>
              情報の収集は、ブラウザの Cookie 設定の変更、または
              <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">
                Google アナリティクス オプトアウト アドオン
              </a>
              の利用により停止できます。
            </p>
          </>
        ) : (
          <p>
            本サイトでは、利用状況の把握のためアクセス解析ツールを利用する場合があります。
            取得されるデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        )}
        <h2>5. 開示・訂正・削除</h2>
        <p>
          保有個人データの開示・訂正・利用停止等をご希望の場合は、お問い合わせ窓口までご連絡ください。
        </p>
        <h2>6. お問い合わせ窓口</h2>
        <p>
          {site.publisher}（代表 {site.representative}）
          <br />
          {site.address}
          <br />
          電話：{site.phone}（受付時間 {site.phoneHours}）
          <br />
          メール：{site.contactEmail}
        </p>
        <p className="text-[0.82rem] text-muted">最終改定日：{site.privacyRevised}</p>
      </Prose>
    </PageShell>
  );
}
