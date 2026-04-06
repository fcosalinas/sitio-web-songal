export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-sm font-medium tracking-wide uppercase">
          Región de los Ríos, Chile
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Tecnología de punta para las empresas del{" "}
          <span className="text-yellow-300">sur de Chile</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Cerramos la brecha digital de las PYMEs locales con consultoría estratégica,
          desarrollo digital, Big Data e Inteligencia Artificial — con el sello de
          cercanía y compromiso territorial que nos define.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-xl bg-yellow-400 text-blue-950 font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
          >
            Conversemos
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
