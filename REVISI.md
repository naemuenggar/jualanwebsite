# Handoff Revisi — Webkriya

> Dokumen untuk sesi dev berikutnya (rencana: model Sonnet). Berisi (1) daftar lengkap perubahan yang sudah dibuat, (2) cara mengembalikan style & color palette ke ASLI, (3) panduan refine secukupnya. **Belum dieksekusi** — owner ingin melihat dulu apa saja revisinya lalu mengerjakan sendiri.

## 0. Keputusan owner (2026-08-25)

- Proyek ini adalah **template** (bukan bisnis nyata, **tidak ada proyek portofolio asli**). Portofolio tetap **placeholder yang bisa diganti**.
- Sesi sebelumnya **refine kejauhan** — mengganti seluruh dunia visual ("Studio Kriya": palet pine/saffron/porselen, font Bricolage + Hanken, komponen dibangun ulang).
- **Yang diinginkan:** kembalikan **style & color palette ke ASLI**, dan ke depan **refine secukupnya** (perbaikan kecil di atas desain lama), bukan redesign total.

## 1. Style & palette ASLI (target yang mau dikembalikan)

Ada di commit git `071c517` (`Initial commit`). Ringkasannya:

- **Warna** (`tailwind.config.ts`): `ink #0E1116`, `brand #4F3FF0` (ungu), `brandDark #3B2ED1`, `zap #D6FF3F` (lime), `mist #F4F5F9`, `hair #E3E5EC`, ground putih.
- **Font** (`app/layout.tsx` + `globals.css`): Inter (body/`--font-inter`), Space Grotesk (display/`--font-space-grotesk`), Space Mono (mono/`--font-space-mono`).
- **Komponen**: kartu-ikon seragam, section numbers 01/02/03, `BrowserFrame` (frame browser + foto Unsplash + domain di URL bar), pill `rounded-full` di mana-mana.

## 2. Daftar LENGKAP perubahan yang dibuat sesi ini

### File yang DIUBAH (perlu di-revert ke asli)
| File | Perubahan yang dibuat |
|---|---|
| `tailwind.config.ts` | Ganti palet `brand/zap/mist/hair` → `canvas/paper/pine/saffron/stone/stoneMist`; font `sans`→Hanken, `display`→Bricolage (hapus mono); tambah radius `card/panel`, shadow `card/lift/pine/inset`, `maxWidth 8xl`, animasi `float-slow` (marquee diperlambat 40s→45s). |
| `app/layout.tsx` | Ganti font Inter/Space Grotesk/Space Mono → **Bricolage + Hanken**; ubah `<title>`/metadata jadi "Studio…"; hapus `openGraph.url`; tambah **direction-contract comment** besar di dalam `<body>`; `body` class jadi `bg-canvas text-ink`. |
| `app/globals.css` | Ditulis ulang total: hapus `@apply bg-zap/40`; selection/scrollbar/focus jadi pine; tambah util `.nums`, `.text-pretty`. |
| `lib/data.ts` | `Service`: hapus `href`, tambah `deliverable`. `Project`: **hapus `url` (domain palsu)**, hapus dependency ke `size`-only, tambah `summary` + `accent`. `stats` lama (120+/4.9/2–4mgg) → fakta penawaran (2–4 mgg / 30 hari / 100%). `pricingTiers`: hapus `href`. `contactInfo`: **hapus `email`**, tambah `instagram`/`instagramUrl`. `companyLinks` diubah isinya. |
| `components/ui/Button.tsx` | Variant `primary/outline/white` → `primary/outline/onPine`; radius `rounded-full`→`rounded-[12px]`; warna pine/saffron; efek hover lift. |
| `components/Navbar.tsx` | Logo 3-titik → maker's-mark (tile pine + chevron saffron); warna canvas/pine; underline animasi; CTA "Konsultasi". |
| `components/Hero.tsx` | Hapus eyebrow; headline Bricolage besar + underline saffron; CTA utama jadi **"Lihat Portofolio"**; cluster **SitePreview** (bukan BrowserFrame+foto); strip stat baru. |
| `components/TrustMarquee.tsx` | Restyle chip (stone + titik pine), tambah label + edge-fade. Logika marquee tetap. |
| `components/ServicesGrid.tsx` | Grid kartu-ikon → **daftar editorial 2 kolom** (header kiri + rows hover), hapus nomor. |
| `components/PortfolioBento.tsx` | Bento foto → **1 proyek featured + grid SitePreview** dengan caption. |
| `components/ProcessSteps.tsx` | 4 kartu → **timeline bernomor** yang tersambung. |
| `components/WhyUs.tsx` | Region hitam → **region pine** + daftar fitur (ikon saffron). |
| `components/Pricing.tsx` | Restyle; tier populer jadi **kartu pine terangkat**; num tabular. |
| `components/Testimonials.tsx` | Hapus baris 5-bintang; jadi **quote card + avatar monogram**. |
| `components/CTASection.tsx` | Hapus 2 lingkaran; jadi **panel pine** + tombol saffron + baris reassurance. |
| `components/Footer.tsx` | Restyle; **hapus email**, pakai IG/WhatsApp/telepon; maker's-mark. |

### File BARU yang dibuat (hapus saat revert kalau tak dipakai)
- `components/SitePreview.tsx` — komponen mock-website buatan (pengganti BrowserFrame). **Hapus saat revert.**
- `DESIGN.md` — dokumentasi dunia "Studio Kriya". **Hapus saat revert** (tidak cocok dengan desain asli).
- `PRODUCT.md` — catatan produk (template, audiens, dll). **Boleh DISIMPAN** — ini kebenaran produk, netral terhadap desain. (Catatan: sebagian isinya menyebut aturan "no fake domain" & "portofolio-first" yang berasal dari sesi ini.)
- `.impeccable/review/*.png` — screenshot review. Boleh dihapus.

### File yang DIHAPUS sesi ini (akan kembali saat revert)
- `components/BrowserFrame.tsx` — dihapus; `git restore` akan mengembalikannya.

### Catatan dependency & teknis
- `package-lock.json` — sudah berstatus `M` sebelum sesi ini (bukan dari aku), lalu sempat berubah karena aku install+uninstall `puppeteer-core` (untuk screenshot). `puppeteer-core` **sudah di-uninstall** (0 vulnerabilities). Kalau mau bersih total, `git restore package-lock.json`.
- `lucide-react@1.33.0` di project ini **tidak punya ikon `Instagram`** (aku pakai `AtSign` sebagai gantinya). Ikon lain (MessageCircle, Phone, MapPin, ArrowUpRight, Lock, dst.) tersedia.
- `.claude/` (launch.json) sudah ada sebelum sesi ini — bukan buatanku.

## 3. Cara REVERT ke tampilan asli (paling bersih)

Perubahan sesi ini **belum di-commit**, jadi cukup restore ke `HEAD`:

```bash
# 1) Kembalikan semua file tracked yang diubah ke versi asli
git restore app components lib tailwind.config.ts package-lock.json

# 2) Hapus file baru buatan sesi ini yang tidak dipakai di desain asli
rm -f components/SitePreview.tsx DESIGN.md
#   (PRODUCT.md boleh disimpan; hapus juga kalau tak mau: rm -f PRODUCT.md)

# 3) (opsional) bersihkan artefak review
rm -rf .impeccable

# 4) Verifikasi
git status
```

Setelah langkah 1, `components/BrowserFrame.tsx` otomatis kembali dan seluruh palet/ font/komponen kembali ke aslinya. **Peringatan:** `git restore` MEMBUANG seluruh redesign sesi ini (memang itu tujuannya).

> Kalau nanti berubah pikiran dan ingin menyimpan redesign "Studio Kriya" sebagai cadangan sebelum revert: `git stash -u` (menyimpan semua perubahan+file baru ke stash) lalu bisa dipanggil lagi dengan `git stash pop`.

## 4. Panduan "refine secukupnya" (setelah revert, kalau mau perbaikan)

Tetap di **desain asli** (putih + ungu #4F3FF0 + lime #D6FF3F, Inter/Space Grotesk/Space Mono). Perbaikan yang aman & kecil, hanya jika diminta:

- Rapikan spacing/rhythm antar-section yang terasa sempit.
- Perhalus state hover/focus tombol & kartu (yang sudah ada).
- Perbaiki copy/label kalau ada yang kaku.
- **JANGAN**: ganti palet, ganti font, bongkar komponen, atau redesign dunia visual — kecuali diminta eksplisit.

### Opsional (perbaikan kecil yang tetap layak di desain asli)
Ini perbaikan bermakna yang bisa diterapkan **tanpa** mengubah style, kalau owner mau:
- **Buang domain palsu** (`kopisenja.id`, `mitrasehat.co.id`, `webkriya.id`, dst.) — ini "tell" AI. Di desain asli domain muncul di `BrowserFrame` (URL bar) via `projects[].url` dan di `contactInfo.email`. Bisa diganti nama proyek saja / handle IG, tanpa mengubah tampilan.
- Karena ini **template** dan portofolio pakai gambar Unsplash placeholder: cukup pastikan gambar terlihat rapi & kredibel; tidak perlu "proyek asli".
```
