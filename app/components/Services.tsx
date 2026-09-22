import type { ReactElement } from "react";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";
import {
  IconCompass,
  IconDatabase,
  IconPlug,
  IconTerminal,
} from "./icons";

const SERVICES = [
  {
    icon: IconDatabase,
    title: "ERP a medida",
    description:
      "Sistemas de planificación diseñados alrededor de tus procesos reales, no al revés: inventario, compras, finanzas, producción y ventas como módulos que conversan entre sí.",
    points: [
      "Módulos de inventario, compras y finanzas",
      "Tableros y reportes en tiempo real",
      "Flujos de aprobación y permisos a tu medida",
    ],
    featured: true,
  },
  {
    icon: IconTerminal,
    title: "Software a medida",
    description:
      "Portales, herramientas internas y aplicaciones operativas que ningún software de catálogo resuelve bien.",
    points: ["Portales de clientes y proveedores", "Herramientas internas de operación"],
    featured: false,
  },
  {
    icon: IconPlug,
    title: "Integraciones y automatización",
    description:
      "Conectamos tu ERP con lo que ya usas: facturación electrónica, pagos, WMS, CRM y APIs de proveedores.",
    points: ["Facturación electrónica y pagos", "Automatización de tareas repetitivas"],
    featured: false,
  },
  {
    icon: IconCompass,
    title: "Consultoría y migración de datos",
    description:
      "Auditamos tus procesos actuales, limpiamos y migramos tu información histórica, y acompañamos la adopción del nuevo sistema.",
    points: ["Auditoría de procesos", "Migración de datos históricos"],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Un solo equipo, cuatro formas de ordenar tu operación"
            description="No vendemos licencias de un producto rígido. Construimos el sistema alrededor de cómo tu empresa realmente trabaja."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className={service.featured ? "md:col-span-2" : ""}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  points,
  featured,
}: {
  icon: (props: { className?: string }) => ReactElement;
  title: string;
  description: string;
  points: string[];
  featured: boolean;
}) {
  return (
    <div
      className={`group h-full rounded-2xl border border-[var(--paper-line)] bg-paper-2 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_40px_-24px_rgba(20,18,14,0.35)] ${
        featured ? "sm:p-10" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center rounded-xl bg-ink text-primary-soft ${
          featured ? "h-14 w-14" : "h-12 w-12"
        }`}
      >
        <Icon className={featured ? "h-6 w-6" : "h-5 w-5"} />
      </div>

      <h3 className={`mt-6 font-display tracking-tight text-text-paper ${featured ? "text-2xl" : "text-xl"}`}>
        {title}
      </h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-paper-muted">
        {description}
      </p>

      <ul className="mt-5 flex flex-col gap-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-text-paper">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
