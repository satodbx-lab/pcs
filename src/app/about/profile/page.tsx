import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者・執筆者プロフィール",
  description: "本サイトの運営者・執筆者についてご案内します。",
};

export default function ProfilePage() {
  return (
    <PageShell eyebrow="About / Profile" title="運営者・執筆者プロフィール">
      <Prose>
        <h2>運営</h2>
        <p>{site.operator}</p>
        <p>
          中小企業の倒産回避を支援する一般社団法人として、私的整理の知見をもとに、
          負債の処理・個人資産の保全・再スタートまでを一貫して支援しています。
        </p>
        <h2>執筆</h2>
        <p>{site.writer}</p>
        <p>
          当協会の実務担当者として、経営・財務・資金調達・PCSスタイルの現場知見をもとに
          記事を執筆しています。詳細なプロフィールは準備中です。
        </p>
      </Prose>
    </PageShell>
  );
}
