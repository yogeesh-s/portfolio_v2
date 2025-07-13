import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/portfolio_v2',
  assetPrefix: '/portfolio_v2/',
  trailingSlash: true,
};

export default nextConfig;
