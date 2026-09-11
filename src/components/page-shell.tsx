import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="relative overflow-hidden border-b border-line">
          <div className="brand-field absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
          <div className="mx-auto max-w-[820px] px-5 py-12 sm:px-8 md:py-16">
            <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand">
              {eyebrow}
            </p>
            <h1 className="text-[length:var(--text-fluid-h2)] font-bold leading-[1.4] text-ink">
              {title}
            </h1>
            {intro ? (
              <p className="mt-4 text-[0.95rem] leading-[1.95] text-muted">{intro}</p>
            ) : null}
          </div>
        </div>
        <div className="mx-auto max-w-[820px] px-5 py-12 sm:px-8 md:py-16">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 text-[0.95rem] leading-[2] text-ink [&_h2]:mt-8 [&_h2]:text-[1.15rem] [&_h2]:font-bold [&_a]:text-brand [&_a:hover]:text-brand-ink [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_li]:pl-4 [&_li]:relative">
      {children}
    </div>
  );
}
