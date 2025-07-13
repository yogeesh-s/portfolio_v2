import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  output: 'export', // important for static export
  basePath: '/portfolio_v2',
  assetPrefix: '/portfolio_v2/',
};

export default nextConfig;
