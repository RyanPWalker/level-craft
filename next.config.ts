import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo-name>. The deploy workflow sets
// NEXT_PUBLIC_BASE_PATH; leave it empty for local dev or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
