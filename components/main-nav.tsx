"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "classnames";

const links = [
  { href: "/", label: "Prologue" },
  { href: "/thesis", label: "Thesis" },
  { href: "/work", label: "Work" },
  { href: "/method", label: "Method" },
  { href: "/about", label: "Epilogue" },
  { href: "/notes", label: "Notes" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-8">
      <Link href="/" className="text-sm uppercase tracking-[0.3em] text-night/60">
        Samreshan Sahani
      </Link>
      <div className="hidden gap-6 text-sm text-night/60 md:flex">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx("transition-colors duration-200", isActive ? "text-night" : "hover:text-night")}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <Link
        href="#contact"
        className={clsx(
          "hidden rounded-full border border-night/10 px-4 py-2 text-sm uppercase tracking-wide text-night/70",
          "transition-colors duration-200 hover:border-night/40 hover:text-night md:inline-flex"
        )}
      >
        Start a project
      </Link>
    </nav>
  );
}
