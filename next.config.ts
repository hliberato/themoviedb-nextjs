import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w154/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w1280/**',
        search: '',
      },
    ],
  },
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
