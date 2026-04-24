"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  { value: "", label: "Seleccione una línea de servicio" },
  { value: "datos", label: "Ordenar mi información (Datos / BI)" },
  { value: "software", label: "Modernizar mi operación (Software a medida)" },
  { value: "automatizacion", label: "Automatizar con IA" },
  { value: "symdat", label: "Symdat (Business Intelligence)" },
  { value: "otro", label: "Otro / No estoy seguro" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Stub — el form real requiere backend / endpoint en el repo
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, var(--color-brand-teal-light), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Columna izquierda: copy + datos de contacto */}
          <div className="lg:col-span-5">
            <p className="marker-num text-brand-teal uppercase">
              Conversemos
            </p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl xl:text-6xl tracking-tight text-brand-dark leading-[1.05]">
              ¿Tienes un desafío en mente?{" "}
              <span className="italic text-brand-teal">Cuéntanos.</span>
            </h2>
            <p className="mt-6 text-lg text-brand-dark/70 leading-relaxed">
              La primera conversación es gratis y sin compromiso. Queremos entenderte antes de proponerte nada.
            </p>

            <dl className="mt-12 space-y-6">
              <div>
                <dt className="marker-num text-brand-gray-500 uppercase mb-1">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:contacto@surmetric.cl"
                    className="text-xl font-display text-brand-dark hover:text-brand-teal transition-colors link-underline"
                  >
                    contacto@surmetric.cl
                  </a>
                </dd>
              </div>
              <div>
                <dt className="marker-num text-brand-gray-500 uppercase mb-1">
                  Web
                </dt>
                <dd className="text-xl font-display text-brand-dark">
                  www.surmetric.cl
                </dd>
              </div>
              <div>
                <dt className="marker-num text-brand-gray-500 uppercase mb-1">
                  Modalidad
                </dt>
                <dd className="text-xl font-display text-brand-dark">
                  Atención remota y presencial
                </dd>
              </div>
            </dl>
          </div>

          {/* Columna derecha: formulario */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="bg-brand-gray-50 p-8 lg:p-10 rounded-2xl border border-brand-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-teal text-white mb-6">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M6 14l5 5 11-11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-brand-dark mb-2">
                    Recibimos tu mensaje
                  </h3>
                  <p className="text-brand-dark/70">
                    Te respondemos en menos de un día hábil.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nombre" name="nombre" required />
                    <Field label="Empresa" name="empresa" />
                  </div>
                  <Field label="Email" name="email" type="email" required />

                  <div>
                    <label
                      htmlFor="servicio"
                      className="block text-sm font-medium text-brand-dark mb-2"
                    >
                      ¿En qué podemos ayudar?
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      className="w-full px-4 py-3 bg-white border border-brand-gray-100 rounded-lg text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition"
                      defaultValue=""
                    >
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value} disabled={o.value === ""}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-brand-dark mb-2"
                    >
                      Cuéntanos tu desafío
                      <span className="text-brand-teal ml-1">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white border border-brand-gray-100 rounded-lg text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition resize-none"
                      placeholder="Describe tu situación actual y qué te gustaría resolver..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark text-white font-medium rounded-full hover:bg-brand-teal transition-all duration-300"
                  >
                    Enviar mensaje
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </button>

                  <p className="text-xs text-brand-dark/50 leading-relaxed">
                    Al enviar aceptas el tratamiento de tus datos para ser contactado por Surmetric SpA.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-dark mb-2">
        {label}
        {required && <span className="text-brand-teal ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 bg-white border border-brand-gray-100 rounded-lg text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition"
      />
    </div>
  );
}
