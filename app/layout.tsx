import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Level Craft Construction",
  description:
    "Level Craft Construction — residential and commercial building, remodeling, and renovation done right.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
