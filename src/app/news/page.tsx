import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";
import { updates } from "@/lib/site";

export const metadata: Metadata = {
  title: "お知らせ一覧",
  description: "更新情報・お知らせの一覧です。",
};

export default function NewsPage() {
  return (
    <PageShell eyebrow="News" title="お知らせ一覧">
      {updates.length === 0 ? (
        <Prose>
          <p>現在お知らせはありません。更新情報はこちらに掲載します。</p>
        </Prose>
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
    </PageShell>
  );
}
