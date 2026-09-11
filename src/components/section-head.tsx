import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-9 max-w-[42rem] ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand">
        {eyebrow}
      </p>
      <h2 className="text-[length:var(--text-fluid-h2)] font-bold tracking-[0.01em] text-ink">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-[0.98rem] leading-[1.9] text-muted">{lead}</p>
      ) : null}
    </Reveal>
  );
}
