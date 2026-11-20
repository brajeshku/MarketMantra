import { cn } from "@/lib/utils";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={cn("brand", compact && "brand--compact")} href="#home" aria-label="Market Mantra WealthOrbit home">
      <span className="brand__symbol" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M5 37 16.5 24l7.2 6.6L42 8" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M31.5 8H42v10.5" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 39h35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".55" />
        </svg>
      </span>
      <span className="brand__copy">
        <strong>MARKET MANTRA</strong>
        <span>WEALTHORBIT</span>
        {!compact && <small>Stock Market Education &amp; Training Institute</small>}
      </span>
    </a>
  );
}
