import type { NextConfig } from "next";

const basePath = "/MarketMantra";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
