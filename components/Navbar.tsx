"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { NAV, type NavNode } from "@/lib/nav-data";

function pathFor(trail: string[]) {
  const segments = trail.filter(Boolean);
  return "/" + segments.join("/");
}

function SimpleDropdown({ item, trail }: { item: NavNode; trail: string[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const myTrail = [...trail, item.slug];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
      >
        {item.label}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-2xl bg-white p-2 shadow-card">
          <Link
            href={pathFor(myTrail)}
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2 text-sm font-semibold text-xoopah-blue hover:bg-xoopah-light-blue/50"
          >
            {item.label} overview
          </Link>
          <div className="my-1 h-px bg-black/5" />
          {item.children?.map((child) => (
            <Link
              key={child.slug}
              href={pathFor([...myTrail, child.slug])}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2 text-sm text-black/70 hover:bg-xoopah-light-blue/50 hover:text-black"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  if (pathname === "/login") return null;

  async function handleSignOut() {
    setSigningOut(true);
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="xoopah-wave-band sticky top-0 z-50">
      <div className="xoopah-wave-texture" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="shrink-0 text-xl font-extrabold tracking-tight text-white">
          xoopah <span className="font-normal opacity-80">/ os</span>
        </Link>

        <nav className="flex flex-1 flex-wrap items-center justify-center gap-1 px-4">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              pathname === "/" ? "bg-white text-xoopah-blue" : "text-white/85 hover:text-white"
            }`}
          >
            Home
          </Link>

          {NAV.filter((n) => n.slug).map((item) =>
            item.children ? (
              <SimpleDropdown key={item.slug} item={item} trail={[]} />
            ) : (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  pathname === `/${item.slug}` ? "bg-white text-xoopah-blue" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          onClick={handleSignOut}
          disabled={signingOut}
          className="shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20 disabled:opacity-60"
        >
          {signingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </header>
  );
}
