import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',                // enables `next export`
  images: { unoptimized: true },   // needed if you use next/image on static hosts
  // trailingSlash: true,          // (optional) helps with nested-route refreshes
};

export default nextConfig;