import type { Metadata } from "next";
import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { PageShell, Prose } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "PCSとは",
  description:
    "地方・一人・低固定費で働く「PCSスタイル」の考え方と、確立・実践のための4つの情報について。",
};

export default function PcsPage() {
  return (
    <PageShell
      eyebrow="About / PCS"
      title="PCSとは"
      intro="都会にオフィスを構え、社員を雇用して利益を出す――その前提が、リモートワークとAI技術の向上によって変わりました。地方で、一人だけで、固定費をかけずに、自分の得意な（好きな）仕事を、自分の好きな時間に行う。私たちはこの働き方を「PCSスタイル」と呼んでいます。"
    >
      <Prose>
        <h2>「PCS」がもつ、2つの意味</h2>
        <p>
          当サイトでは「PCS」を2つの意味で使っています。混同しやすいため、ここで整理します。
        </p>
        <ul>
          <li>
            <strong>{site.styleName}</strong>（小さいから、儲かる）―― サイト全体を貫く働き方の名称。
            地方・一人・低固定費で、自分の得意なことを好きな時間に行う「PCSスタイル」そのものを指します。
          </li>
          <li>
            <strong>{site.serviceName}</strong> ―― {site.operator}の私的整理の仕組みの名称。
            下記「今の会社を整理する」で扱う、資産保全のための具体的な制度を指します。
          </li>
        </ul>

        <h2>PCSスタイルを確立・実践するための4つの情報</h2>
        <p>本サイトでは、次の4つを順に扱っています。</p>
        <ul>
          {pillars.map((p) => (
            <li key={p.n}>
              <Link href={`/${p.href}`}>
                {p.n}　{p.title}
              </Link>
              　――　{p.body}
            </li>
          ))}
        </ul>

        <h2>{site.serviceName} について</h2>
        <p>
          4つの情報のうち「今の会社を整理する」の部分は、{site.operator}の知見をもとにした
          時管式私的整理の仕組み――{site.serviceName}――によって支えられています。
          法的整理（破産）では代表者個人の資産（自宅）を手放すことになりがちですが、
          私的整理であれば会社も自宅も残せる可能性があります。
        </p>
        <p className="text-[0.82rem] text-muted">
          ※ 手続きの選択や実施可否は個別事情により異なります。詳しくは
          <Link href="/contact">お問い合わせ</Link>ください。
        </p>
      </Prose>
    </PageShell>
  );
}
