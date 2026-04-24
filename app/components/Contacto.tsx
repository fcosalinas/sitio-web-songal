"use client";

import { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

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
    <section
      id="contacto"
      className="relative py-24 sm:py-32 bg-surmetric-dark text-white overflow-hidden"
    >
      {/* Halo turquesa decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, #00968E, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <span className="text-surmetric-teal font-semibold text-xs uppercase tracking-[0.2em]">
              Hablemos
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              Construyamos el futuro tecnológico de su organización
            </h2>
            <p className="mt-6 text-lg text-surmetric-gray-300 leading-relaxed max-w-xl">
              Cuéntenos su desafío. Nos tomamos el tiempo para entender su
              negocio antes de proponer cualquier solución — sin tecnicismos
              innecesarios, con foco en resultados concretos.
            </p>

            <div className="mt-12 space-y-6">
              <ContactRow
                label="Email corporativo"
                value="contacto@surmetric.cl"
                href="mailto:contacto@surmetric.cl"
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                }
              />
              <ContactRow
                label="Ubicación"
                value="Sur de Chile"
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                }
              />
              <ContactRow
                label="Producto propio"
                value="Symdat — plataforma de Business Intelligence"
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl bg-surmetric-dark-soft border border-white/10 p-6 sm:p-8 lg:p-10 shadow-lg">
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-surmetric-teal/20 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-surmetric-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Mensaje recibido
                </h3>
                <p className="text-surmetric-gray-300">
                  Nos pondremos en contacto a la brevedad. Gracias por confiar
                  en Surmetric.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    id="nombre"
                    name="nombre"
                    label="Nombre"
                    type="text"
                    required
                    placeholder="Su nombre"
                  />
                  <Field
                    id="empresa"
                    name="empresa"
                    label="Empresa"
                    type="text"
                    placeholder="Nombre de su empresa"
                  />
                </div>

                <Field
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  required
                  placeholder="contacto@empresa.cl"
                />

                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-sm font-medium text-surmetric-gray-300 mb-1.5"
                  >
                    ¿En qué podemos ayudar?
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-surmetric-teal focus:border-transparent transition"
                  >
                    <option value="" className="text-surmetric-dark">
                      Seleccione una línea de servicio
                    </option>
                    <option
                      value="arquitectura-datos"
                      className="text-surmetric-dark"
                    >
                      Arquitectura de Datos y Procesos
                    </option>
                    <option
                      value="producto-tecnico"
                      className="text-surmetric-dark"
                    >
                      Estrategia de Producto Técnico
                    </option>
                    <option
                      value="optimizacion-ia"
                      className="text-surmetric-dark"
                    >
                      Optimización Operativa e IA
                    </option>
                    <option value="symdat" className="text-surmetric-dark">
                      Symdat (Business Intelligence)
                    </option>
                    <option value="otro" className="text-surmetric-dark">
                      Otro
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-surmetric-gray-300 mb-1.5"
                  >
                    Cuéntenos su desafío
                    <span className="text-surmetric-teal ml-0.5">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="Describa brevemente el contexto, el problema o el proyecto en el que necesita acompañamiento."
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/15 text-white placeholder-surmetric-gray-500 focus:outline-none focus:ring-2 focus:ring-surmetric-teal focus:border-transparent transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm rounded-md bg-surmetric-error/10 border border-surmetric-error/30 text-surmetric-error px-4 py-3">
                    Hubo un error al enviar el mensaje. Intente nuevamente o
                    escríbanos directamente a{" "}
                    <a
                      className="underline font-medium"
                      href="mailto:contacto@surmetric.cl"
                    >
                      contacto@surmetric.cl
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-md bg-surmetric-teal text-white font-semibold hover:bg-surmetric-teal-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-surmetric-teal focus:ring-offset-2 focus:ring-offset-surmetric-dark-soft"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
                <p className="text-xs text-surmetric-gray-500 text-center">
                  Al enviar acepta el tratamiento de los datos para ser
                  contactado por Surmetric SpA.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <>
      <span
        aria-hidden
        className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-md bg-white/5 border border-white/10 text-surmetric-teal"
      >
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-surmetric-gray-500 font-medium">
          {label}
        </p>
        <p className="mt-1 text-surmetric-gray-300 font-medium">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-4 group hover:text-white transition-colors"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-4">{content}</div>;
}

function Field({
  id,
  name,
  label,
  type,
  required,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-surmetric-gray-300 mb-1.5"
      >
        {label}
        {required && <span className="text-surmetric-teal ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/15 text-white placeholder-surmetric-gray-500 focus:outline-none focus:ring-2 focus:ring-surmetric-teal focus:border-transparent transition"
      />
    </div>
  );
}
   