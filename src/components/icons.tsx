import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function icon(children: ReactNode) {
  return function InlineIcon({ size = 18, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {children}
      </svg>
    );
  };
}

export const ArrowRight = icon(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
export const ArrowUpRight = icon(<><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>);
export const Award = icon(<><circle cx="12" cy="9" r="6" /><path d="m8 14-1.5 7L12 18l5.5 3L16 14" /><path d="m10 9 1.4 1.4L14.5 7" /></>);
export const BookOpenCheck = icon(<><path d="M12 7v14" /><path d="M3 18V5a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3 3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v13h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3H3Z" /><path d="m15 11 1.5 1.5L19 10" /></>);
export const ChartCandlestick = icon(<><path d="M5 4v16M12 3v18M19 5v14" /><path d="M3 8h4v5H3zM10 7h4v8h-4zM17 9h4v4h-4z" /></>);
export const BarChart3 = icon(<><path d="M4 19V9" /><path d="M10 19V5" /><path d="M16 19v-8" /><path d="M22 19V3" /><path d="M2 19h21" /></>);
export const CandlestickChart = ChartCandlestick;
export const Check = icon(<path d="m5 12 4 4L19 6" />);
export const ChevronDown = icon(<path d="m6 9 6 6 6-6" />);
export const CircleHelp = icon(<><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.4 2.4 0 1 1 4.2 1.6c-.9.8-1.9 1.2-1.9 2.7" /><path d="M12 17h.01" /></>);
export const CircleDollarSign = icon(<><circle cx="12" cy="12" r="9" /><path d="M16 8.5c-.7-.8-1.8-1.2-3.3-1.2-1.7 0-2.8.8-2.8 2s1 1.7 3 2.1 3.1.9 3.1 2.2-1.2 2.2-3.2 2.2c-1.4 0-2.6-.5-3.5-1.4" /><path d="M12 5.5v13" /></>);
export const Clock3 = icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>);
export const GraduationCap = icon(<><path d="m2 10 10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c3.5 2.5 8.5 2.5 12 0v-5" /><path d="M22 10v6" /></>);
export const HandCoins = icon(<><path d="M11 11h2a3 3 0 0 1 0 6h-2" /><path d="M3 13h5l3 3h5a3 3 0 0 0 3-3l-5-5h-5l-4 3H3" /><circle cx="17.5" cy="5.5" r="2.5" /><path d="M15.5 5.5h4" /></>);
export const LineChart = icon(<><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-5 5" /></>);
export const Mail = icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>);
export const Menu = icon(<><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>);
export const Phone = icon(<path d="M6.6 3.5h2.8l1.3 4-2 1.7a15 15 0 0 0 6.1 6.1l1.7-2 4 1.3v2.8a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />);
export const Play = icon(<path d="m8 5 12 7-12 7V5Z" fill="currentColor" stroke="none" />);
export const ShieldCheck = icon(<><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>);
export const Sparkles = icon(<><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>);
export const UsersRound = icon(<><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.2a4 4 0 0 1 0 7.6" /></>);
export const X = icon(<><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>);
