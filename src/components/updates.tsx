import Link from "next/link";
import { updates } from "@/lib/site";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";

export function Updates() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHead eyebrow="News" title="最近のお知らせ" />

        <Reveal>
          {updates.length === 0 ? (
            <p className="rounded-md border border-dashed border-line bg-ground p-6 text-[0.9rem] text-muted">
              現在お知らせはありません。更新情報はこちらに掲載します。
            </p>
          ) : (
            <ul className="divide-y divide-line rounded-md border border-line">
              {updates.map((u, i) => (
                <li key={i} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 p-4">
                  <time className="font-mono text-[0.8rem] tabular-nums text-muted">{u.date}</time>
                  <span className="rounded-sm border border-line px-2 py-0.5 text-[0.72rem] text-muted">
                    {u.category}
                  </span>
                  <span className="text-[0.92rem] text-ink">{u.title}</span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal className="mt-6">
          <Link href="/news" className="text-[0.88rem] font-bold text-brand hover:text-brand-ink">
            お知らせ一覧 →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
