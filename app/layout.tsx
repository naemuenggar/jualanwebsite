import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webkriya — Jasa Pembuatan Website untuk UMKM & Bisnis",
  description:
    "Buat website profesional untuk kedai kopi, klinik, toko online, dan bisnis kecil-menengah. Desain rapi, loading cepat, dan support terjangkau dari Webkriya.",
  keywords: [
    "jasa pembuatan website",
    "website UMKM",
    "jasa website",
    "company profile",
    "toko online",
    "web app custom",
  ],
  openGraph: {
    title: "Webkriya — Jasa Pembuatan Website untuk UMKM & Bisnis",
    description:
      "Website profesional, cepat, dan terjangkau untuk bisnis kecil-menengah di Indonesia.",
    type: "website",
    locale: "id_ID",
    url: "https://webkriya.id",
    siteName: "Webkriya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webkriya — Jasa Pembuatan Website untuk UMKM & Bisnis",
    description:
      "Website profesional, cepat, dan terjangkau untuk bisnis kecil-menengah di Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full bg-white text-ink">{children}</body>
    </html>
  );
}
