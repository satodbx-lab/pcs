import Link from "next/link";
import { site } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { Mark } from "@/components/mark";

export function Association() {
  return (
    <section id="association" className="border-b border-line">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead eyebrow="Operator" title="運営団体について" />

        <Reveal className="rounded-md border border-line bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Mark className="mt-1 h-9 w-9 shrink-0 text-brand" />
            <div>
              <p className="text-[1.05rem] font-bold text-ink">{site.operator}</p>
              <p className="mt-3 max-w-[40rem] text-[0.92rem] leading-[1.95] text-muted">
                中小企業の倒産回避を支援する一般社団法人です。時管式私的整理の知見をもとに、
                払えなくなった負債の処理と代表者の個人資産の保全をサポートしています。
                当サイト「小さいから儲かる仕事研究会」は、その知見を土台に、
                地方・一人・低固定費で働く「PCSスタイル」を確立・実践するための情報を発信しています。
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.86rem] font-medium">
                <Link href="/about/pcs" className="text-brand hover:text-brand-ink">
                  PCSとは →
                </Link>
                <Link href="/about/profile" className="text-brand hover:text-brand-ink">
                  運営者・執筆者プロフィール →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
