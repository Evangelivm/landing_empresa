import Link from "next/link";
import { BrandMark, BrandWordmark } from "./Brand";
import { IconFacebook, IconInstagram, IconTiktok, IconWhatsapp } from "./icons";
import { WHATSAPP_URL } from "../lib/contact";

const COLUMNS = [
  {
    heading: "Empresa",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Tecnología", href: "#tecnologia" },
    ],
  },
  {
    heading: "Contacto",
    links: [
      { label: "hola@dvyfact.com", href: "mailto:hola@dvyfact.com" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "TikTok", href: "https://www.tiktok.com/@dvy.fact?_r=1", icon: IconTiktok },
  { label: "Instagram", href: "https://www.instagram.com/dvyfact?utm_source=qr&stkn=MWYzMGplN3FyOHdxNA==", icon: IconInstagram },
  { label: "Facebook", href: "https://www.facebook.com/share/18UnqWPZGz/", icon: IconFacebook },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: IconWhatsapp },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--ink-line)] bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="#top" className="flex items-center gap-2 text-text-ink">
              <BrandMark className="h-7 w-7" />
              <BrandWordmark />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-ink-muted">
              Estudio de desarrollo de software especializado en ERP y
              sistemas a medida para operaciones que ya crecieron más que su
              software.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-ink-muted transition-colors hover:text-text-ink"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-ink-muted">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-ink-muted transition-colors hover:text-text-ink"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--ink-line)] pt-8 text-xs text-text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dvy-Fact. Todos los derechos reservados.</p>
          <p>Hecho por un equipo que también escribe el código.</p>
        </div>
      </div>
    </footer>
  );
}
