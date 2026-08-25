import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webkriya — Studio Pembuatan Website untuk UMKM & Bisnis",
  description:
    "Studio web yang merancang website profesional untuk kedai kopi, klinik, toko online, dan bisnis kecil-menengah. Desain rapi, loading cepat, dan pendampingan yang enak diajak ngobrol.",
  keywords: [
    "jasa pembuatan website",
    "website UMKM",
    "studio web",
    "company profile",
    "toko online",
    "web app custom",
  ],
  openGraph: {
    title: "Webkriya — Studio Pembuatan Website untuk UMKM & Bisnis",
    description:
      "Website profesional, cepat, dan digarap dengan rapi untuk bisnis kecil-menengah di Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "Webkriya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webkriya — Studio Pembuatan Website untuk UMKM & Bisnis",
    description:
      "Website profesional, cepat, dan digarap dengan rapi untuk bisnis kecil-menengah di Indonesia.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${hanken.variable} h-full`}
    >
      <body className="min-h-full bg-canvas text-ink">
        {/*
          impeccable:direction seed=direct-commit-studio-kriya
          THESIS: Webkriya is a web STUDIO that crafts sites as objects, not a cheap
            website vendor. Refuses the generic-SaaS default: white ground, purple+lime,
            icon-card grids, 01/02/03 eyebrows, stock-photo browser frames with fake domains.
          OWN-WORLD: Warm porcelain canvas (#F4F1EA), pure-white raised surfaces, warm ink
            (#17140F). Deep pine-green (#123F35) drenches whole regions; saffron (#E0A43B) is
            the single warm mark. Display: Bricolage Grotesque; text: Hanken Grotesk.
            Architectural radii, warm-tinted real elevation, drawn hairline detail.
          STORY: A prospective client on a portfolio sees genuinely crafted, premium work,
            believes this studio can build their site, scans the portfolio, then messages on WhatsApp.
          FIRST VIEWPORT: Editorial split — oversized Bricolage headline left; a cluster of
            AUTHORED device previews (real designed mini-sites, no fake domains) right; primary
            WhatsApp CTA visible; a slim honest proof strip beneath.
          FORM: Editorial studio-portfolio. Direct commit to user-pinned "terang & premium"
            lane (no concept-seed roll); established-world elevation of the incumbent light surface.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
            review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        {children}
      </body>
    </html>
  );
}
