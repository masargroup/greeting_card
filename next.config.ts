import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    API_URL: 'http://localhost:3000/api',
  }
};

export default nextConfig;
