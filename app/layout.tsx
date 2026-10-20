import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserratDisplay = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surmetric — Consultoría tecnológica y analítica en todo Chile",
  description:
    "Consultoría tecnológica y analítica para empresas en todo Chile. Datos, automatización, IA y software a medida para servicios, industria, agro, logística, comercio y operaciones complejas.",
  keywords: [
    "consultoría tecnológica",
    "consultoría analítica",
    "automatización",
    "inteligencia artificial",
    "Surdat",
    "BI",
    "Big Data",
    "Surmetric",
    "transformación digital",
    "software a medida",
    "Chile",
  ],
  authors: [{ name: "Surmetric SpA" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  themeColor: "#00968E",
  openGraph: {
    title: "Surmetric — Consultoría tecnológica y analítica en todo Chile",
    description:
      "Datos, automatización, IA y software a medida para empresas chilenas de distintas industrias. Tecnología aplicada, cercana y accionable.",
    type: "website",
    locale: "es_CL",
    siteName: "Surmetric",
  },
};

// Datos estructurados: declaran a Surdat y YoLoTengo como marcas de Surmetric SpA.
// Meta los usa para verificar la relación marca–empresa del nombre visible en WhatsApp.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Surmetric",
  legalName: "Surmetric SpA",
  url: "https://surmetric.cl",
  logo: "https://surmetric.cl/logo-lockup-full.png",
  email: "contacto@surmetric.cl",
  areaServed: "CL",
  brand: [
    {
      "@type": "Brand",
      name: "Surdat",
      url: "https://surdat.surmetric.cl",
      description:
        "Plataforma de Business Intelligence de Surmetric, con Bitácora Comercial por WhatsApp.",
    },
    {
      "@type": "Brand",
      name: "YoLoTengo",
      url: "https://yolotengo.surmetric.cl",
      description: "Marketplace de emprendimientos de Surmetric.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${montserratDisplay.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
