const WA_NUMBER = "56984184979";

const INTENTS = [
  {
    id: "01",
    label: "Hablar con ventas",
    description: "Evalúa nuestros servicios de consultoría con uno de los socios",
    waText:
      "Hola, me interesa conocer más sobre los servicios de Surmetric. ¿Podríamos agendar una conversación?",
  },
  {
    id: "02",
    label: "Consulta sobre Surdat",
    description: "Plataforma BI por módulos — como cliente actual o evaluando",
    waText:
      "Hola, tengo una consulta sobre Surdat (la plataforma BI). Estoy evaluando / ya soy cliente.",
  },
  {
    id: "03",
    label: "Desarrollar una app nueva",
    description: "Software a medida para tu operación o proceso específico",
    waText:
      "Hola, quiero desarrollar una aplicación a medida para mi empresa. Me gustaría conversar sobre el proceso.",
  },
  {
    id: "04",
    label: "Información general",
    description: "Conoce quiénes somos, cómo trabajamos y en qué podemos ayudarte",
    waText: "Hola, quisiera información general sobre Surmetric SpA y cómo trabajan.",
  },
  {
    id: "05",
    label: "Otra consulta",
    description: "Cualquier pregunta que no esté en las categorías anteriores",
    waText: "Hola, tengo una consulta que quisiera hacerles. ¿Pueden orientarme?",
  },
];

function buildWaLink(text: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppMenu() {
  return (
    <div
      className="bg-brand-gray-50 rounded-2xl border border-brand-gray-100 overflow-hidden"
      role="navigation"
      aria-label="Menú de atención al cliente"
    >
      <div className="px-6 pt-6 pb-4">
        <p className="marker-num text-brand-teal uppercase">¿En qué te ayudamos?</p>
        <p className="mt-1 text-sm text-brand-dark/60">
          Elige una opción para escribirnos con contexto
        </p>
      </div>

      <ul>
        {INTENTS.map((intent, index) => (
          <li
            key={intent.id}
            className={index < INTENTS.length - 1 ? "border-b border-brand-gray-100" : ""}
          >
            <a
              href={buildWaLink(intent.waText)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${intent.label} — Escribir por WhatsApp`}
              className="group flex items-center gap-4 px-6 py-4 hover:bg-brand-teal-light transition-colors duration-200"
            >
              <span className="marker-num text-brand-teal shrink-0">{intent.id}</span>
              <div className="flex-1 min-w-0">
                <p className="font-display text-brand-dark group-hover:text-brand-teal transition-colors text-base">
                  {intent.label}
                </p>
                <p className="text-sm text-brand-dark/50 mt-0.5 leading-snug">
                  {intent.description}
                </p>
              </div>
              <span
                className="text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                aria-hidden
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="px-6 py-4 border-t border-brand-gray-100 bg-white/50">
        <p className="text-sm text-brand-dark/40">
          ¿Prefieres el correo?{" "}
          <a
            href="mailto:contacto@surmetric.cl"
            className="text-brand-dark/60 hover:text-brand-teal underline underline-offset-2 transition-colors"
          >
            contacto@surmetric.cl
          </a>
        </p>
      </div>
    </div>
  );
}
