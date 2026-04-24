export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + título */}
        <div className="max-w-3xl">
          <span className="text-surmetric-teal font-semibold text-xs uppercase tracking-[0.2em]">
            Quiénes somos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surmetric-dark leading-tight tracking-tight">
            Arquitectura técnica y visión estratégica para el salto a la
            industria 4.0
          </h2>
          <p className="mt-6 text-lg text-surmetric-gray-500 leading-relaxed">
            En Surmetric SpA transformamos la complejidad tecnológica en
            claridad estratégica. Somos una firma especializada en diseñar la
            arquitectura lógica y técnica necesaria para que las organizaciones
            den el salto hacia la industria 4.0 con seguridad, eficiencia y una
            visión de largo plazo.
          </p>
        </div>

        {/* Misión + Objetivo */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Misión */}
          <article className="relative rounded-xl border border-surmetric-gray-100 bg-surmetric-gray-50 p-8 lg:p-10 overflow-hidden">
            <span
              aria-hidden
              className="absolute top-0 left-0 h-full w-1 bg-surmetric-teal"
            />
            <div className="flex items-center gap-3 mb-4">
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-surmetric-teal-light text-surmetric-teal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <h3 className="font-display text-xl font-semibold text-surmetric-dark">
                Nuestra Misión
              </h3>
            </div>
            <blockquote className="text-surmetric-dark/90 leading-relaxed text-[1.05rem] italic">
              “Liderar la transformación digital en la región, proporcionando
              consultoría estratégica y arquitectura técnica de alto nivel que
              convierta los desafíos tecnológicos en activos competitivos,
              sostenibles y escalables.”
            </blockquote>
          </article>

          {/* Objetivo */}
          <article className="relative rounded-xl border border-surmetric-gray-100 bg-surmetric-gray-50 p-8 lg:p-10 overflow-hidden">
            <span
              aria-hidden
              className="absolute top-0 left-0 h-full w-1 bg-surmetric-dark"
            />
            <div className="flex items-center gap-3 mb-4">
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-surmetric-dark text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm12-3c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
                  />
                </svg>
              </span>
              <h3 className="font-display text-xl font-semibold text-surmetric-dark">
                Nuestro Objetivo
              </h3>
            </div>
            <p className="text-surmetric-dark/90 leading-relaxed text-[1.05rem]">
              Consolidarnos como el referente técnico en consultoría estratégica
              de la región, garantizando que cada socio comercial alcance su
              máximo potencial digital mediante soluciones robustas y preparadas
              para el futuro.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
