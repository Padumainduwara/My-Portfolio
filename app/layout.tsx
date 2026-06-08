import type { Metadata, Viewport } from "next";
// Geist අයින් කරලා Plus Jakarta Sans සහ JetBrains Mono ගත්තා
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Cursor from "./components/ui/Cursor";
import Footer from "./components/layout/Footer";

// ─── SEO: Analytics + Speed Insights ────────────────────────────────────────
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WebVitalsReporter } from "./lib/web-vitals";

// ─── SEO: Structured Data ────────────────────────────────────────────────────
import AllStructuredData from "./lib/structured-data";
import AnalyticsScripts from "./lib/gtm";
import ServiceWorkerRegister from "./lib/sw-register";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// ─── Viewport (ENHANCED) ─────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020010" },
    { media: "(prefers-color-scheme: light)", color: "#020010" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ─── Metadata (ENHANCED — all original fields preserved + new additions) ──────
export const metadata: Metadata = {
  // Base
  metadataBase: new URL("https://www.padumainduwara.me"),

  // Title
  title: {
    default:
      "Paduma Induwara | AI Expert, Data Scientist & Software Engineer",
    template: "%s | Paduma Induwara",
  },

  // Description
  description:
    "Paduma Induwara is a world-class Software Engineer & Data Scientist specializing in AI, Machine Learning, Next.js, and immersive 3D Web Development.",

  // Keywords (expanded)
  keywords: [
    "Paduma Induwara",
    "Software Engineer Sri Lanka",
    "Data Scientist",
    "AI Engineer",
    "Next.js Developer",
    "React Expert",
    "Full Stack Developer",
    "Machine Learning",
    "Web Developer Sri Lanka",
    "Freelance Developer Colombo",
    "SEO Expert Sri Lanka",
    "Digital Marketing Sri Lanka",
    "Python Developer",
    "TypeScript Expert",
    "3D Web Development",
    "Portfolio",
    "Kingxer Marketing Solutions",
    "Maharagama Developer",
  ],

  // Authorship
  creator: "Paduma Induwara",
  publisher: "Paduma Induwara",
  authors: [
    { name: "Paduma Induwara", url: "https://www.padumainduwara.me" },
  ],

  // Classification
  category: "technology",
  classification: "Software Engineering, Data Science, AI, Web Development",

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Application
  applicationName: "Paduma Induwara Portfolio",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Paduma.Dev",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: false,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Alternates
  alternates: {
    canonical: "https://www.padumainduwara.me",
    languages: {
      en: "https://www.padumainduwara.me",
      si: "https://www.padumainduwara.me",
    },
  },

  // Verification
  verification: {
    google: "e4b628ab63e0609c",
  },

  // Archives / Bookmark
  archives: ["https://www.padumainduwara.me"],
  bookmarks: ["https://www.padumainduwara.me"],

  // OpenGraph
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://www.padumainduwara.me",
    siteName: "Paduma Induwara",
    title: "Paduma Induwara | Top-Tier Software Engineer & AI Expert",
    description:
      "Building immersive 3D web experiences and intelligent AI solutions.",
    images: [
      {
        url: "/Paduma-Induwara-Profile.png",
        width: 1200,
        height: 630,
        alt: "Paduma Induwara — Software Engineer & Data Scientist",
      },
    ],
    firstName: "Paduma",
    lastName: "Induwara",
    username: "padumainduwara",
    countryName: "Sri Lanka",
    emails: ["info@padumainduwara.me"],
    phoneNumbers: ["+94724113376"],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    site: "@Padumainduwara",
    creator: "@Padumainduwara",
    title: "Paduma Induwara | AI & Web Innovator",
    description:
      "Top-tier Software Engineer & Data Scientist in Sri Lanka. Building immersive 3D web experiences and intelligent AI solutions.",
    images: ["/Paduma-Induwara-Profile.png"],
  },

  // Optional: Preconnect hints for performance
  other: {
    "geo.region": "LK-1",
    "geo.placename": "Maharagama",
    "geo.position": "6.8475;79.9251",
    ICBM: "6.8475, 79.9251",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* ── SEO: Preconnect + DNS-Prefetch + LLMO hints ─────────────────── */}
      <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="llms" href="/llms.txt" />
      <link rel="llms-full" href="/llms-full.txt" />
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#020010] text-white selection:bg-purple-500/30 selection:text-white overflow-x-clip`}
      >
        {/* ── A11y: Skip to content (keyboard nav) ──────────────────────── */}
        <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-full focus:outline-none">
          Skip to content
        </a>

        {/* ── SEO: JSON-LD Structured Data ────────────────────────────── */}
        <AllStructuredData />

        {/* ── SEO: Web Vitals Reporter ─────────────────────────────────── */}
        <WebVitalsReporter />

        {/* ── Original Components (UNTOUCHED) ──────────────────────────── */}
        <Cursor />
        <Navbar />
        {children}
        <Footer />

        {/* ── SEO: Vercel Analytics ────────────────────────────────────── */}
        <Analytics />

        {/* ── SEO: Vercel Speed Insights ───────────────────────────────── */}
        <SpeedInsights />

        {/* ── SEO: Analytics (GTM/GA4) ─────────────────────────────────── */}
        <AnalyticsScripts />

        {/* ── SEO: PWA Service Worker ──────────────────────────────────── */}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
