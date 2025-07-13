import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.ENV === 'development' ? '' : '/portfolio_v2',
  assetPrefix: process.env.ENV === 'development' ? '' : '/portfolio_v2/',
  trailingSlash: true,
};

export default nextConfig;
