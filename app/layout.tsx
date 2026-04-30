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
        {children}
      </body>
    </html>
  );
}
