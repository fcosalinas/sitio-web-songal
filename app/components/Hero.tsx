export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-16 bg-surmetric-dark text-white overflow-hidden"
    >
      {/* Grid corporativo de fondo (sutil) */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="surmetric-grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#surmetric-grid)" />
        </svg>
      </div>

      {/* Halo turquesa (acento corporativo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, #00968E, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-surmetric-teal/40 bg-surmetric-teal/10 text-surmetric-teal-light text-xs font-semibold tracking-[0.18em] uppercase">
          Ingeniería en Estrategia Tecnológica
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
          Transformamos la{" "}
          <span className="relative inline-block">
            complejidad tecnológica
            <span
              aria-hidden
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-surmetric-teal"
            />
          </span>{" "}
          en claridad estratégica
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-surmetric-gray-300 max-w-3xl mx-auto leading-relaxed">
          Firma especializada en diseñar la arquitectura lógica y técnica para
          que las organizaciones den el salto hacia la industria 4.0 con
          seguridad, eficiencia y visión de largo plazo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-surmetric-teal text-white font-semibold hover:bg-surmetric-teal-dark transition-colors focus:outline-none focus:ring-2 focus:ring-surmetric-teal focus:ring-offset-2 focus:ring-offset-surmetric-dark shadow-lg"
          >
            Construyamos el futuro
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-colors"
          >
            Ver servicios
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-surmetric-gray-500">
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="w-1.5 h-1.5 rounded-full bg-surmetric-teal"
            />
            Arquitectura de datos
          </span>
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="w-1.5 h-1.5 rounded-full bg-surmetric-teal"
            />
            Estrategia de producto técnico
          </span>
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="w-1.5 h-1.5 rounded-full bg-surmetric-teal"
            />
            Optimización operativa · IA
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60"
        aria-hidden
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
