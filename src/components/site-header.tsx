"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Mark } from "@/components/mark";

const menu = [
  { href: "/#style", label: "PCSスタイルとは" },
  { href: "/#pillars", label: "4つの情報" },
  { href: "/#ventures", label: "仕事紹介" },
  { href: "/#funding", label: "資金調達" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ground/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-[1120px] items-center gap-5 px-5 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-ink">
          <Mark className="h-9 w-9 shrink-0 text-brand sm:h-11 sm:w-11" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[1.5rem] font-bold tracking-[0.02em] sm:text-[1.96rem]">
              {site.name}
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              {site.shortName} — {site.styleName}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {menu.map((m) => (
            <a
              key={m.href}
              href={m.href}
              className="text-[0.86rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {m.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-sm bg-brand px-4 py-2.5 text-[0.86rem] font-bold text-brand-contrast transition-colors hover:bg-brand-ink sm:inline-flex"
          >
            相談する
          </Link>
          <button
            type="button"
            aria-label="メニュー"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-sm border border-line text-muted lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="mx-auto flex max-w-[1120px] flex-col px-5 py-1 sm:px-8">
              {menu.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-[0.9rem] font-medium text-muted"
                >
                  {m.label}
                </a>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-3 text-[0.9rem] font-bold text-brand"
              >
                相談する →
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
