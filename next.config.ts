import type { NextConfig } from "next";

/* ──────────────────────────────────────────────────────────────────────────
   Content Security Policy — allows Spline 3D, GitHub API, Web3Forms,
   Vercel Analytics/Speed Insights, Google Analytics/Tag Manager.
   ────────────────────────────────────────────────────────────────────────── */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https:;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https: blob:;
  font-src 'self' data:;
  connect-src 'self' https:;
  frame-src 'self' https://*.spline.design https://my.spline.design;
  worker-src 'self' blob: https:;
  media-src 'self' blob: data: https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://api.web3forms.com;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  /* ── Existing config (UNTOUCHED) ────────────────────────────────────── */
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,

  /* ── Security Headers (ADDED) ───────────────────────────────────────── */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          ...(process.env.NODE_ENV === "production"
            ? [
                {
                  key: "Content-Security-Policy",
                  value: ContentSecurityPolicy,
                },
              ]
            : []),
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          {
            key: "Expect-CT",
            value: "max-age=86400, enforce, report-uri=https://padumainduwara.me/report",
          },
          {
            key: "NEL",
            value: '{"report_to":"default","max_age":2592000}',
          },
          {
            key: "Report-To",
            value: '{"group":"default","max_age":2592000,"endpoints":[{"url":"https://padumainduwara.me/report"}]}',
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(svg|png|jpg|jpeg|webp|avif|ico|woff2|css|js)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* ── Existing images config (FIXED) ─────────────────────────────── */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
    dangerouslyAllowSVG: true,
  },

  // Disable source maps in production (security + performance)
  productionBrowserSourceMaps: false,

  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@splinetool/react-spline",
    ],
  },
};

export default nextConfig;