"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#propuesta", label: "Propuesta" },
  { href: "#servicios", label: "Servicios" },
  { href: "#diferenciadores", label: "Por qué nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-brand-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center" aria-label="Surmetric — Inicio">
            <Image
              src="/logo-lockup-full.png"
              alt="Surmetric"
              width={180}
              height={42}
              className="h-8 lg:h-9 w-auto"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brand-dark/80 hover:text-brand-teal transition-colors link-underline"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white text-sm font-medium rounded-full hover:bg-brand-teal transition-all duration-300 hover:gap-3"
            >
              Conversemos
              <span aria-hidden>→</span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-brand-gray-100 transition"
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M3 6h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-2 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-gray-50 rounded-lg transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-3 py-3 text-base font-medium bg-brand-dark text-white rounded-lg text-center"
              >
                Conversemos →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
