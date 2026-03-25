/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
