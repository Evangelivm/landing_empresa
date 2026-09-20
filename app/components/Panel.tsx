import type { ReactNode } from "react";

export function PanelShell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[var(--ink-line-strong)] bg-ink-2 p-5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-[var(--ink-line)] pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="h-2.5 w-2.5 rounded-full bg-secondary-soft/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink-line-strong)]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-ink-muted">
          {label}
        </span>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}
