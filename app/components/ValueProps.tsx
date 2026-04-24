const VALUES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" fill="currentColor" />
      </svg>
    ),
    title: "Hablamos claro",
    body:
      "Te explicamos cada paso en palabras simples. Tú decides con información clara, no con jerga técnica.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="M14 4l3 7h7l-5.5 4 2 7-6.5-4.5L7.5 22l2-7L4 11h7l3-7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Resultados reales",
    body:
      "Tecnología alineada con tus metas. Si no suma al negocio, no lo hacemos. Punto.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="M5 14h18M14 5l9 9-9 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Te acompañamos",
    body:
      "No te dejamos con un manual. Seguimos contigo hasta que funcione, y después también.",
  },
];

export default function ValueProps() {
  return (
    <section
      id="propuesta"
      className="relative py-24 lg:py-32 bg-brand-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="marker-num text-brand-teal uppercase">
            Nuestra propuesta
          </p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl tracking-tight text-brand-dark leading-[1.1]">
            Tres cosas que prometemos.{" "}
            <span className="italic text-brand-gray-500">
              Y cumplimos.
            </span>
          </h2>
        </div>

        <div className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className="card-hover group relative bg-white p-8 lg:p-10 rounded-2xl border border-brand-gray-100"
            >
              <span
                className="marker-num absolute top-6 right-6 text-brand-gray-300"
                aria-hidden
              >
                0{i + 1}
              </span>

              <div className="text-brand-teal mb-8">{v.icon}</div>

              <h3 className="font-display text-2xl text-brand-dark mb-3">
                {v.title}
              </h3>

              <p className="text-brand-dark/70 leading-relaxed">{v.body}</p>

              {/* Línea inferior turquesa que aparece en hover */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
