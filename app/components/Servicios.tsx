const servicios = [
  {
    num: "01",
    title: "Arquitectura de Datos y Procesos",
    desc: "Estructuramos y optimizamos el flujo de información de su empresa para que los datos dejen de ser ruido y se conviertan en herramientas clave para la toma de decisiones.",
    items: [
      "Diseño de modelos de datos y bodegas",
      "Pipelines ETL/ELT automatizados",
      "Estandarización de procesos de negocio",
      "Gobierno y calidad de datos",
    ],
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Estrategia de Producto Técnico",
    desc: "Actuamos como el puente entre sus necesidades de negocio y la ejecución de software. Diseñamos la hoja de ruta técnica para asegurar que sus proyectos digitales sean escalables y eficientes en costos.",
    items: [
      "Definición de arquitectura de software",
      "Roadmap técnico y priorización",
      "Selección de stack y proveedores",
      "Revisión técnica y due diligence",
    ],
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Optimización Operativa e IA",
    desc: "Implementamos soluciones de automatización y flujos de trabajo inteligentes que reducen la carga operativa, permitiendo que su equipo se enfoque en lo que realmente genera valor.",
    items: [
      "Automatización de procesos y RPA",
      "Integración de LLMs y agentes",
      "Dashboards y alertas en tiempo real",
      "Modelos predictivos y analíticos",
    ],
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-surmetric-teal font-semibold text-xs uppercase tracking-[0.2em]">
            Nuestros servicios
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surmetric-dark leading-tight tracking-tight">
            Consultoría y arquitectura técnica, alineada a su negocio
          </h2>
          <p className="mt-6 text-lg text-surmetric-gray-500 leading-relaxed">
            Tres líneas de especialización diseñadas para convertir la
            inversión tecnológica en un activo competitivo, sostenible y
            escalable.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-xl border border-surmetric-gray-100 bg-white p-8 lg:p-10 shadow-sm transition-all duration-200 hover:border-surmetric-teal hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-surmetric-gray-50 text-surmetric-teal group-hover:bg-surmetric-teal group-hover:text-white transition-colors"
                >
                  {s.icon}
                </span>
                <span className="font-mono text-sm text-surmetric-gray-300 tabular-nums">
                  {s.num}
                </span>
              </div>

              <h3 className="font-display text-xl lg:text-2xl font-semibold text-surmetric-dark mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="text-surmetric-gray-500 leading-relaxed mb-6">
                {s.desc}
              </p>

              <ul className="mt-auto space-y-3 pt-6 border-t border-surmetric-gray-100">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-surmetric-dark"
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5 w-4 h-4 text-surmetric-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
