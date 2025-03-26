import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    API_URL: 'http://localhost:3000/api',
    MONGODB_URI: 'mongodb+srv://greetingcard486:Mypass50@cluster0.bawjj.mongodb.net/'
  }
};

export default nextConfig;
