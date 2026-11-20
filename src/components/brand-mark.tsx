import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={cn("brand", compact && "brand--compact")} href="#home" aria-label="Market Mantra WealthOrbit home">
      <Image
        className="brand__image"
        src="/market-mantra-logo.svg"
        alt=""
        width={408}
        height={85}
        unoptimized
        preload={!compact}
      />
    </a>
  );
}
