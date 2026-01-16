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

// --- VIEWPORT SETTINGS (Mobile & Core Web Vitals Optimized) ---
export const viewport: Viewport = {
  themeColor: "#020010",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// --- MASTER LEVEL SEO SETUP (E-E-A-T & Semantic SEO) ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.padumainduwara.me'),
  title: {
    default: "Paduma Induwara | Software Engineer & AI Expert Sri Lanka",
    template: "%s | Paduma Induwara",
  },
  description: "Paduma Induwara is a leading Software Engineer & Data Scientist in Sri Lanka. Expert in Next.js, AI, Machine Learning, and 3D Web Development.",
  applicationName: "Paduma Induwara Portfolio",
  authors: [{ name: "Paduma Induwara", url: "https://www.padumainduwara.me" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Paduma Induwara",
    "Induwara",
    "Paduma Induwara Sri Lanka",
    "Software Engineer Colombo",
    "Data Scientist Sri Lanka",
    "AI Engineer Sri Lanka",
    "Next.js Developer Sri Lanka",
    "Web3 Developer Sri Lanka",
    "Three.js Expert",
    "Full Stack Developer Colombo",
    "Freelance Web Developer Sri Lanka",
    "Best Portfolio Website",
    "Software Development Sri Lanka",
    "AI Solutions Sri Lanka",
    "Machine Learning Expert",
    "Cloud Computing Sri Lanka",
    "Tech Innovator Sri Lanka",
    "Software Development Services",
    "Sinhala Tech",
    "Colombo Tech",
    "Maharagama Tech"
  ],
  creator: "Paduma Induwara",
  publisher: "Paduma Induwara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Technical SEO & Crawling
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
  // International SEO
  alternates: {
    canonical: "https://www.padumainduwara.me",
    languages: {
      'en-US': 'https://www.padumainduwara.me',
      'en-LK': 'https://www.padumainduwara.me',
    },
  },
  // Local SEO & Geo-Targeting
  other: {
    "geo.region": "LK-1", 
    "geo.placename": "Pannipitiya, Maharagama, Colombo",
    "geo.position": "6.8412;79.9654",
    "ICBM": "6.8412, 79.9654"
  },
  // Social SEO (OpenGraph)
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://www.padumainduwara.me",
    title: "Paduma Induwara | Top-Tier Software Engineer & AI Expert",
    description: "Building immersive 3D web experiences and intelligent AI solutions. Discover the work of Sri Lanka's leading tech innovator.",
    siteName: "Paduma Induwara",
    images: [
      {
        url: "/Paduma-Induwara-Profile.png",
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
  verification: {
    google: "L4JwVtm-MNV4dOIOoB23EYrX49y9xQM6bcKXdTdzAMA",
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // --- AEO, SGE & KNOWLEDGE GRAPH SCHEMA (The Secret Sauce) ---
  // Meka nisa thamai Google oyawa 'Entity' ekak widiyata ganne.
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
        "jobTitle": ["Software Engineer", "Data Scientist", "AI Engineer", "Full Stack Developer", "Tech Innovator"],
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
        "knowsAbout": [
          "Software Engineering",
          "Artificial Intelligence",
          "Machine Learning",
          "Next.js",
          "React",
          "Three.js",
          "Data Science",
          "Cloud Computing",
          "SEO Optimization"
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
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & Machine Learning Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3D Web Experiences"
              }
            }
          ]
        }
      },
      // FAQ Schema for AEO (Voice Search & AI Answers)
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Paduma Induwara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paduma Induwara is a highly skilled Software Engineer and Data Scientist based in Sri Lanka, specializing in Next.js, AI, and 3D web technologies."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Paduma Induwara offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "He offers Full Stack Web Development, AI/ML Model Integration, 3D Web Design, and Cloud Solutions."
            }
          }
        ]
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