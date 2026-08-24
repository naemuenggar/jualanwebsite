import { services, companyLinks, contactInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hair bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                <span className="h-2.5 w-2.5 rounded-full bg-zap" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-ink">
                Webkriya
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              Jasa pembuatan website untuk UMKM dan bisnis kecil-menengah.
              Desain rapi, proses transparan, harga terjangkau.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink">
              Layanan
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#layanan"
                    className="text-sm text-ink/60 transition-colors hover:text-brand"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink">
              Perusahaan
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/60 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/60">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-brand"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-brand"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-hair pt-8 text-center text-sm text-ink/50">
          &copy; {currentYear} Webkriya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
