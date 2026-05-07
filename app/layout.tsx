import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono, Work_Sans } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Portafolio - Audio & Musica",
  description:
    "Portafolio de Hiran Montano: musico, ingeniero de audio y tecnico de stage.",
};

export const viewport = {
  maximumScale: 1,
  themeColor: "#0A0A0A",
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bebas-neue",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${workSans.variable} ${jetBrainsMono.variable} ${bebasNeue.variable}`}
      lang="es"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
