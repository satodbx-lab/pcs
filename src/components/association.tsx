import Link from "next/link";
import { site } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { Mark } from "@/components/mark";

export function Association() {
  return (
    <section id="association" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead eyebrow="Operator" title="運営者について" />

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-md border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Mark className="mt-1 h-9 w-9 shrink-0 text-brand" />
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  本サイトの運営
                </p>
                <p className="mt-1 text-[1.05rem] font-bold text-ink">
                  {site.publisher}
                </p>
                <p className="text-[0.86rem] text-muted">代表 {site.representative}</p>
                <p className="mt-3 text-[0.9rem] leading-[1.95] text-muted">
                  地方・一人・低固定費で働く「PCSスタイル」を確立・実践するための情報発信、
                  仕事紹介、AI活用セミナー・学習プログラム、業務用AIシステムの提供を行っています。
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-md border border-line bg-surface p-6 sm:p-8" delay={0.06}>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
              私的整理のご相談
            </p>
            <p className="mt-1 text-[1.05rem] font-bold text-ink">{site.operator}</p>
            <p className="text-[0.86rem] text-muted">{site.operatorRepresentative}</p>
            <p className="mt-3 text-[0.9rem] leading-[1.95] text-muted">
              中小企業の倒産回避を支援する一般社団法人です。時管式私的整理の知見をもとに、
              払えなくなった負債の処理と代表者の個人資産の保全をサポートしています。
              本サイトの「今の会社を整理する」の情報は、この知見にもとづきます。
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.86rem] font-medium">
          <Link href="/about/pcs" className="text-brand hover:text-brand-ink">
            PCSとは →
          </Link>
          <Link href="/about/profile" className="text-brand hover:text-brand-ink">
            運営者・執筆者プロフィール →
          </Link>
          <Link href="/legal" className="text-brand hover:text-brand-ink">
            特定商取引法に基づく表記 →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
