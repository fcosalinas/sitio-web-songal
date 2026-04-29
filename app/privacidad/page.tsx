import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Surmetric SpA",
  description:
    "Información sobre el tratamiento de datos personales por parte de Surmetric SpA, conforme a la Ley 21.719.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <p className="marker-num text-brand-teal uppercase">Legal</p>
        <h1 className="mt-4 font-display text-4xl lg:text-5xl tracking-tight text-brand-dark leading-tight">
          Política de Privacidad
        </h1>
        <p className="mt-4 text-brand-dark/50 text-sm">
          Última actualización: 29 de abril de 2026
        </p>

        <div className="mt-12 space-y-10 text-brand-dark/80 leading-relaxed">
          <Section title="1. Responsable del tratamiento">
            <p>
              <strong>Surmetric SpA</strong> (en adelante, &ldquo;Surmetric&rdquo;), con domicilio
              en la Región de Los Lagos, Chile, es la empresa responsable del tratamiento de sus
              datos personales en el contexto de las comunicaciones recibidas a través del sitio
              web <strong>surmetric.cl</strong> y los canales de contacto asociados.
            </p>
            <p className="mt-3">
              Para consultas relacionadas con el tratamiento de sus datos, puede contactarnos en:{" "}
              <a
                href="mailto:contacto@surmetric.cl"
                className="text-brand-teal hover:underline"
              >
                contacto@surmetric.cl
              </a>
            </p>
          </Section>

          <Section title="2. Datos que recopilamos y finalidad">
            <p>
              Surmetric no recopila datos personales de forma automática en este sitio web. No
              utilizamos formularios de registro, cookies de seguimiento ni sistemas de analytics
              activos.
            </p>
            <p className="mt-3">
              Cuando usted nos contacta a través de WhatsApp o correo electrónico, nos
              proporciona voluntariamente información como su nombre, empresa y consulta. Estos
              datos se utilizan exclusivamente para:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Responder a su consulta o solicitud</li>
              <li>Agendar reuniones o presentaciones de servicios</li>
              <li>Enviar información relacionada con los servicios solicitados</li>
            </ul>
          </Section>

          <Section title="3. Base legal del tratamiento">
            <p>
              El tratamiento de sus datos se basa en su consentimiento explícito al iniciar
              la comunicación y en el interés legítimo de Surmetric de responder consultas
              comerciales, conforme al artículo 13 letra b) de la Ley 21.719.
            </p>
          </Section>

          <Section title="4. Destinatarios y transferencias">
            <p>
              Sus datos no son vendidos ni cedidos a terceros con fines comerciales. Pueden ser
              accesibles por:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <strong>Meta Platforms (WhatsApp)</strong>: cuando la comunicación se realiza
                vía WhatsApp, Meta procesa los mensajes conforme a sus propias políticas de
                privacidad, como encargada del servicio de mensajería.
              </li>
              <li>
                <strong>Proveedores de servicios de correo</strong>: para el procesamiento del
                correo electrónico enviado a contacto@surmetric.cl.
              </li>
            </ul>
          </Section>

          <Section title="5. Plazo de conservación">
            <p>
              Conservamos sus datos únicamente durante el tiempo necesario para atender su
              consulta y, en caso de una relación comercial, durante la vigencia de dicha
              relación más el plazo legal aplicable. Las comunicaciones por correo o WhatsApp
              se conservan mientras sean necesarias para la gestión del servicio.
            </p>
          </Section>

          <Section title="6. Sus derechos">
            <p>
              Conforme a la Ley 21.719 sobre Protección de Datos Personales, usted tiene
              derecho a:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <strong>Acceso</strong>: conocer qué datos personales suyos tratamos
              </li>
              <li>
                <strong>Rectificación</strong>: corregir datos inexactos o incompletos
              </li>
              <li>
                <strong>Cancelación</strong>: solicitar la eliminación de sus datos
              </li>
              <li>
                <strong>Oposición</strong>: oponerse al tratamiento de sus datos
              </li>
              <li>
                <strong>Portabilidad</strong>: recibir sus datos en formato estructurado
              </li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, escríbanos a{" "}
              <a
                href="mailto:contacto@surmetric.cl"
                className="text-brand-teal hover:underline"
              >
                contacto@surmetric.cl
              </a>{" "}
              indicando su solicitud y datos de identificación. Responderemos en un plazo máximo
              de 30 días hábiles.
            </p>
          </Section>

          <Section title="7. Seguridad">
            <p>
              Este sitio opera exclusivamente bajo HTTPS (cifrado en tránsito). Adoptamos
              medidas técnicas y organizativas razonables para proteger los datos personales
              que nos comunica.
            </p>
          </Section>

          <Section title="8. Modificaciones">
            <p>
              Surmetric puede actualizar esta política para reflejar cambios legales o en
              nuestros procesos. La fecha de última actualización se indica al inicio de este
              documento. Le recomendamos revisarla periódicamente.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-teal hover:underline text-sm font-medium"
          >
            ← Volver al sitio
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl text-brand-dark mb-3">{title}</h2>
      {children}
    </section>
  );
}
