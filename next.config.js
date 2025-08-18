/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true
  },
  webpack: (config) => {
    config.experiments = { ...(config.experiments || {}), asyncWebAssembly: true };
    return config;
  }
};
module.exports = nextConfig;
