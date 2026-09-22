export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M8 6c7.5 0 12 4.3 12 10s-4.5 10-12 10"
        stroke="var(--primary)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <rect
        x="10.4"
        y="13.4"
        width="5.2"
        height="5.2"
        rx="1.2"
        transform="rotate(45 13 16)"
        fill="var(--secondary)"
      />
    </svg>
  );
}

export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-xl tracking-tight ${className}`}>
      Devy<span className="text-primary">-Fact</span>
    </span>
  );
}
