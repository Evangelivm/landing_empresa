"use client";

import { useState } from "react";
import { PanelShell } from "./Panel";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const TABS = [
  {
    id: "inventario",
    label: "Inventario en tiempo real",
    description:
      "Cada movimiento de almacén se refleja al instante en compras, producción y ventas. Sin conciliar hojas de cálculo al final del mes.",
  },
  {
    id: "finanzas",
    label: "Finanzas y flujo de caja",
    description:
      "Cuentas por cobrar, por pagar y proyección de caja en un solo lugar, conectadas a lo que realmente está pasando en la operación.",
  },
  {
    id: "aprobaciones",
    label: "Aprobaciones y flujos",
    description:
      "Define quién autoriza qué —una compra, un descuento, un ajuste de inventario— y deja que el sistema lo haga cumplir.",
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function FeatureSpotlight() {
  const [active, setActive] = useState<TabId>("inventario");

  return (
    <section id="producto" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="ink"
            eyebrow="Dentro del sistema"
            title="Un ERP se juzga por lo que hace un martes cualquiera a las 9am"
            description="Así se ven tres de los módulos más usados una vez que el sistema está en producción."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
              {TABS.map((tab) => {
                const isActive = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-xl border px-5 py-4 text-left transition-colors duration-200 lg:shrink ${
                      isActive
                        ? "border-primary/60 bg-ink-2"
                        : "border-[var(--ink-line)] hover:border-[var(--ink-line-strong)]"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "text-primary-soft" : "text-text-ink"
                      }`}
                    >
                      {tab.label}
                    </p>
                    <p className="mt-1 hidden max-w-xs text-xs leading-relaxed text-text-ink-muted lg:block">
                      {tab.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden />
              {active === "inventario" && <InventoryPanel />}
              {active === "finanzas" && <FinancePanel />}
              {active === "aprobaciones" && <ApprovalsPanel />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InventoryPanel() {
  const rows = [
    { name: "Placa de acero 3mm", stock: 842, status: "ok" as const },
    { name: "Motor 1.5HP", stock: 12, status: "low" as const },
    { name: "Empaque hermético", stock: 3, status: "critical" as const },
    { name: "Tornillo M6x20", stock: 5210, status: "ok" as const },
  ];
  const dot = { ok: "bg-secondary-soft", low: "bg-primary-soft", critical: "bg-primary" };

  return (
    <PanelShell label="Inventario">
      <div className="flex flex-col gap-2.5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-lg border border-[var(--ink-line)] bg-ink px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className={`h-2 w-2 shrink-0 rounded-full ${dot[row.status]}`} />
              <span className="text-sm text-text-ink">{row.name}</span>
            </div>
            <span className="font-mono text-xs text-text-ink-muted">
              {row.stock.toLocaleString("es")} u.
            </span>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

function FinancePanel() {
  const bars = [38, 52, 44, 66, 58, 74, 62, 80, 70, 88, 76, 94];
  return (
    <PanelShell label="Finanzas">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[var(--ink-line)] bg-ink p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-ink-muted">
            Por cobrar
          </p>
          <p className="mt-2 font-display text-2xl text-text-ink">$482,300</p>
          <p className="mt-1 text-[11px] text-secondary-soft">18 clientes al corriente</p>
        </div>
        <div className="rounded-xl border border-[var(--ink-line)] bg-ink p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-ink-muted">
            Por pagar
          </p>
          <p className="mt-2 font-display text-2xl text-text-ink">$196,150</p>
          <p className="mt-1 text-[11px] text-primary-soft">3 vencen esta semana</p>
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
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-secondary to-primary-soft"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </PanelShell>
  );
}

function ApprovalsPanel() {
  const items = [
    { name: "Compra · Insumos línea 2", by: "M. Alvarado", status: "Pendiente" as const },
    { name: "Ajuste de inventario #4521", by: "J. Ríos", status: "Aprobado" as const },
    { name: "Descuento cliente mayorista", by: "L. Pineda", status: "Pendiente" as const },
    { name: "Orden de compra #889", by: "M. Alvarado", status: "Rechazado" as const },
  ];
  const styles = {
    Pendiente: "text-primary-soft border-primary/40",
    Aprobado: "text-secondary-soft border-secondary-soft/40",
    Rechazado: "text-text-ink-muted border-[var(--ink-line-strong)]",
  };

  return (
    <PanelShell label="Aprobaciones">
      <div className="flex flex-col gap-2.5">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-lg border border-[var(--ink-line)] bg-ink px-4 py-3"
          >
            <div>
              <p className="text-sm text-text-ink">{item.name}</p>
              <p className="mt-0.5 text-xs text-text-ink-muted">{item.by}</p>
            </div>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${styles[item.status]}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}
