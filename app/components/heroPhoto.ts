import type { CSSProperties } from "react";

export type HeroPhoto = {
  /** Path under public/, e.g. "/images/tool-belt-level.webp". Decorative, so no alt text. */
  src: string;
  /** Blur slightly to hide pixelation in small source images. */
  soft?: boolean;
};

/**
 * Props for a page header with a background photo under a dark overlay (styled by
 * `.has-photo` in globals.css). The photo is passed as a CSS variable so the overlay
 * and blur can live in a pseudo-element.
 */
export function heroPhotoProps(photo: HeroPhoto | undefined, className: string) {
  if (!photo) return { className };
  // CSS url() doesn't get the basePath automatically (only set without a custom domain).
  const base = process.env.PAGES_BASE_PATH ?? "";
  return {
    className: `${className} has-photo${photo.soft ? " photo-soft" : ""}`,
    style: { "--hero-photo": `url("${base}${photo.src}")` } as CSSProperties,
  };
}
