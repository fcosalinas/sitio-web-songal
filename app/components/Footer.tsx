export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white font-bold text-lg">DataSur</span>
            <p className="text-sm mt-1">Consultoría Digital · Región de los Ríos, Chile</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <p className="text-sm">
            © {new Date().getFullYear()} DataSur. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
