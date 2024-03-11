const million = require('million/compiler')
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },

  async redirects() {
    return [
      {
        source: '/settings',
        destination: '/settings/appearance',
        permanent: true
      }
    ]
  }
}

module.exports = million.next(nextConfig, { auto: { rsc: true } })
