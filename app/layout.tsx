import type { Metadata } from "next";
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans-src",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Devy-Fact: software a medida y ERP para operaciones reales";
const description =
  "Diseñamos y construimos ERP y software a medida para empresas que ya no caben en una hoja de cálculo. Arquitectura clara, entregas iterativas y un equipo de ingeniería al que le puedes hablar directamente.";

export const metadata: Metadata = {
  metadataBase: new URL("https://devyfact.com"),
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
      className={`${spaceGrotesk.variable} ${manrope.variable} ${plexMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
