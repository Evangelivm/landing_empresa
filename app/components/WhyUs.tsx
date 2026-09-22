import Reveal from "./Reveal";
import { SectionHeading } from "./ui";
import { IconCheck, IconX } from "./icons";

const ROWS = [
  {
    generic: "Pagas por módulos y usuarios que no usas",
    custom: "Solo construimos lo que tu operación necesita hoy",
  },
  {
    generic: "Adaptas tu proceso al software",
    custom: "El sistema se modela a partir de tu proceso real",
  },
  {
    generic: "Soporte por ticket, semanas de espera",
    custom: "Hablas directo con el equipo que construyó tu sistema",
  },
  {
    generic: "Reportes genéricos que exportas a Excel",
    custom: "Tableros pensados para las decisiones que tú tomas",
  },
  {
    generic: "Cambiar de proveedor implica perder tus datos",
    custom: "El código y la base de datos son tuyos, siempre",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              title="El software de catálogo resuelve el 80%. El 20% restante es tu operación."
              description="Ese 20% suele ser justo lo que te hace competitivo: tu forma de fabricar, de dar crédito, de rotar inventario o de facturar. Ahí es donde entramos."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-[var(--paper-line)] bg-paper-2">
              <div className="hidden grid-cols-2 border-b border-[var(--paper-line)] text-xs font-mono uppercase tracking-[0.15em] text-text-paper-muted sm:grid">
                <div className="px-6 py-4">Software genérico</div>
                <div className="border-l border-[var(--paper-line)] px-6 py-4 text-secondary-strong">
                  Construido a medida
                </div>
              </div>
              {ROWS.map((row) => (
                <div
                  key={row.generic}
                  className="grid grid-cols-1 border-b border-[var(--paper-line)] last:border-b-0 sm:grid-cols-2"
                >
                  <div className="flex items-start gap-3 px-6 pb-3 pt-5 sm:pb-5">
                    <IconX className="mt-0.5 h-4 w-4 shrink-0 text-text-paper-muted/70" />
                    <p className="text-sm leading-snug text-text-paper-muted">
                      {row.generic}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 px-6 pb-5 pt-1 sm:border-l sm:border-[var(--paper-line)] sm:pt-5">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <p className="text-sm leading-snug text-text-paper">
                      {row.custom}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
