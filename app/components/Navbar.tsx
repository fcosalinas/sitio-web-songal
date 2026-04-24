"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#propuesta", label: "Propuesta" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-surmetric-gray-100 shadow-sm"
          : "bg-white/80 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="Surmetric SpA — inicio"
          >
            <Image
              src="/logo-lockup-full.png"
              alt="Surmetric SpA"
              width={160}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-surmetric-dark hover:text-surmetric-teal transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 inline-flex items-center px-5 py-2 rounded-md bg-surmetric-teal text-white text-sm font-semibold hover:bg-surmetric-teal-dark transition-colors focus:outline-none focus:ring-2 focus:ring-surmetric-teal focus:ring-offset-2"
            >
              Conversemos
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-surmetric-dark hover:text-surmetric-teal transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-surmetric-gray-100 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-surmetric-dark hover:text-surmetric-teal py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-2 rounded-md bg-surmetric-teal text-white text-sm font-semibold text-center hover:bg-surmetric-teal-dark transition-colors"
            >
              Conversemos
            </a>
          </div>
        )}
      </div>
      {/* Línea corporativa turquesa */}
      <div className="h-[2px] bg-surmetric-teal" aria-hidden />
    </header>
  );
}
