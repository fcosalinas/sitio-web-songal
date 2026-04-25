import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surmetric — Tecnología que impulsa negocios",
  description:
    "Hacemos que la tecnología trabaje para ti, no al revés. Modernización, automatización e IA para empresas que quieren crecer sin complicaciones.",
  keywords: [
    "consultoría tecnológica",
    "automatización",
    "inteligencia artificial",
    "Symdat",
    "BI",
    "Surmetric",
    "transformación digital",
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
    title: "Surmetric — Tecnología que impulsa negocios",
    description:
      "Hacemos que la tecnología trabaje para ti, no al revés. Sin humo, sin tecnicismos.",
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
        className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
