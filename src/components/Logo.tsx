type LogoProps = {
  className?: string;
  variant?: "full" | "icon";
  monochrome?: boolean;
};

/**
 * Consultpoints mark: a charcoal tile holding three connected nodes forming
 * an open triangle, with the top node picked out in burnt orange. Reads as
 * "points" on a network that stay in sync, fitting managed IT support and
 * network infrastructure without any location, map, flag, or company-name
 * imagery. Built from simple circles and straight connector lines so it
 * stays crisp at favicon size and scales cleanly on a hero banner alike.
 */
export function LogoMark({ className, monochrome }: { className?: string; monochrome?: boolean }) {
  const charcoal = monochrome ? "currentColor" : "var(--charcoal, #21242B)";
  const paper = monochrome ? "var(--paper, #F7F4EF)" : "var(--paper, #F7F4EF)";
  const ember = monochrome ? "currentColor" : "var(--ember, #C1622A)";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Consultpoints mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="62" height="62" rx="16" fill={charcoal} />
      <path
        d="M32 16 16 44h32L32 16Z"
        fill="none"
        stroke={paper}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="32" cy="16" r="5.5" fill={ember} />
      <circle cx="16" cy="44" r="4.5" fill={paper} />
      <circle cx="48" cy="44" r="4.5" fill={paper} />
    </svg>
  );
}

export function Logo({ className, variant = "full", monochrome }: LogoProps) {
  if (variant === "icon") {
    return <LogoMark className={className} monochrome={monochrome} />;
  }
  return (
    <span className={"inline-flex items-center gap-2.5 " + (className ?? "")}>
      <LogoMark className="h-9 w-9 flex-shrink-0" monochrome={monochrome} />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">
          Consult<span className="text-ember">points</span>
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Managed IT &amp; Network Support
        </span>
      </span>
    </span>
  );
}
