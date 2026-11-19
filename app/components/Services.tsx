import Link from "next/link";

type Service = {
  number: string;
  eyebrow?: string;
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  href?: string;
};

const SERVICES: Service[] = [
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
  {
    number: "04",
    eyebrow: "Capacitación · IA aplicada",
    title: "IA para tu equipo",
    desc: "Cursos prácticos para que gerentes y administrativos usen IA en su trabajo diario. Tres niveles, con casos reales de tu empresa.",
    tags: ["Capacitación", "IA", "Equipos"],
    href: "/cursos/ia-para-tu-equipo",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M4 15l16-7 16 7-16 7-16-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 18.5V26c0 2.5 4 4.5 9 4.5s9-2 9-4.5v-7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 15v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="25" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const TOTAL = String(SERVICES.length).padStart(2, "0");

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
            Trabajamos con empresas de distintas industrias —servicios, industria, agro, logística, comercio y operaciones complejas— en todo Chile. Si la tuya está lista para el siguiente paso pero no sabes por dónde empezar, te acompañamos en cuatro frentes.
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
                  {s.number} / {TOTAL}
                </span>
                <div className="text-brand-dark group-hover:text-brand-teal transition-colors duration-500">
                  {s.icon}
                </div>
              </div>

              <div className="md:col-span-6">
                {s.eyebrow && (
                  <p className="marker-num text-brand-teal uppercase mb-3">
                    {s.eyebrow}
                  </p>
                )}
                <h3 className="font-display text-3xl lg:text-4xl text-brand-dark leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-brand-dark/70 leading-relaxed text-lg">
                  {s.desc}
                </p>
                {s.href && (
                  <Link
                    href={s.href}
                    aria-label={`Ver en detalle: ${s.title}`}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white text-sm font-medium rounded-full hover:bg-brand-teal transition-all duration-300 hover:gap-3"
                  >
                    Ver en detalle
                    <span aria-hidden>→</span>
                  </Link>
                )}
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

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
