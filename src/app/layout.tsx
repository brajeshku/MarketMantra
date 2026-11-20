import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Market Mantra WealthOrbit | Learn the Market. Build Your Future.",
  description: "Practical stock market education, structured learning, and mentorship for your investing journey.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
