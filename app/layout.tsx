import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.surmetric.cl"),
  title: {
    default: "Surmetric SpA — Ingeniería en Estrategia Tecnológica",
    template: "%s | Surmetric SpA",
  },
  description:
    "Transformamos la complejidad tecnológica en claridad estratégica. Consultoría y arquitectura técnica para la industria 4.0 en el sur de Chile: arquitectura de datos, estrategia de producto técnico y optimización operativa con IA.",
  keywords: [
    "Surmetric",
    "consultoría tecnológica",
    "industria 4.0",
    "arquitectura de datos",
    "Symdat",
    "Business Intelligence",
    "transformación digital",
    "sur de Chile",
    "estrategia tecnológica",
  ],
  authors: [{ name: "Surmetric SpA" }],
  creator: "Surmetric SpA",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.surmetric.cl",
    siteName: "Surmetric SpA",
    title: "Surmetric SpA — Ingeniería en Estrategia Tecnológica",
    description:
      "Transformamos la complejidad tecnológica en claridad estratégica. Consultoría y arquitectura técnica para la industria 4.0.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surmetric SpA — Ingeniería en Estrategia Tecnológica",
    description:
      "Transformamos la complejidad tecnológica en claridad estratégica.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${interTight.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-white text-surmetric-dark">
        {children}
      </body>
    </html>
  );
}
