import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Optimization for Visual Search SEO
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com', // Github images allow karanna
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app', // Background patterns
      },
      // Thawa images ena domains methanata add karanna
    ],
    dangerouslyAllowSVG: true,
  },

  // Security Headers for Negative SEO Defense & XEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Wena sites wala oyage site eka pennanna ba (Security)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Privacy protection
          },
        ],
      },
    ];
  },
};

export default nextConfig;