const servicios = [
  {
    icon: "🧭",
    title: "Consultoría Estratégica",
    desc: "Diagnóstico digital, hoja de ruta tecnológica y acompañamiento en la transformación de tu empresa. Ayudamos a tomar las decisiones correctas antes de invertir en tecnología.",
    items: [
      "Diagnóstico de madurez digital",
      "Hoja de ruta de transformación",
      "Gestión del cambio organizacional",
      "Selección de herramientas y proveedores",
    ],
  },
  {
    icon: "💻",
    title: "Desarrollo Digital",
    desc: "Construimos aplicaciones web y sistemas a medida que resuelven problemas reales. Desde portales de gestión hasta plataformas de e-commerce, con tecnologías modernas y escalables.",
    items: [
      "Aplicaciones web a medida",
      "Sistemas de gestión (ERP/CRM)",
      "Plataformas de e-commerce",
      "APIs e integraciones",
    ],
  },
  {
    icon: "📈",
    title: "Big Data & IA",
    desc: "Transformamos tus datos en decisiones. Dashboards de gestión, modelos predictivos y automatización inteligente para que nunca más tomes decisiones a ciegas.",
    items: [
      "Pipelines ETL y bodegas de datos",
      "Dashboards de gestión en tiempo real",
      "Modelos predictivos y forecasting",
      "Integración de LLMs y chatbots",
    ],
  },
  {
    icon: "⚙️",
    title: "Automatización de Procesos",
    desc: "Eliminamos tareas manuales y repetitivas. Desde automatización de reportes hasta flujos de trabajo complejos, liberamos a tu equipo para que se enfoque en lo que importa.",
    items: [
      "Automatización RPA",
      "Flujos de trabajo digitales",
      "Reportería automática",
      "Integración entre sistemas",
    ],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            Lo que hacemos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Servicios diseñados para PYMEs reales
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            No vendemos tecnología genérica. Cada servicio está pensado para el contexto
            y presupuesto de las empresas de nuestra región.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
