const DIFFERENTIATORS = [
  {
    title: "Hablamos claro",
    body: "Cero tecnicismos innecesarios. Te explicamos qué haremos y por qué.",
  },
  {
    title: "Visión completa",
    body: "Miramos tu negocio entero, no solo el problema del momento.",
  },
  {
    title: "A tu medida",
    body: "Cada empresa es distinta. Diseñamos para tu realidad, no plantillas genéricas.",
  },
  {
    title: "Pensado a futuro",
    body: "Lo que construimos hoy escala contigo mañana. Sin rehacer todo.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="diferenciadores"
      className="relative py-24 lg:py-32 bg-brand-dark text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden />
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-brand-teal), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="marker-num text-brand-teal uppercase">
            ¿Por qué trabajar con nosotros?
          </p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.05]">
            Lo que nos diferencia,{" "}
            <span className="italic text-brand-teal">en lo que te puedes apoyar.</span>
          </h2>
        </div>

        <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {DIFFERENTIATORS.map((d, i) => (
            <div key={d.title} className="group">
              <div className="flex items-center gap-3 mb-5">
                <span className="marker-num text-brand-teal">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-white/15 group-hover:bg-brand-teal transition-colors duration-500" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mb-3">
                {d.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
