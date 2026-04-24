import Image from "next/image";

const NAV = [
  { href: "#propuesta", label: "Propuesta" },
  { href: "#servicios", label: "Servicios" },
  { href: "#diferenciadores", label: "Por qué nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Image
              src="/logo-lockup-white.png"
              alt="Surmetric SpA"
              width={200}
              height={48}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-md text-white/70 leading-relaxed">
              Tu socio en transformación digital. Consultoría, automatización e IA para empresas que quieren crecer con tecnología bien hecha.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="marker-num text-brand-teal uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/80 hover:text-brand-teal transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="marker-num text-brand-teal uppercase mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href="mailto:contacto@surmetric.cl"
                  className="hover:text-brand-teal transition-colors link-underline"
                >
                  contacto@surmetric.cl
                </a>
              </li>
              <li>www.surmetric.cl</li>
              <li>Sur de Chile · Atención remota y presencial</li>
              <li className="pt-3 text-sm text-white/60">
                Producto propio: Symdat — Business Intelligence
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Surmetric SpA. Todos los derechos reservados.</p>
          <p className="font-display italic">Tecnología con propósito.</p>
        </div>
      </div>
    </footer>
  );
}
