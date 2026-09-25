import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rock Laieta · Ona laietana 1973–1978",
  description:
    "App interactiva i premium sobre l'Ona laietana (Rock Laieta): el moviment musical barceloní dels anys 70 que fusionà jazz-rock, tradició catalana, flamenc i rumba. Sala Zeleste, Orquestra Mirasol, Companyia Elèctrica Dharma, Iceberg, Secta Sònica, Gato Pérez, Pegasus i més.",
  keywords: [
    "Ona laietana",
    "Rock Laieta",
    "música laietana",
    "Sala Zeleste",
    "Companyia Elèctrica Dharma",
    "Orquestra Mirasol",
    "Iceberg",
    "Gato Pérez",
    "Pegasus",
    "rock català",
    "Barcelona anys 70",
  ],
  authors: [{ name: "Rock Laieta" }],
  openGraph: {
    title: "Rock Laieta · Ona laietana 1973–1978",
    description:
      "El revulsiu que va canviar la música catalana. Una app interactiva sobre l'Ona laietana.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Laieta · Ona laietana",
    description: "El revulsiu que va canviar la música catalana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${bebasNeue.variable} antialiased bg-background text-foreground dark`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
