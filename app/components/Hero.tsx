import Image from "next/image";
import { Button, Eyebrow } from "./ui";
import { IconArrowUpRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-ink pb-20 pt-24 sm:pb-28 sm:pt-24"
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

          <h1 className="mt-6 font-display text-4xl leading-[1.12] tracking-tight text-text-ink text-balance sm:text-5xl md:text-6xl">
            El software que por fin entiende{" "}
            <span className="italic text-primary-soft pb-1">cómo opera</span> tu empresa.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-text-ink-muted">
            ERP y software a medida para operaciones que no caben en hojas de
            cálculo. Entregas con el ritmo que tu proyecto necesita, sin intermediarios.
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
        </div>

        <LogoShowcase />
      </div>
    </section>
  );
}

function LogoShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-secondary/15 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="rotate-[-2deg]">
        <div className="motion-safe:animate-[float_7s_ease-in-out_infinite]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--ink-line-strong)] bg-ink-2 p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
              <Image
                src="/brand/devy-fact-logo.jpg"
                alt="Devy-Fact"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="motion-safe:animate-[float_5s_ease-in-out_infinite] absolute -left-4 top-10 hidden sm:block"
        aria-hidden
      >
        <div className="h-8 w-8 rotate-45 rounded-md bg-primary/80" />
      </div>
      <div
        className="motion-safe:animate-[float_6s_ease-in-out_infinite_1s] absolute -right-3 bottom-16 hidden sm:block"
        aria-hidden
      >
        <div className="h-6 w-6 rotate-45 rounded-md bg-secondary/80" />
      </div>
    </div>
  );
}
