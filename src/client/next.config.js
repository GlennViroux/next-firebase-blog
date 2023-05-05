/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '../../dist/client',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
