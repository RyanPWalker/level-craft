"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicePages } from "../site";

export default function NavLinks() {
  // usePathname excludes basePath; with trailingSlash it may end in "/".
  const pathname = usePathname().replace(/\/$/, "");

  return (
    <nav className="nav-links" aria-label="Main">
      {servicePages.map((page) => (
        <Link key={page.href} href={page.href} aria-current={pathname === page.href ? "page" : undefined}>
          {page.navLabel}
        </Link>
      ))}
    </nav>
  );
}
