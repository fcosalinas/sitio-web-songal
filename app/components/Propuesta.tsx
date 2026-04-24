const pilares = [
  {
    title: "Precisión Técnica",
    desc: "Aplicamos estándares de alta ingeniería en cada solución. Cada decisión técnica está sustentada en métricas, mejores prácticas y criterios de calidad exigentes.",
    icon: (
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
          strokeWidth={1.75}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Visión Estratégica",
    desc: "Alineamos cada implementación tecnológica con los objetivos de negocio de su organización. La tecnología no es un fin, sino el motor de su rentabilidad.",
    icon: (
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
          strokeWidth={1.75}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    title: "Agilidad Regional",
    desc: "Combinamos la sofisticación de las grandes industrias con la cercanía y el conocimiento del entorno local del sur de Chile. Respuesta rápida, decisiones informadas.",
    icon: (
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
          strokeWidth={1.75}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export default function Propuesta() {
  return (
    <section
      id="propuesta"
      className="py-24 sm:py-32 bg-surmetric-gray-50 border-y border-surmetric-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-surmetric-teal font-semibold text-xs uppercase tracking-[0.2em]">
            Propuesta de valor
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surmetric-dark leading-tight tracking-tight">
            Tres pilares que sostienen cada proyecto
          </h2>
          <p className="mt-6 text-lg text-surmetric-gray-500 leading-relaxed">
            Entendemos que la tecnología no es un fin, sino el motor de su
            rentabilidad. Nuestra propuesta se basa en tres pilares
            fundamentales.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {pilares.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-xl bg-white border border-surmetric-gray-100 p-8 lg:p-10 transition-all duration-200 hover:border-surmetric-teal hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  aria-hidden
                  className="flex items-center justify-center w-12 h-12 rounded-md bg-surmetric-teal-light text-surmetric-teal group-hover:bg-surmetric-teal group-hover:text-white transition-colors"
                >
                  {p.icon}
                </span>
                <span className="font-mono text-xs text-surmetric-gray-500 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-surmetric-dark mb-3">
                {p.title}
              </h3>
              <p className="text-surmetric-gray-500 leading-relaxed">
                {p.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Compromiso con la eficiencia */}
        <div className="mt-16 lg:mt-20 relative rounded-xl bg-surmetric-dark text-white p-8 sm:p-10 lg:p-12 overflow-hidden">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-surmetric-teal/15 blur-3xl"
          />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-surmetric-teal text-white flex-shrink-0"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                Compromiso con la eficiencia
              </h3>
              <p className="mt-4 text-surmetric-gray-300 leading-relaxed text-[1.05rem]">
                Creemos en la tecnología que simplifica la vida. Nuestro enfoque
                metodológico prioriza la optimización de recursos y la
                sostenibilidad, asegurando que la evolución digital de su
                empresa sea constante y sin fricciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
