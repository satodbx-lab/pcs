import Link from "next/link";
import { site, styleConditions } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="brand-field absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="cw-reveal">
          <p className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand">
            小さいから、儲かる。
          </p>
          <h1 className="text-[length:var(--text-fluid-h1)] font-bold leading-[1.4] tracking-[0.01em] text-ink">
            会社も雇用も手放して、
            <br className="hidden sm:block" />
            自分の時間で稼ぐ。
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1rem] leading-[1.95] text-muted">
            リモートワークとAI技術の向上により、都会にオフィスを構え、社員を雇用して
            利益を出すスタイルは必要なくなりました。地方にいながら、一人だけで、
            固定費をかけずに、自分の得意な（好きな）仕事を、好きな時間に行う。
            私たちはこの働き方を<strong className="text-ink">「PCSスタイル」</strong>
            （Profitable Coz Small＝小さいから、儲かる）と呼び、
            確立し、実践していくために必要な情報を発信しています。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-sm bg-brand px-6 py-3 text-[0.92rem] font-bold text-brand-contrast transition-colors hover:bg-brand-ink"
            >
              まずは相談する
            </Link>
            <a
              href="#pillars"
              className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-[0.92rem] font-bold text-ink transition-colors hover:bg-surface-2"
            >
              4つの情報を見る
            </a>
          </div>
        </div>

        <div className="cw-reveal rounded-md border border-line bg-surface p-6 sm:p-7" style={{ animationDelay: "0.08s" }}>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
            PCSスタイルの4条件
          </p>
          <ul className="mt-5 flex flex-col gap-5">
            {styleConditions.map((c, i) => (
              <li key={c.title} className="flex gap-3.5">
                <span
                  className="mt-1 h-6 w-6 shrink-0 rounded-full border border-brand text-center font-mono text-[0.8rem] font-medium leading-6 text-brand"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-[0.92rem] leading-[1.85] text-ink">
                  <span className="font-bold">{c.title}</span>
                  <br />
                  <span className="text-muted">{c.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
