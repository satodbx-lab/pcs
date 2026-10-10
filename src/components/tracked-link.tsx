"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/track";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, string | number>;
};

/** クリックを GA4 のイベントとして計測するリンク。 */
export function TrackedLink({ eventName, eventParams, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(eventName, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
