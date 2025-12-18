/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'lh3.googleusercontent.com',
      'storage.googleapis.com'
    ],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
