import type { NextConfig } from "next";

// const nextConfig: NextConfig = {};

const nextConfig = {
  output: 'export',
  basePath: '/MarketMantra',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
