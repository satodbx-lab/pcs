import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
};

/**
 * Entrance flourish that is safe at rest: the element is fully visible with no
 * JS, and only plays a short rise on load (disabled under reduced-motion via
 * globals.css). No scroll observer — nothing can get stuck invisible.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={`cw-reveal ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
