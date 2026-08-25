# Design System — Webkriya

<!-- impeccable:design-doc — documents the built visual world ("Studio Kriya — measured warmth"). Ground truth is the code; keep this in sync when tokens or components change. -->

The world: **Studio Kriya — measured warmth.** Webkriya reads as a web *studio that crafts sites as objects*, not a cheap website vendor. Warm porcelain ground, deep pine-green regions that own whole sections, one saffron warm mark, and characterful display type. It deliberately refuses the generic-SaaS default (white ground, purple + lime, icon-card grids, 01/02/03 eyebrows, stock-photo browser frames with fake domains).

## Palette

Defined in [tailwind.config.ts](tailwind.config.ts). Color strategy: **Committed** — neutral warm ground + ink + pine carrying whole regions, saffron as the single accent mark.

| Token | Hex | Role |
|---|---|---|
| `canvas` | `#F4F1EA` | Page ground (warm porcelain) |
| `paper` | `#FFFFFF` | Raised surfaces / cards |
| `stoneMist` | `#EDE8DE` | Alternate section field, subtle fills |
| `ink` | `#17140F` | Primary text (warm near-black); secondary via `/70`, `/60`, `/55` |
| `pine` | `#123F35` | Primary — buttons + drenched regions (WhyUs, CTA, featured pricing) |
| `pineDark` | `#0E332B` | Text on saffron, deep accents |
| `pineLight` | `#1C5A4B` | Hover for pine surfaces, atmosphere glows |
| `saffron` | `#E0A43B` | The single warm mark — accent buttons, highlights, active dots |
| `saffronDeep` | `#B87E22` | Reserved deeper saffron |
| `stone` | `#E3DDD0` | Warm hairlines / borders |
| `stoneDark` | `#D4CCBB` | Stronger border |

Contrast: `ink` on `canvas`/`paper` and `canvas` on `pine` both clear AA. Saffron is never used as body text on light grounds (fails contrast) — only as a mark, or as text on pine.

## Typography

Two families, loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx). No mono (removed — mono-as-label was a tell).

- **Display — Bricolage Grotesque** (`font-display`, var `--font-bricolage`): headings, prices, logo, numerals. Characterful contemporary grotesque; thematically "craft/bricolage". Tight tracking `-0.03em` on large headings, leading ~1.0.
- **Text — Hanken Grotesk** (`font-sans`, var `--font-hanken`, body default): body, UI, labels. Warm humanist sans, readable at small sizes for the mobile UMKM audience.
- `.nums` utility applies `tabular-nums` for prices and stats.
- Section headings: `text-4xl sm:text-5xl`, left-aligned (no centered eyebrow labels).

## Shape, elevation, motion

- **Radius:** buttons/inputs `12px`; cards `rounded-card` (20px); large panels `rounded-panel` (28px); chips `rounded-full`. Intentional scale, not uniform.
- **Elevation** (warm-tinted, real offset+blur — see `boxShadow` in config): `shadow-card` (resting surfaces), `shadow-lift` (raised/hover), `shadow-pine` (pine buttons and pine regions).
- **Atmosphere:** soft blurred color glows (`bg-pine/[0.06]`, `bg-saffron/…`, `bg-pineLight/…`) — never decorative grid overlays.
- **Motion:** [FadeIn.tsx](components/FadeIn.tsx) — one reveal grammar, `whileInView` once, exponential ease `[0.22,1,0.36,1]`, respects `prefers-reduced-motion`. Hero uses a staggered on-load rise; site previews use `animate-float-slow`. Hover: `-translate-y-0.5` lifts + color shifts.
- **Browser surfaces themed** in [app/globals.css](app/globals.css): selection (pine/canvas), custom scrollbar (pine on stoneMist), focus-visible ring (pine).

## Key components

- **[ui/Button.tsx](components/ui/Button.tsx)** — variants `primary` (pine/canvas), `outline` (ink hairline), `onPine` (saffron). Lift on hover.
- **[SitePreview.tsx](components/SitePreview.tsx)** — the signature asset. An **authored mini landing page** rendered in each client's brand accent (nav + hero image block + content row), with browser chrome that shows only the site name, **never a domain**. This replaces stock-photo-in-fake-browser frames and is the core "real, not AI" move. `detail="full" | "min"`.
- **[Navbar.tsx](components/Navbar.tsx)** — maker's-mark logo (pine tile + saffron chevron), transparent → canvas/blur on scroll, animated underlines, mobile sheet.
- Sections: Hero (editorial split + preview cluster), TrustMarquee (measured infinite marquee, edge fades), ServicesGrid (asymmetric two-column list, not icon cards), PortfolioBento (featured project + authored-preview grid — the trust centerpiece), ProcessSteps (connected numbered timeline — numbers are a real sequence), WhyUs (drenched pine region + feature list), Pricing (featured pine tier, elevated), Testimonials (quote cards + monogram avatars), CTASection (pine panel), Footer.

## Section rhythm

`canvas` (hero) → `stoneMist` (marquee) → `canvas` (services) → `stoneMist` (portfolio) → `canvas` (process) → **pine** (why-us) → `stoneMist` (pricing) → `canvas` (testimonials) → `canvas` + pine panel (CTA) → `canvas` (footer). Alternating light fields with two pine anchors (why-us, CTA).

## Content & honesty rules (see [PRODUCT.md](PRODUCT.md))

- **No fabricated domains.** SitePreview and contacts never show a client web domain. Contact uses WhatsApp + phone + an Instagram handle (`@webkriya.studio`), not an email domain.
- Hero proof strip uses **defensible offer facts** (estimasi 2–4 minggu, garansi 30 hari, 100% responsif & SEO-ready) — not a fabricated track record.
- Portfolio, testimonials, stats, and contacts are **swappable placeholder content** an operator replaces per deployment; imagery is Unsplash placeholder used inside authored layouts, to be swapped with real client work.
