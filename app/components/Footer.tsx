import Link from "next/link";
import { BrandMark, BrandWordmark } from "./Brand";
import { IconFacebook, IconInstagram } from "./icons";

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
      { label: "hola@devyfact.com", href: "mailto:hola@devyfact.com" },
      { label: "+1 (000) 000-0000", href: "tel:+10000000000" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/devyfact", icon: IconFacebook },
  { label: "Instagram", href: "https://instagram.com/devyfact", icon: IconInstagram },
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
          <p>© {new Date().getFullYear()} Devy-Fact. Todos los derechos reservados.</p>
          <p>Hecho por un equipo que también escribe el código.</p>
        </div>
      </div>
    </footer>
  );
}
