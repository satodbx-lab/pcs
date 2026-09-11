import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Prose } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "「小さいから儲かる仕事研究会」の目的と運営体制についてご案内します。",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="このサイトについて"
      intro={`「${site.name}」は、${site.operator}が運営する情報発信メディアです。`}
    >
      <Prose>
        <p>
          都会にオフィスを構え、社員を雇用して利益を出す――その前提は、リモートワークと
          AI技術の向上によって変わりました。地方で、一人だけで、固定費をかけずに、
          自分の得意な（好きな）仕事を、好きな時間に行う「PCSスタイル」
          （{site.styleName}＝小さいから、儲かる）を確立・実践するための
          情報を発信することが、このサイトの目的です。
        </p>
        <p>
          具体的には、仕事の適性の見極め方、儲からない今の会社の整理方法、
          すぐに収入が必要な方への仕事紹介、法人を使った資金調達方法という
          4つの情報をまとめています。
        </p>
        <h2>関連ページ</h2>
        <ul>
          <li>
            <Link href="/about/pcs">PCSとは</Link>
          </li>
          <li>
            <Link href="/about/profile">運営者・執筆者プロフィール</Link>
          </li>
          <li>
            <Link href="/links">お役立ちリンク集</Link>
          </li>
        </ul>
        <p className="text-[0.82rem] text-muted">
          ※ 各ページの詳細な内容は順次拡充しています。
        </p>
      </Prose>
    </PageShell>
  );
}
