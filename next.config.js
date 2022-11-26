/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'https://www.flaticon.com/free-icon/github_2111425'
    ]
  }
}

module.exports = nextConfig
