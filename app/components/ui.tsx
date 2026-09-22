import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "paper",
}: {
  children: ReactNode;
  tone?: "paper" | "ink";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] ${
        tone === "ink" ? "text-primary-soft" : "text-primary-strong"
      }`}
    >
      <span
        className={`h-px w-6 ${tone === "ink" ? "bg-primary-soft" : "bg-primary-strong"}`}
        aria-hidden
      />
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-ink";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles: Record<string, string> = {
    primary:
      "bg-primary text-paper hover:bg-primary-strong active:scale-[0.98] shadow-[0_8px_24px_-8px_rgba(29,111,224,0.55)]",
    secondary:
      "border border-[var(--paper-line-strong)] text-text-paper hover:border-primary hover:text-primary-strong",
    "ghost-ink":
      "border border-[var(--ink-line-strong)] text-text-ink hover:border-primary-soft hover:text-primary-soft",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "paper",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  tone?: "paper" | "ink";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`${eyebrow ? "mt-5" : ""} font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.08] tracking-tight text-balance ${
          tone === "ink" ? "text-text-ink" : "text-text-paper"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            tone === "ink" ? "text-text-ink-muted" : "text-text-paper-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Index({ n }: { n: number }) {
  return (
    <span className="font-mono text-xs tracking-[0.2em] text-primary-strong">
      {String(n).padStart(2, "0")}
    </span>
  );
}
