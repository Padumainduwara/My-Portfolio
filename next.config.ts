import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance Optimization
  compress: true, 
  reactStrictMode: true,
  poweredByHeader: false, // Security: Hide Next.js branding

  // Image Optimization for Visual Search SEO
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com', 
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app', 
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com', 
      }
    ],
    dangerouslyAllowSVG: true,
  },

  // Security Headers for Negative SEO Defense & Trust
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', 
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
            value: 'camera=(), microphone=(), geolocation=()', 
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload' // HSTS for HTTPS trust
          }
        ],
      },
    ];
  },
};

export default nextConfig;