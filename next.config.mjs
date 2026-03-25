/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force webpack instead of turbopack for stability
  webpack: (config) => config,
};

export default nextConfig;
