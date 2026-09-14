import Link from "next/link";
import { announcement } from "@/lib/site";

export function AnnouncementBar() {
  if (!announcement.active) return null;

  const linkProps = announcement.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="brand-field text-brand-contrast">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2.5 text-center text-[0.82rem] sm:px-8">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand-contrast/70">
          {announcement.eyebrow}
        </span>
        <span className="font-bold">{announcement.text}</span>
        <span className="hidden text-brand-contrast/85 sm:inline">{announcement.detail}</span>
        <Link
          href={announcement.href}
          {...linkProps}
          className="font-bold underline underline-offset-2 hover:opacity-90"
        >
          {announcement.cta}
        </Link>
      </div>
    </div>
  );
}
