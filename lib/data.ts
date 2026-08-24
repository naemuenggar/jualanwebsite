import {
  Monitor,
  Smartphone,
  Zap,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  startingPrice: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "landing-page",
    number: "01",
    title: "Landing Page",
    description:
      "Halaman fokus untuk promosi satu produk atau layanan. Cepat dibuat, ringan, dan langsung mengajak pengunjung bertindak.",
    startingPrice: "Rp 2,5 jt",
    href: "#layanan",
  },
  {
    id: "company-profile",
    number: "02",
    title: "Company Profile",
    description:
      "Website perkenalan bisnis lengkap dengan profil, layanan, galeri, dan kontak. Cocok untuk UMKM yang ingin terlihat profesional.",
    startingPrice: "Rp 4 jt",
    href: "#layanan",
  },
  {
    id: "toko-online",
    number: "03",
    title: "Toko Online",
    description:
      "Showcase produk dengan katalog, keranjang, dan integrasi WhatsApp/penjualan. Siap bantu bisnis Anda jualan online.",
    startingPrice: "Rp 6 jt",
    href: "#layanan",
  },
  {
    id: "web-app-custom",
    number: "04",
    title: "Web App Custom",
    description:
      "Solusi khusus seperti dashboard, sistem booking, membership, atau otomasi proses bisnis tertentu.",
    startingPrice: "Custom",
    href: "#layanan",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  url: string;
  imageSrc: string;
  alt: string;
  size: "large" | "tall" | "wide" | "normal";
};

export const projects: Project[] = [
  {
    id: "kopi-senja",
    title: "Kopi Senja",
    category: "Toko Online",
    url: "kopisenja.id",
    imageSrc:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80",
    alt: "Website toko online Kopi Senja dengan tampilan katalog produk kopi",
    size: "large",
  },
  {
    id: "mitra-sehat",
    title: "Mitra Sehat",
    category: "Company Profile",
    url: "mitrasehat.co.id",
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    alt: "Website company profile klinik Mitra Sehat",
    size: "tall",
  },
  {
    id: "noir-fashion",
    title: "Noir Fashion",
    category: "Landing Page",
    url: "noirfashion.id",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    alt: "Landing page Noir Fashion dengan tampilan elegan",
    size: "normal",
  },
  {
    id: "green-space",
    title: "Green Space",
    category: "Coworking Space",
    url: "greenspace.id",
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    alt: "Website company profile coworking space Green Space",
    size: "wide",
  },
  {
    id: "bengkel-cepat",
    title: "Bengkel Cepat",
    category: "Web App Custom",
    url: "bengkelcepat.id",
    imageSrc:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    alt: "Web app booking servis bengkel",
    size: "normal",
  },
  {
    id: "rumah-roti",
    title: "Rumah Roti",
    category: "Toko Online",
    url: "rumahroti.id",
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    alt: "Website toko online Rumah Roti",
    size: "normal",
  },
  {
    id: "startup-nusantara",
    title: "Startup Nusantara",
    category: "Company Profile",
    url: "startupnusantara.id",
    imageSrc:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    alt: "Website company profile Startup Nusantara",
    size: "normal",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Brief",
    description:
      "Kita ngobrol santai soal kebutuhan bisnis Anda, target pengunjung, dan referensi desain yang disukai.",
  },
  {
    number: "02",
    title: "Desain",
    description:
      "Tim kami buatkan desain visual interaktif. Anda bisa revisi sampai cocok sebelum masuk tahap coding.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Website dibangun dengan kode bersih, responsif, dan diuji di berbagai perangkat sebelum diluncurkan.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Website dipasang di domain & hosting, lalu kita serahkan panduan penggunaan. Siap go live!",
  },
];

export type WhyUsFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUsFeatures: WhyUsFeature[] = [
  {
    icon: Monitor,
    title: "Responsif di Semua Layar",
    description:
      "Tampilan website menyesuaikan sempurna di ponsel, tablet, maupun laptop pengunjung.",
  },
  {
    icon: Smartphone,
    title: "SEO-Ready",
    description:
      "Struktur halaman dan meta tag disiapkan agar website mudah ditemukan di Google.",
  },
  {
    icon: Zap,
    title: "Loading Cepat",
    description:
      "Optimasi gambar dan kode ringan supaya pengunjung tidak menunggu lama.",
  },
  {
    icon: Headphones,
    title: "Support 30 Hari",
    description:
      "Setelah website hidup, kami bantu perbaikan kecil dan panduan pengelolaan selama sebulan.",
  },
];

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "Rp 2,5 jt",
    description: "Cocok untuk promosi produk atau layanan spesifik.",
    features: [
      "1 halaman landing page",
      "Desain responsif",
      "Form kontak / WhatsApp",
      "Revisi 2x",
      "Support 14 hari",
    ],
    href: "#kontak",
  },
  {
    id: "business",
    name: "Business",
    price: "Rp 5 jt",
    description: "Paket andalan untuk perkenalan bisnis yang lengkap.",
    features: [
      "5–7 halaman website",
      "Desain responsif & SEO-ready",
      "Galeri & blog sederhana",
      "Integrasi WhatsApp & Google Maps",
      "Revisi 4x",
      "Support 30 hari",
    ],
    href: "#kontak",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Solusi khusus dengan fitur yang disesuaikan kebutuhan.",
    features: [
      "Web app / sistem custom",
      "Fitur booking, membership, dsb",
      "Dashboard admin",
      "Integrasi pihak ketiga",
      "Revisi sesuai scope",
      "Support & maintenance berkelanjutan",
    ],
    href: "#kontak",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  business: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    quote:
      "Website klinik kami jadi lebih profesional dan pasien sering bilang mudah cari informasi. Prosesnya cepat dan komunikasinya enak.",
    name: "dr. Rina Wulandari",
    role: "Pemilik",
    business: "Klinik Mitra Sehat",
  },
  {
    id: "testi-2",
    quote:
      "Dari desain sampai go live cuma beberapa minggu. Toko online kopi kami langsung dapat orderan lewat WhatsApp.",
    name: "Andi Prasetyo",
    role: "Founder",
    business: "Kopi Senja",
  },
  {
    id: "testi-3",
    quote:
      "Saya awalnya bingung teknis, tapi tim Webkriya jelaskan dengan bahasa yang sederhana. Hasilnya sesuai ekspektasi.",
    name: "Sari Dewi",
    role: "Owner",
    business: "Noir Fashion",
  },
];

export const stats = [
  { value: "120+", label: "Website Diluncurkan" },
  { value: "4.9/5", label: "Rating Klien" },
  { value: "2–4", label: "Minggu Pengerjaan" },
];

export const trustCategories = [
  "Kedai Kopi",
  "Klinik",
  "Toko Fashion",
  "Startup",
  "Coworking Space",
  "Restoran",
  "Bengkel",
  "UMKM",
  "Lembaga Pelatihan",
  "Properti",
];

export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
  { label: "Testimoni", href: "#testimoni" },
];

export const companyLinks = [
  { label: "Tentang Kami", href: "#" },
  { label: "Karir", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Kebijakan Privasi", href: "#" },
];

export const contactInfo = {
  email: "halo@webkriya.id",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  whatsapp: "https://wa.me/6281234567890",
};
