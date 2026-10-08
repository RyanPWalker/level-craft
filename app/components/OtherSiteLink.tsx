"use client";

import { useEffect, useState } from "react";

/**
 * On the 404 page, links to the same path on our other site, in case the visitor mixed up the
 * two domains. Rendered after mount because the missing path is only known in the browser.
 */
export default function OtherSiteLink({ origin, className }: { origin: string; className?: string }) {
  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    setHref(origin + window.location.pathname + window.location.search);
  }, [origin]);

  if (!href) return null;
  const host = new URL(origin).host;
  return (
    <p className={className}>
      Looking for something from our other site? Try{" "}
      <a href={href} rel="noopener">
        {host}
        {href.slice(origin.length) === "/" ? "" : href.slice(origin.length)}
      </a>
      .
    </p>
  );
}
