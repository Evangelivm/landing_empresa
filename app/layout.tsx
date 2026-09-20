import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Cauce — Software a medida y ERP para operaciones reales";
const description =
  "Diseñamos y construimos ERP y software a medida para empresas que ya no caben en una hoja de cálculo. Arquitectura clara, entregas iterativas y un equipo de ingeniería al que le puedes hablar directamente.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cauce.io"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#0b0e13",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
