"use client";

import { useEffect } from "react";

const KEY = "lc-lead-source";

export type LeadSource = { source: string; landingPage: string };

/**
 * Remembers how a visitor first arrived during this browser session (a utm_source tag such as
 * the one on our QR codes, another site that linked here, or "direct"), so the contact form can
 * pass it along with the estimate request. Uses sessionStorage only; no cookies.
 */
export default function LeadSourceTracker() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      const params = new URLSearchParams(window.location.search);
      const utm = ["utm_source", "utm_medium", "utm_campaign"]
        .map((name) => params.get(name))
        .filter(Boolean)
        .join(" / ");
      let referrer = "";
      if (document.referrer) {
        const host = new URL(document.referrer).host;
        if (host !== window.location.host) referrer = host;
      }
      const value: LeadSource = {
        source: utm || referrer || "direct",
        landingPage: window.location.pathname,
      };
      sessionStorage.setItem(KEY, JSON.stringify(value));
    } catch {
      // Storage can be unavailable (private mode, blocked site data). Tracking is optional.
    }
  }, []);
  return null;
}

export function readLeadSource(): LeadSource | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as LeadSource) : null;
  } catch {
    return null;
  }
}
