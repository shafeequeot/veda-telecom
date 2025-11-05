"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled
          ? "bg-white border-slate-200/80 shadow-md backdrop-blur-sm"
          : "bg-white border-slate-100"
      }`}
    >
      <div className="container-px mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            
            <Image src="/Veda logo-02.svg" alt="Veda Telecom FZCO" width={172} height={52} />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span>≡</span>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-sky-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


