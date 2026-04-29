"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  tag: string;
  desc: string;
  src: string;
};

const PROJECTS: Project[] = [
  {
    title: "Surdat",
    tag: "BI ejecutivo",
    desc: "Indicadores y dashboards modulares para la gerencia.",
    src: "/portfolio/surdat.png",
  },
  {
    title: "ProjectHub",
    tag: "Marketplace B2B",
    desc: "Plataforma multi-rol para conectar proveedores y clientes.",
    src: "/portfolio/projecthub.png",
  },
  {
    title: "Plataforma Ganadera",
    tag: "Producción lechera",
    desc: "Métricas de producción y costos del rodeo en tiempo real.",
    src: "/portfolio/plataforma-ganadera.png",
  },
  {
    title: "Monitoreo Climático",
    tag: "Alertas agrícolas",
    desc: "Alertas y recomendaciones para la ventana óptima de operación.",
    src: "/portfolio/monitoreo-climatico.png",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <section
      id="portafolio"
      className="relative py-20 lg:py-24 bg-brand-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="marker-num text-brand-teal uppercase">
            Casos reales
          </p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl tracking-tight text-brand-dark leading-[1.1]">
            Esto es lo que pasa cuando la tecnología{" "}
            <span className="italic text-brand-teal">trabaja para ti.</span>
          </h2>
          <p className="mt-5 text-lg text-brand-dark/70 leading-relaxed">
            Soluciones a la medida de cada empresa, hoy resolviendo lo que antes les quitaba el sueño.
          </p>
        </div>

        <ul className="mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PROJECTS.map((p) => (
            <li key={p.title}>
              <button
                type="button"
                onClick={() => setSelected(p)}
                aria-label={`Ver ${p.title} en detalle`}
                className="group relative w-full text-left overflow-hidden rounded-xl bg-white border border-brand-gray-100 hover:border-brand-teal transition-colors cursor-zoom-in"
              >
                <div className="relative aspect-[16/10] bg-brand-gray-50 overflow-hidden border-b border-brand-gray-100">
                  <Image
                    src={p.src}
                    alt={`Captura de pantalla de ${p.title}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-sm text-brand-dark text-xs font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                      <ExpandIcon />
                      Ver en detalle
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="marker-num text-brand-gray-500 uppercase">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-brand-dark leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-dark/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-brand-dark/85 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-10 w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-brand-dark border border-brand-gray-100 shadow-sm transition-colors"
            >
              <CloseIcon />
            </button>

            <div className="relative bg-brand-gray-50 overflow-auto">
              <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                <Image
                  src={selected.src}
                  alt={`Captura de pantalla de ${selected.title}`}
                  fill
                  sizes="(min-width: 1280px) 1100px, 90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="px-6 sm:px-8 py-5 border-t border-brand-gray-100 bg-white">
              <p className="marker-num text-brand-teal uppercase">
                {selected.tag}
              </p>
              <h3
                id="portfolio-modal-title"
                className="mt-2 font-display text-2xl text-brand-dark leading-tight"
              >
                {selected.title}
              </h3>
              <p className="mt-1 text-brand-dark/70 leading-relaxed">
                {selected.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ExpandIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
