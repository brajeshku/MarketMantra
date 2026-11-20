import type { Metadata } from "next";
import type { ReactNode } from "react";
import { publicAsset } from "@/lib/public-asset";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Market Mantra WealthOrbit | Learn the Market. Build Your Future.",
    template: "%s | Market Mantra WealthOrbit",
  },
  description: "Practical stock market education, structured learning, and mentorship for your investing journey.",
  applicationName: "Market Mantra WealthOrbit",
  openGraph: {
    title: "Market Mantra WealthOrbit",
    description: "Practical stock market education, structured learning, and mentorship for your investing journey.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: publicAsset("/favicon.svg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
