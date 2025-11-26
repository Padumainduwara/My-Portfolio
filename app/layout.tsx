import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts setup (Optimized)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Viewport settings for mobile theme colors
export const viewport: Viewport = {
  themeColor: "#020010",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// --- ADVANCED SEO SETUP ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.padumainduwara.me'), // Oyage domain eka
  title: {
    default: "Paduma Induwara | Software Engineer & Data Scientist",
    template: "%s | Paduma Induwara",
  },
  description: "Portfolio of Paduma Induwara, a Software Engineer & Data Scientist based in Sri Lanka. Specializing in Next.js, AI, Data Science, and Immersive 3D Web Experiences.",
  keywords: [
    "Paduma Induwara",
    "Software Engineer Sri Lanka",
    "Data Scientist",
    "Web Developer",
    "Next.js Developer",
    "React Expert",
    "3D Web Design",
    "AI Engineer",
    "Portfolio",
    "Maharagama"
  ],
  authors: [{ name: "Paduma Induwara", url: "https://www.padumainduwara.me" }],
  creator: "Paduma Induwara",
  publisher: "Paduma Induwara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph (Facebook, LinkedIn, WhatsApp sharing look)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.padumainduwara.me",
    title: "Paduma Induwara | Innovator & Developer",
    description: "Explore the world-class portfolio of Paduma Induwara. Building immersive 3D web experiences and intelligent data solutions.",
    siteName: "Paduma Induwara Portfolio",
    images: [
      {
        url: "/Profile_Pic.png", // Social media wala share weddi penna profile pic eka
        width: 1200,
        height: 630,
        alt: "Paduma Induwara - Software Engineer",
      },
    ],
  },
  // Twitter Card Data
  twitter: {
    card: "summary_large_image",
    title: "Paduma Induwara | Software Engineer & Data Scientist",
    description: "Building the future of web with AI and 3D technologies.",
    images: ["/Profile_Pic.png"],
    creator: "@Padumainduwara",
  },
  // Search Engine Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020010] text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}