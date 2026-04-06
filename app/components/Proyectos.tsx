const proyectos = [
  {
    tag: "Caso piloto validado",
    title: "Symdat",
    sector: "Gestión de datos industriales",
    desc: "Desarrollamos una plataforma integral de gestión y visualización de datos para Symdat, permitiendo el monitoreo en tiempo real de sus procesos productivos. El proyecto incluyó pipelines ETL automatizados, dashboards interactivos y alertas inteligentes que redujeron los tiempos de respuesta ante incidencias en un 60%.",
    results: [
      "60% reducción en tiempos de respuesta a incidencias",
      "Dashboard en tiempo real con +15 KPIs de producción",
      "Pipeline ETL automatizado, eliminando reportería manual",
      "Integración con sistemas legacy existentes",
    ],
    color: "from-blue-600 to-blue-800",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            Casos de éxito
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Resultados que hablan por sí solos
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            No hablamos de tecnología en abstracto — mostramos impacto real en empresas reales.
          </p>
        </div>

        <div className="space-y-12">
          {proyectos.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 md:flex"
            >
              {/* Color block */}
              <div
                className={`bg-gradient-to-br ${p.color} text-white p-10 md:w-2/5 flex flex-col justify-center`}
              >
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wide">
                  {p.tag}
                </span>
                <h3 className="text-3xl font-extrabold mb-1">{p.title}</h3>
                <p className="text-blue-200 text-sm font-medium">{p.sector}</p>
              </div>

              {/* Content */}
              <div className="p-10 md:w-3/5 bg-gray-50 flex flex-col justify-center">
                <p className="text-gray-700 leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-3">
                  {p.results.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-sm text-gray-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center rounded-2xl bg-blue-50 border border-blue-100 p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Tu empresa podría ser el próximo caso de éxito?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Cada empresa es única. Cuéntanos tu desafío y diseñamos una solución a tu medida.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-xl bg-blue-700 text-white font-bold text-lg hover:bg-blue-800 transition-colors"
          >
            Conversemos
          </a>
        </div>
      </div>
    </section>
  );
}
