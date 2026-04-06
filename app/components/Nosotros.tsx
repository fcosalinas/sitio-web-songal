const valores = [
  {
    icon: "🏔️",
    title: "Arraigo territorial",
    desc: "Somos de la Región de los Ríos y entendemos sus realidades, desafíos y oportunidades únicas.",
  },
  {
    icon: "🤝",
    title: "Cercanía y confianza",
    desc: "Trabajamos como socios estratégicos, no como proveedores. Tu problema es nuestro problema.",
  },
  {
    icon: "📊",
    title: "Resultados concretos",
    desc: "Cada solución que construimos tiene métricas claras de impacto. Nada de tecnología por la tecnología.",
  },
  {
    icon: "🚀",
    title: "Tecnología accesible",
    desc: "Democratizamos herramientas de Big Data e IA que antes solo estaban al alcance de grandes empresas.",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              Quiénes somos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Impulsamos el desarrollo del sur de Chile con tecnología de vanguardia
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Somos una empresa de consultoría estratégica y desarrollo de soluciones
              digitales con sede en la Región de los Ríos. Nuestra misión es cerrar la
              brecha tecnológica de las PYMEs locales, transformando procesos
              tradicionales en operaciones eficientes, automatizadas y basadas en datos.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Combinamos expertise técnico en Big Data, Inteligencia Artificial y
              desarrollo web con un profundo conocimiento del tejido productivo regional,
              manteniendo siempre un sello de cercanía y compromiso territorial.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valores.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
