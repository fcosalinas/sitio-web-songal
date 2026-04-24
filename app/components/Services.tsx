const SERVICES = [
  {
    number: "01",
    title: "Ordenamos tu información",
    desc: "Transformamos planillas desordenadas, sistemas desconectados y reportes confusos en una vista clara de tu negocio. Para que tomes decisiones con datos, no con corazonadas.",
    tags: ["Reportes", "Dashboards", "Datos"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="6" y="8" width="28" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="17" width="28" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="26" width="28" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="1" fill="currentColor" />
        <circle cx="11" cy="20" r="1" fill="currentColor" />
        <circle cx="11" cy="29" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Modernizamos tu operación",
    desc: "Diseñamos y acompañamos la creación de software a la medida que tu equipo sí va a usar. Sin proyectos eternos ni sorpresas de costo, enfocados en lo que te hace crecer.",
    tags: ["Software", "Digitalización", "Plataformas"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="5" y="9" width="30" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 14h30" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 21l3 3-3 3M22 27h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Automatizamos con IA",
    desc: "Eliminamos el trabajo repetitivo que consume horas a tu equipo cada semana. Con IA y automatizaciones, tu gente se enfoca en lo que realmente genera valor.",
    tags: ["IA", "Automatización", "Eficiencia"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M20 6v4M20 30v4M6 20h4M30 20h4M10.4 10.4l2.8 2.8M26.8 26.8l2.8 2.8M10.4 29.6l2.8-2.8M26.8 13.2l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="marker-num text-brand-teal uppercase">
            En qué te ayudamos
          </p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl xl:text-6xl tracking-tight text-brand-dark leading-[1.05]">
            Soluciones simples para problemas que{" "}
            <span className="italic text-brand-teal">te quitan el sueño.</span>
          </h2>
          <p className="mt-6 text-lg text-brand-dark/70 leading-relaxed">
            Si sientes que tu empresa está lista para el siguiente paso pero no sabes por dónde empezar, estás en el lugar correcto. Te acompañamos en tres frentes.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 space-y-3">
          {SERVICES.map((s) => (
            <article
              key={s.number}
              className="group relative grid md:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-t border-brand-gray-100 hover:border-brand-teal transition-colors"
            >
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                <span className="marker-num text-brand-gray-500">
                  {s.number} / 03
                </span>
                <div className="text-brand-dark group-hover:text-brand-teal transition-colors duration-500">
                  {s.icon}
                </div>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-display text-3xl lg:text-4xl text-brand-dark leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-brand-dark/70 leading-relaxed text-lg">
                  {s.desc}
                </p>
              </div>

              <div className="md:col-span-3 flex md:justify-end">
                <ul className="flex flex-wrap md:flex-col gap-2 md:gap-1.5 md:items-end">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="text-sm font-medium text-brand-dark/60 px-3 py-1 rounded-full border border-brand-gray-100 bg-white"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indicador a la derecha */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-gray-300 group-hover:text-brand-teal group-hover:translate-x-1 transition-all duration-500 hidden lg:block"
                aria-hidden
              >
                →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
