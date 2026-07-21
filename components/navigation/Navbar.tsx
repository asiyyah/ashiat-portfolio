"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Playground", href: "/playground" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" className="heading">
          Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#"
            className="font-mono text-[11px] tracking-[1.5px] uppercase font-semibold bg-accent text-accent-foreground px-[18px] h-11 inline-flex items-center rounded cursor-pointer transition-opacity hover:opacity-90"
          >
            VIEW RESUME
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col items-center justify-center gap-8 h-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`text-lg transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
          <a
            href="#"
            onClick={closeMobile}
            className="font-mono text-[11px] tracking-[1.5px] uppercase font-semibold bg-accent text-accent-foreground px-[18px] h-11 inline-flex items-center rounded cursor-pointer transition-opacity hover:opacity-90"
          >
            VIEW RESUME
          </a>
        </div>
      </div>
    </header>
  );
}
