"use client";

import { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwrqpyw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Hablemos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="mt-5 text-blue-200 text-lg leading-relaxed">
              Cuéntanos tu desafío. Sin compromiso, sin tecnicismos innecesarios.
              Nos tomamos el tiempo para entender tu negocio antes de proponer cualquier solución.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center text-lg">
                  📍
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-blue-300 mt-1">Región de los Ríos, Chile</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center text-lg">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-300 mt-1">contacto@datasur.cl</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center text-lg">
                  🕒
                </div>
                <div>
                  <p className="font-semibold">Horario</p>
                  <p className="text-blue-300 mt-1">Lunes a Viernes, 9:00 – 18:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">¡Mensaje recibido!</h3>
                <p className="text-blue-300">
                  Nos pondremos en contacto contigo a la brevedad. Gracias por confiar en nosotros.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-blue-200 mb-1">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-blue-200 mb-1">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-blue-200 mb-1">
                    ¿En qué podemos ayudarte?
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition appearance-none"
                  >
                    <option value="" className="text-gray-800">Selecciona un servicio</option>
                    <option value="consultoria" className="text-gray-800">Consultoría Estratégica</option>
                    <option value="desarrollo" className="text-gray-800">Desarrollo Digital</option>
                    <option value="bigdata" className="text-gray-800">Big Data & IA</option>
                    <option value="automatizacion" className="text-gray-800">Automatización de Procesos</option>
                    <option value="otro" className="text-gray-800">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-blue-200 mb-1">
                    Cuéntanos tu desafío *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="Describe brevemente el problema o proyecto en el que necesitas ayuda..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o escríbenos directamente a contacto@datasur.cl
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-yellow-400 text-blue-950 font-bold text-lg hover:bg-yellow-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
