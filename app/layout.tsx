import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const interDisplay = Inter({
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
        className={`${inter.variable} ${interDisplay.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
