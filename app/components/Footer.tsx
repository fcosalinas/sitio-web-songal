import Image from "next/image";

const nav = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#propuesta", label: "Propuesta" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surmetric-dark text-surmetric-gray-300 border-t border-white/10">
      {/* Línea corporativa turquesa */}
      <div className="h-[2px] bg-surmetric-teal" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Identidad */}
          <div>
            <Image
              src="/logo-lockup-white.png"
              alt="Surmetric SpA"
              width={180}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-surmetric-gray-500">
              Ingeniería en Estrategia Tecnológica · Firma especializada en
              arquitectura lógica y técnica para la industria 4.0.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-[0.18em]">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-surmetric-gray-300 hover:text-surmetric-teal transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-[0.18em]">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:contacto@surmetric.cl"
                  className="hover:text-surmetric-teal transition-colors"
                >
                  contacto@surmetric.cl
                </a>
              </li>
              <li className="text-surmetric-gray-500">Sur de Chile</li>
              <li className="text-surmetric-gray-500">
                Producto: <span className="text-surmetric-gray-300">Symdat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surmetric-gray-500">
          <p>
            © {year} Surmetric SpA. Todos los derechos reservados.
          </p>
          <p className="font-mono">
            Ingeniería en Estrategia Tecnológica
          </p>
        </div>
      </div>
    </footer>
  );
}
