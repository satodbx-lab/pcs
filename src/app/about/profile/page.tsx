import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者・執筆者プロフィール",
  alternates: { canonical: "/about/profile" },
  description: "本サイトの運営者・執筆者についてご案内します。",
};

export default function ProfilePage() {
  return (
    <PageShell eyebrow="About / Profile" title="運営者・執筆者プロフィール">
      <Prose>
        <h2>運営</h2>
        <p>
          {site.publisher}　代表 {site.representative}
          <br />
          {site.address}
        </p>
        <p>
          私的整理（時管式）の知見は、{site.operator}の知見をもとにしています。
          負債の処理・個人資産の保全から、PCSスタイルへの移行までを一貫して支援しています。
        </p>
        <h2>執筆</h2>
        <p>{site.writer}</p>
        <p>
          運営事務局の担当者として、経営・財務・資金調達・PCSスタイルの現場知見をもとに
          記事を執筆しています。詳細なプロフィールは準備中です。
        </p>
      </Prose>
    </PageShell>
  );
}
