import { PanelShell } from "./Panel";
import { Button, Eyebrow } from "./ui";
import { IconArrowUpRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-ink pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Ambient backdrop: thin flow-line rings, alternating primary/secondary instead of a single flat tint */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
        <svg
          className="absolute -right-24 top-0 h-[560px] w-[560px] sm:h-[720px] sm:w-[720px]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="199" className="text-primary-soft/40" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="200" cy="200" r="150" className="text-secondary-soft/40" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="200" cy="200" r="100" className="text-primary-soft/40" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:px-8">
        <div>
          <Eyebrow tone="ink">Desarrollo de software · ERP a medida</Eyebrow>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-text-ink text-balance sm:text-5xl md:text-6xl">
            El software que por fin entiende{" "}
            <span className="italic text-primary-soft">cómo opera</span> tu empresa.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-text-ink-muted">
            Diseñamos y construimos ERP y sistemas a medida para operaciones que
            ya se quedaron cortas en hojas de cálculo y software genérico.
            Arquitectura clara, entregas cada dos semanas y un equipo de
            ingeniería al que le hablas directamente — sin intermediarios.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#contacto" variant="primary">
              Agenda una consultoría
              <IconArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="#proceso" variant="ghost-ink">
              Cómo trabajamos
            </Button>
          </div>
          <p className="mt-4 text-xs text-text-ink-muted">
            Primera llamada sin costo · Respondemos en menos de 24&nbsp;horas
          </p>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--ink-line)] pt-8">
            <div>
              <dt className="font-display text-2xl text-text-ink">100%</dt>
              <dd className="mt-1 text-xs leading-snug text-text-ink-muted">
                Sistemas construidos a medida, sin licencias por asiento
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-text-ink">2&nbsp;sem.</dt>
              <dd className="mt-1 text-xs leading-snug text-text-ink-muted">
                Ciclo de entrega e iteración con tu equipo
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-text-ink">0</dt>
              <dd className="mt-1 text-xs leading-snug text-text-ink-muted">
                Capas de venta entre tú y quien programa
              </dd>
            </div>
          </dl>
        </div>

        <HeroPanel />
      </div>
    </section>
  );
}

function HeroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden />

      <div className="rotate-[1.2deg]">
        <PanelShell label="Panel operativo">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[var(--ink-line)] bg-ink p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-ink-muted">
                Inventario
              </p>
              <p className="mt-2 font-display text-2xl text-text-ink">1,284</p>
              <p className="mt-1 text-[11px] text-secondary-soft">+4.2% vs. mes anterior</p>
            </div>
            <div className="rounded-xl border border-[var(--ink-line)] bg-ink p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-ink-muted">
                Órdenes activas
              </p>
              <p className="mt-2 font-display text-2xl text-text-ink">86</p>
              <p className="mt-1 text-[11px] text-primary-soft">12 por aprobar</p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-[var(--ink-line)] bg-ink p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-ink-muted">
                Flujo de caja proyectado
              </p>
              <span className="font-mono text-[10px] text-secondary-soft">90 días</span>
            </div>
            <div className="mt-4 flex h-16 items-end gap-1.5">
              {[38, 52, 44, 66, 58, 74, 62, 80, 70, 88, 76, 94].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-secondary to-primary-soft"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl border border-[var(--ink-line)] bg-ink px-4 py-3">
            <span className="text-xs text-text-ink-muted">Sincronizado con contabilidad</span>
            <span className="flex h-2 w-2 rounded-full bg-secondary-soft" />
          </div>
        </PanelShell>
      </div>
    </div>
  );
}
