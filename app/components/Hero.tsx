export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" aria-hidden />
      <div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brand-teal), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="marker-num text-brand-teal uppercase animate-fade-up">
            Tecnología que impulsa negocios
          </p>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-brand-dark animate-fade-up delay-100">
            Hacemos que la{" "}
            <span className="italic text-brand-teal">tecnología</span>{" "}
            trabaje para ti.
            <br />
            <span className="text-brand-gray-500">No al revés.</span>
          </h1>

          <p className="mt-8 lg:mt-10 max-w-2xl text-lg lg:text-xl leading-relaxed text-brand-dark/70 animate-fade-up delay-200">
            Te acompañamos a ordenar, modernizar y hacer crecer tu empresa con herramientas digitales que realmente aportan.{" "}
            <span className="text-brand-dark font-medium">
              Sin complicaciones, sin humo, sin tecnicismos.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up delay-300">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-brand-dark text-white text-base font-medium rounded-full hover:bg-brand-teal transition-all duration-300"
            >
              Conversemos
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-medium text-brand-dark hover:text-brand-teal transition-colors"
            >
              Ver cómo lo hacemos
            </a>
          </div>

          {/* Etiquetas: Modernización · Automatización · IA */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up delay-400">
            <div className="h-px w-12 bg-brand-teal" aria-hidden />
            {["Modernización", "Automatización", "IA"].map((tag, i) => (
              <span
                key={tag}
                className="marker-num uppercase text-brand-dark/60"
              >
                {tag}
                {i < 2 && <span className="ml-8 text-brand-gray-300" aria-hidden>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
