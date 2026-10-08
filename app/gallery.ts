import fs from "node:fs";
import path from "node:path";

export type Photo = { src: string; alt: string };

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

/**
 * Project photos for the home page carousel, read from public/gallery at build time. Files are
 * shown in name order, and the alt text comes from the file name, so name them for what they
 * show: "01-basement-family-room-orem.jpg" becomes "Basement family room orem". Returns [] when
 * the folder is empty or missing, and the carousel is then left off the page.
 */
export function getGalleryPhotos(): Photo[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];
  // basePath is only set when deployed without a custom domain; plain <img> tags don't add it.
  const base = process.env.PAGES_BASE_PATH ?? "";
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => IMAGE_EXT.test(file))
    .sort()
    .map((file) => ({
      src: `${base}/gallery/${encodeURIComponent(file)}`,
      alt: altFromFileName(file),
    }));
}

function altFromFileName(file: string) {
  const words = file
    .replace(IMAGE_EXT, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return words ? words[0].toUpperCase() + words.slice(1) : "Project photo";
}
