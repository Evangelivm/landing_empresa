import { IconGauge, IconHandshake, IconLayers, IconShield } from "./icons";

const ITEMS = [
  {
    icon: IconLayers,
    label: "Arquitectura modular",
    detail: "Cada módulo se puede versionar y escalar por separado",
  },
  {
    icon: IconHandshake,
    label: "Trato directo",
    detail: "Hablas con quien diseña y programa, no con un gestor de cuenta",
  },
  {
    icon: IconGauge,
    label: "Entregas medibles",
    detail: "Demos funcionales en el ritmo que define tu proyecto, no un PDF de avance",
  },
  {
    icon: IconShield,
    label: "Datos bajo tu control",
    detail: "Tu información vive en tu infraestructura, no en la nuestra",
  },
];

export default function TrustStrip() {
  return (
    <div className="border-t border-[var(--ink-line)] bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex flex-col gap-3">
              <Icon className="h-5 w-5 text-primary-soft" />
              <div>
                <p className="text-sm font-medium text-text-ink">{label}</p>
                <p className="mt-1 text-xs leading-snug text-text-ink-muted">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
