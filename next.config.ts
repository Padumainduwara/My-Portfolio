import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.wp.com', // Screenshot service allowed here
      },
    ],
  },
};

export default nextConfig;