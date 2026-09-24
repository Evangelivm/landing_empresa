import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const GROUPS = [
  {
    label: "Backend",
    items: [
      "Servicios robustos y tipados",
      "APIs propias, sin dependencia de terceros",
      "Lógica de negocio auditable",
    ],
    accent: "text-primary-soft",
  },
  {
    label: "Frontend",
    items: [
      "Interfaces rápidas y responsivas",
      "Experiencia consistente en cualquier dispositivo",
    ],
    accent: "text-secondary-soft",
  },
  {
    label: "Datos",
    items: [
      "Bases de datos relacionales robustas",
      "Respaldos y control de acceso por rol",
    ],
    accent: "text-primary-soft",
  },
  {
    label: "Infraestructura",
    items: [
      "Despliegues automatizados y reproducibles",
      "Entornos aislados de prueba y producción",
    ],
    accent: "text-secondary-soft",
  },
];

export default function TechStack() {
  return (
    <section id="tecnologia" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="ink"
            title="Tecnología probada, no un experimento con tu operación"
            description="Elegimos herramientas maduras y ampliamente documentadas para que tu sistema se pueda mantener y hacer crecer con cualquier equipo de ingeniería, no solo con el nuestro."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div className="border-t border-[var(--ink-line-strong)] pt-5">
                <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${group.accent}`}>
                  {group.label}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
