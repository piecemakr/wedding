import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};

export default nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/maps/:path*',
        destination: 'https://www.google.com/maps/:path*',
      },
    ]
  },
}