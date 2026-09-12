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
      <div className="mx-auto flex min-h-16 max-w-[1120px] items-center gap-3 px-5 py-3 sm:px-8">
        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-line text-muted lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>

        <Link href="/" className="flex min-w-0 items-center gap-2 self-stretch py-1.5 text-ink sm:gap-3 lg:shrink-0 lg:self-auto lg:py-0">
          <Mark className="h-7 w-7 shrink-0 text-brand sm:h-9 sm:w-9 lg:h-11 lg:w-11" />
          <span className="flex min-w-0 flex-col justify-center leading-[1.25] sm:leading-tight">
            <span className="text-balance font-display text-[0.88rem] font-bold leading-[1.2] tracking-[0.01em] sm:truncate sm:leading-tight sm:text-[1.4rem] lg:text-[1.96rem]">
              {site.name}
            </span>
            <span className="truncate font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted sm:text-[0.6rem] sm:tracking-[0.2em]">
              副業・資金調達案内
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

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-sm bg-brand px-4 py-2.5 text-[0.86rem] font-bold text-brand-contrast transition-colors hover:bg-brand-ink sm:inline-flex"
          >
            相談する
          </Link>
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
