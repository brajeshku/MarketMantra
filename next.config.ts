import type { NextConfig } from "next";

const basePath = "/MarketMantra";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
