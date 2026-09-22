import Reveal from "./Reveal";

const COMMITMENTS = [
  {
    title: "Código sin dependencias ocultas",
    description:
      "Documentado y estructurado para que cualquier desarrollador, tuyo o de otro estudio, pueda continuarlo.",
  },
  {
    title: "Alcance sin letra chica",
    description:
      "Definimos tiempos, entregables y costos desde el primer contrato. Sin sorpresas a mitad de proyecto.",
  },
  {
    title: "Acompañamiento post-lanzamiento",
    description:
      "El proyecto no termina el día del arranque. Seguimos ahí mientras tu equipo se adapta al sistema.",
  },
];

export default function Manifesto() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <blockquote className="max-w-3xl font-display text-2xl leading-[1.35] tracking-tight text-text-paper text-balance sm:text-3xl md:text-[2.25rem]">
            &ldquo;No creemos en implementar un sistema y desaparecer.
            Creemos en construir algo que tu equipo entienda, pueda mantener
            y quiera seguir usando dentro de tres años.&rdquo;
          </blockquote>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-text-paper-muted">
            Equipo de ingeniería, Devy-Fact
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col border-t border-[var(--paper-line)]">
          {COMMITMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="grid grid-cols-1 gap-2 border-b border-[var(--paper-line)] py-7 sm:grid-cols-[1fr_1.6fr] sm:items-baseline sm:gap-10">
                <h3 className="font-display text-lg text-text-paper">
                  {item.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-text-paper-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
