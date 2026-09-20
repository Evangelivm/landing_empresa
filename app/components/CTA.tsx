import { Button, Eyebrow } from "./ui";
import { IconArrowUpRight } from "./icons";

export default function CTA() {
  return (
    <section id="contacto" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--ink-line)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="flex justify-center">
          <Eyebrow tone="ink">Empecemos</Eyebrow>
        </div>

        <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-[1.1] tracking-tight text-text-ink text-balance sm:text-4xl md:text-5xl">
          Cuéntanos cómo opera tu empresa hoy.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-ink-muted sm:text-lg">
          Una primera llamada de 30 minutos basta para saber si podemos
          ayudarte. Sin propuestas genéricas ni presión de venta.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="mailto:hola@cauce.io" variant="primary">
            Escríbenos a hola@cauce.io
            <IconArrowUpRight className="h-4 w-4" />
          </Button>
          <Button href="tel:+10000000000" variant="ghost-ink">
            +1 (000) 000-0000
          </Button>
        </div>
      </div>
    </section>
  );
}
