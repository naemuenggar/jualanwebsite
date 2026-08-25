import { AtSign, MessageCircle, Phone, MapPin } from "lucide-react";
import { services, companyLinks, contactInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone bg-canvas">
      <div className="mx-auto max-w-8xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <span className="flex items-center gap-2.5">
              <span
                className="grid h-9 w-9 place-items-center rounded-[10px] bg-pine"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M5 15.5 9.5 6l2.5 6 2.5-6L19 15.5"
                    stroke="#E0A43B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-ink">
                Webkriya
              </span>
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60 text-pretty">
              Studio pembuatan website untuk UMKM dan bisnis kecil-menengah.
              Desain rapi, proses transparan, harga jelas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
              Layanan
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#layanan"
                    className="text-sm text-ink/70 transition-colors hover:text-pine"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
              Studio
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/70 transition-colors hover:text-pine"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
              Kontak
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-ink/70">
              <li>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-pine"
                >
                  <MessageCircle className="h-4 w-4 text-pine" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-pine"
                >
                  <Phone className="h-4 w-4 text-pine" aria-hidden="true" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-pine"
                >
                  <AtSign className="h-4 w-4 text-pine" aria-hidden="true" />
                  {contactInfo.instagram}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-pine" aria-hidden="true" />
                {contactInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-stone pt-8 text-sm text-ink/50 sm:flex-row">
          <p>&copy; {currentYear} Webkriya. Semua hak dilindungi.</p>
          <p>Dibuat dengan rapi di Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
