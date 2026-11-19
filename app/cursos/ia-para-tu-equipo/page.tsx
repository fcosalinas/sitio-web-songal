import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import WhatsAppFloating from "../../components/WhatsAppFloating";

const PAGE_URL = "https://surmetric.cl/cursos/ia-para-tu-equipo";
const TITLE = "IA para tu equipo · Capacitación en IA aplicada | Surmetric";
const DESCRIPTION =
  "Cursos prácticos para que gerentes y administrativos usen IA en su trabajo diario. Tres niveles, con casos reales de tu empresa.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "es_CL",
    siteName: "Surmetric",
  },
};

const LEVELS = [
  {
    number: "01",
    title: "Usuario Productivo",
    desc: "Ganar tiempo en las tareas de todos los días.",
  },
  {
    number: "02",
    title: "Usuario Estratégico",
    desc: "Usar la IA para analizar, planificar y decidir.",
  },
  {
    number: "03",
    title: "Integrador Profesional",
    desc: "Conectar la IA con los procesos y sistemas de tu empresa.",
  },
];

export default function IaParaTuEquipoPage() {
  return (
    <>
      <Header />
      <main>
        <article className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <nav aria-label="Ruta de navegación">
              <Link
                href="/#servicios"
                className="text-sm font-medium text-brand-dark/70 hover:text-brand-teal transition-colors link-underline"
              >
                <span aria-hidden>←</span> Volver a servicios
              </Link>
            </nav>

            <p className="mt-10 marker-num text-brand-teal uppercase">
              Capacitación · IA aplicada
            </p>
            <h1 className="mt-4 font-display text-4xl lg:text-5xl xl:text-6xl tracking-tight text-brand-dark leading-[1.05]">
              IA para tu equipo
            </h1>
            <p className="mt-8 font-display text-2xl lg:text-3xl text-brand-dark leading-snug">
              Cada vez más personas usan IA en su trabajo diario. Si todavía no
              encuentras cómo hacerlo tú,{" "}
              <span className="italic text-brand-teal">te acompañamos.</span>
            </p>

            <div className="mt-10 space-y-6 text-lg text-brand-dark/70 leading-relaxed">
              <p>
                Diseñamos cursos prácticos para dueños, gerentes y equipos
                administrativos que quieren dejar de mirar la IA de lejos y
                empezar a usarla en su trabajo real: reportes, correos,
                planillas, análisis y decisiones.
              </p>
              <p>
                Trabajamos con casos de tu propia empresa, no con ejemplos de
                manual. Cada sesión termina con algo que puedes aplicar al día
                siguiente.
              </p>
            </div>

            <section aria-labelledby="niveles" className="mt-16 lg:mt-20">
              <h2
                id="niveles"
                className="font-display text-3xl lg:text-4xl tracking-tight text-brand-dark leading-tight"
              >
                Tres niveles, según dónde estés
              </h2>
              <ol className="mt-8">
                {LEVELS.map((l) => (
                  <li
                    key={l.number}
                    className="group grid sm:grid-cols-12 gap-3 sm:gap-6 py-8 border-t border-brand-gray-100 hover:border-brand-teal transition-colors"
                  >
                    <span className="sm:col-span-2 marker-num text-brand-gray-500 pt-2">
                      {l.number} / 03
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="font-display text-2xl text-brand-dark leading-tight group-hover:text-brand-teal transition-colors">
                        {l.title}
                      </h3>
                      <p className="mt-2 text-brand-dark/70 leading-relaxed text-lg">
                        {l.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-12 space-y-6 text-lg text-brand-dark/70 leading-relaxed">
              <p>
                Clases presenciales o remotas, para equipos de cualquier rubro:
                servicios, industria, agro, comercio y operaciones.
              </p>
            </div>

            <p className="mt-12 py-8 border-y border-brand-gray-100 font-display text-2xl lg:text-3xl text-brand-dark leading-snug">
              Sin tecnicismos. Sin humo.{" "}
              <span className="italic text-brand-teal">
                Te acompañamos hasta que lo uses.
              </span>
            </p>

            <p className="mt-12 text-lg text-brand-dark/70 leading-relaxed">
              Eliminamos el trabajo repetitivo que consume horas a tu equipo
              cada semana. Con IA y automatizaciones, tu gente se enfoca en lo
              que realmente genera valor. Además, capacitamos a tu equipo para
              que use la IA por su cuenta, con casos reales de tu operación.
            </p>
          </div>
        </article>

        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
