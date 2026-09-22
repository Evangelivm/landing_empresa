import Reveal from "./Reveal";
import { Index, SectionHeading } from "./ui";

const STEPS = [
  {
    title: "Descubrimiento",
    description:
      "Mapeamos tus procesos actuales y hablamos con quienes los operan día a día para definir un alcance real, no uno de folleto.",
  },
  {
    title: "Arquitectura",
    description:
      "Diseñamos la estructura de datos, módulos e integraciones antes de escribir una sola línea del producto final.",
  },
  {
    title: "Desarrollo iterativo",
    description:
      "Construimos en ciclos de dos semanas con demos funcionales sobre datos reales, no maquetas estáticas.",
  },
  {
    title: "Implementación y capacitación",
    description:
      "Migramos tu información histórica, capacitamos a tu equipo y acompañamos el arranque en producción.",
  },
  {
    title: "Soporte continuo",
    description:
      "Seguimos ajustando el sistema conforme tu operación crece, cambia de proceso o abre una nueva línea de negocio.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Un método pensado para no sorprenderte a mitad de camino"
            description="Cinco etapas visibles de principio a fin. Sabes en qué semana estás y qué vas a ver en la siguiente demo."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="relative pl-6 lg:pl-0">
                <div className="lg:hidden absolute left-0 top-1.5 h-full w-px bg-[var(--paper-line)]" aria-hidden />
                <div className="flex items-center gap-3 lg:block">
                  <Index n={i + 1} />
                  <div className="mt-0 hidden h-px flex-1 bg-[var(--paper-line)] lg:mt-4 lg:block" aria-hidden />
                </div>
                <h3 className="mt-3 font-display text-lg text-text-paper">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-paper-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
