import Link from "next/link";
import { categories, disclaimerShort, footerLinks, site } from "@/lib/site";
import { Mark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="bg-ground">
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-ink">
              <Mark className="h-7 w-7 text-brand" />
              <span className="font-display text-[0.98rem] font-bold">{site.name}</span>
            </div>
            <p className="mt-4 max-w-[24rem] text-[0.82rem] leading-[1.9] text-muted">
              {site.tagline}
            </p>
            <p className="mt-4 text-[0.8rem] text-muted">運営：{site.operator}</p>
          </div>

          <nav aria-label="規約・お問い合わせ">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
              About
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[0.85rem]">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="カテゴリー">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
              Category
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[0.85rem]">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-muted transition-colors hover:text-ink">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-[0.74rem] leading-[1.85] text-muted">{disclaimerShort}</p>
          <p className="mt-4 font-mono text-[0.72rem] text-muted">
            © {new Date().getFullYear()} {site.name} ・ {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
