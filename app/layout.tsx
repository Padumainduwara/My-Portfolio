import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

// Fonts setup
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

// --- VIEWPORT SETTINGS (Optimized for Mobile & Core Web Vitals) ---
export const viewport: Viewport = {
  themeColor: "#020010",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// --- MASTER LEVEL SEO SETUP (The Brain of Your Site) ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.padumainduwara.me'),
  title: {
    default: "Paduma Induwara | Software Engineer & AI Expert Sri Lanka",
    template: "%s | Paduma Induwara",
  },
  description: "Paduma Induwara is a top-tier Software Engineer, Data Scientist & AI Expert in Sri Lanka. Specializing in Next.js, 3D Web Design, and Cloud Solutions.",
  applicationName: "Paduma Induwara Portfolio",
  authors: [{ name: "Paduma Induwara", url: "https://www.padumainduwara.me" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Paduma Induwara",
    "Paduma Induwara Sri Lanka",
    "Paduma",
    "Induwara",
    "Software Engineer Pannipitiya",
    "Data Scientist Sri Lanka",
    "AI Engineer Sri Lanka",
    "Next.js Expert",
    "React Developer",
    "Three.js Developer",
    "Web3 Developer",
    "Maharagama Tech",
    "Colombo Software Engineer",
    "Freelance Web Developer Sri Lanka",
    "Best Portfolio Website",
    "Innovative Web Solutions",
    "Sinhala Tech",
    "Software Development Sri Lanka"
  ],
  creator: "Paduma Induwara",
  publisher: "Paduma Induwara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Robots & Crawling (Technical SEO - Max Visibility)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Canonical & Languages (International SEO)
  alternates: {
    canonical: "https://www.padumainduwara.me",
    languages: {
      'en-US': 'https://www.padumainduwara.me',
      'en-LK': 'https://www.padumainduwara.me',
    },
  },
  // Geo-Targeting (Local SEO - Pannipitiya/Colombo Focus)
  other: {
    "geo.region": "LK-1", // Western Province
    "geo.placename": "Pannipitiya, Maharagama, Colombo",
    "geo.position": "6.8412;79.9654",
    "ICBM": "6.8412, 79.9654"
  },
  // Social Media & Sharing (Social SEO / SXO)
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://www.padumainduwara.me",
    title: "Paduma Induwara | Innovator & Developer",
    description: "Building immersive 3D web experiences and intelligent AI data solutions. The official portfolio of Paduma Induwara.",
    siteName: "Paduma Induwara",
    images: [
      {
        url: "/Paduma-Induwara-Profile.png", // Ensure this is high res
        width: 1200,
        height: 630,
        alt: "Paduma Induwara - AI & Software Engineer Sri Lanka",
      },
    ],
    firstName: "Paduma",
    lastName: "Induwara",
    username: "padumainduwara",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paduma Induwara | AI & Web Innovator",
    description: "Top-tier Software Engineer & Data Scientist in Sri Lanka.",
    images: ["/Paduma-Induwara-Profile.png"],
    creator: "@Padumainduwara",
    site: "@Padumainduwara",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // Search Engine Verification
  verification: {
    google: "L4JwVtm-MNV4dOIOoB23EYrX49y9xQM6bcKXdTdzAMA",
    // Add Bing/Yandex codes here if you have them for broader coverage
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // --- AEO & SGE SCHEMA (The "Secret Sauce" for AI & Knowledge Graph) ---
  // This helps Google Gemini, ChatGPT, and SGE understand WHO you are.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.padumainduwara.me/#person",
        "name": "Paduma Induwara",
        "givenName": "Paduma",
        "familyName": "Induwara",
        "alternateName": ["Paduma", "Induwara", "P. Induwara", "Paduma Induwara Sri Lanka"],
        "url": "https://www.padumainduwara.me",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.padumainduwara.me/Paduma-Induwara-Profile.png",
          "width": 1200,
          "height": 630,
          "caption": "Paduma Induwara - Software Engineer"
        },
        "sameAs": [
          "https://github.com/Padumainduwara",
          "https://linkedin.com/in/padumainduwara",
          "https://twitter.com/Padumainduwara",
          "https://www.instagram.com/padumainduwara",
          "https://www.facebook.com/padumainduwara",
          "https://www.padumainduwara.me"
        ],
        "jobTitle": ["Software Engineer", "Data Scientist", "AI Engineer", "Full Stack Developer"],
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Open for Work"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pannipitiya",
          "addressRegion": "Western Province",
          "addressCountry": "LK"
        },
        "nationality": {
          "@type": "Country",
          "name": "Sri Lanka"
        },
        // E-E-A-T: Demonstrating Expertise & Authority
        "knowsAbout": [
          { "@type": "Thing", "name": "Software Engineering" },
          { "@type": "Thing", "name": "Artificial Intelligence" },
          { "@type": "Thing", "name": "Machine Learning" },
          { "@type": "Thing", "name": "Next.js" },
          { "@type": "Thing", "name": "React" },
          { "@type": "Thing", "name": "Three.js" },
          { "@type": "Thing", "name": "Data Science" },
          { "@type": "Thing", "name": "Cloud Computing" }
        ],
        "description": "Paduma Induwara is a visionary Software Engineer and Data Scientist from Sri Lanka, creating next-gen web applications and AI solutions."
      },
      {
        "@type": "WebSite",
        "@id": "https://www.padumainduwara.me/#website",
        "url": "https://www.padumainduwara.me",
        "name": "Paduma Induwara Portfolio",
        "description": "The official portfolio of Paduma Induwara - Sri Lanka's leading AI & Web Expert.",
        "publisher": {
          "@id": "https://www.padumainduwara.me/#person"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.padumainduwara.me/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService", 
        "@id": "https://www.padumainduwara.me/#service",
        "name": "Paduma Induwara Tech Solutions",
        "image": "https://www.padumainduwara.me/Paduma-Induwara-Profile.png",
        "url": "https://www.padumainduwara.me",
        "telephone": "+94724113376",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pannipitiya",
          "addressRegion": "Western Province",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.8412,
          "longitude": 79.9654
        },
        "areaServed": {
          "@type": "City",
          "name": "Colombo"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020010] text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}