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

// --- VIEWPORT SETTINGS (Mobile & UX Optimized) ---
export const viewport: Viewport = {
  themeColor: "#020010",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// --- MASTER LEVEL SEO SETUP (Future-Proof, AI & SGE Ready) ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.padumainduwara.me'),
  title: {
    default: "Paduma Induwara | AI Expert, Data Scientist & Software Engineer Sri Lanka",
    template: "%s | Paduma Induwara",
  },
  description: "Paduma Induwara is a world-class Software Engineer & Data Scientist in Sri Lanka. Specializing in AI, Machine Learning, Next.js, and immersive 3D Web Development for global clients.",
  applicationName: "Paduma Induwara Portfolio",
  authors: [{ name: "Paduma Induwara", url: "https://www.padumainduwara.me" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Core Identity
    "Paduma Induwara", "Induwara Paduma", "Paduma.Dev", "Software Engineer Sri Lanka", 
    "Data Scientist Colombo", "AI Engineer Sri Lanka", 
    // Tech Stack
    "Next.js Developer", "React Expert", "Three.js Developer", "TypeScript Expert", "Tailwind CSS",
    // Specialized Services
    "Custom Web Development", "AI Solutions Provider", "Machine Learning Expert", "Full Stack Developer",
    // Location Based (Local SEO)
    "Web Design Maharagama", "Software Company Colombo", "Freelance Developer Sri Lanka",
    // Future & AI SEO Keywords (SGE/AEO)
    "Generative AI Specialist", "LLM Integration", "Prompt Engineering", "AI Firewall Development", "Automated Web Solutions",
    // Industry & Trust
    "Best Portfolio Website 2026", "Top Tech Talent Sri Lanka", "Kingxer Marketing Solutions"
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
  // International SEO (Global Reach)
  alternates: {
    canonical: "https://www.padumainduwara.me",
    languages: {
      'en-US': 'https://www.padumainduwara.me',
      'en-LK': 'https://www.padumainduwara.me',
      'x-default': 'https://www.padumainduwara.me',
    },
  },
  // Geo-Targeting (Local SEO)
  other: {
    "geo.region": "LK-1", 
    "geo.placename": "Pannipitiya, Maharagama, Colombo",
    "geo.position": "6.8412;79.9654",
    "ICBM": "6.8412, 79.9654",
    "business:contact_data:country_name": "Sri Lanka",
    "business:contact_data:email": "induwarapaduma2002@gmail.com",
    "business:contact_data:phone_number": "+94724113376",
    "business:contact_data:website": "https://www.padumainduwara.me"
  },
  // Social SEO (OpenGraph - Visual SEO)
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
        type: "image/png",
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
  // Search Engine Verification (Add your codes here later if needed)
  verification: {
    google: "L4JwVtm-MNV4dOIOoB23EYrX49y9xQM6bcKXdTdzAMA",
    yandex: "yandex-verification-code",
    other: {
      "bing-site-verification": "bing-verification-code",
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // --- KNOWLEDGE GRAPH SCHEMA (E-E-A-T & AEO Optimized) ---
  // This is the "Secret Sauce" for AI SEO. It tells Google EXACTLY who you are.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.padumainduwara.me/#person",
        "name": "Paduma Induwara",
        "givenName": "Paduma",
        "familyName": "Induwara",
        "alternateName": ["P. Induwara", "Induwara Paduma", "Paduma.Dev"],
        "url": "https://www.padumainduwara.me",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.padumainduwara.me/Paduma-Induwara-Profile.png",
          "width": 1200,
          "height": 630,
          "caption": "Paduma Induwara - Software Engineer"
        },
        // Valid Social Proof (Trust Signals)
        "sameAs": [
          "https://github.com/Padumainduwara",
          "https://linkedin.com/in/padumainduwara",
          "https://twitter.com/Padumainduwara",
          "https://www.instagram.com/paduma.induwara",
          "https://www.facebook.com/paduma.induwara",
          "https://www.padumainduwara.me"
        ],
        "jobTitle": ["Software Engineer", "Data Scientist", "AI Engineer", "Full Stack Developer", "Tech Innovator"],
        "worksFor": {
          "@type": "Organization",
          "name": "Kingxer Marketing Solutions",
          "url": "https://www.padumainduwara.me"
        },
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Cardiff Metropolitan University",
            "sameAs": "https://www.cardiffmet.ac.uk/"
          },
          {
            "@type": "EducationalOrganization",
            "name": "ICBT Campus",
            "sameAs": "https://www.icbt.lk/"
          },
          {
            "@type": "EducationalOrganization",
            "name": "University of Colombo (UCSC)",
            "sameAs": "https://ucsc.cmb.ac.lk/"
          }
        ],
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
          "SEO Optimization",
          "Cloud Computing",
          "Generative AI"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Gemini Certified University Student",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Google"
            }
          },
          {
             "@type": "EducationalOccupationalCredential",
             "name": "GitHub Foundations",
             "recognizedBy": {
               "@type": "Organization",
               "name": "GitHub"
             }
          }
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
      // This helps you appear in "People Also Ask" sections
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
          },
          {
            "@type": "Question",
            "name": "Is Paduma Induwara available for freelance projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Paduma Induwara is currently open for freelance projects and collaborations in software engineering and data science."
            }
          },
          {
             "@type": "Question",
             "name": "Where is Paduma Induwara located?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Paduma operates from Maharagama, Colombo, Sri Lanka, serving clients globally."
             }
          }
        ]
      },
      // Breadcrumb Schema for Site Structure
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.padumainduwara.me"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Experience",
            "item": "https://www.padumainduwara.me/#experience"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Projects",
            "item": "https://www.padumainduwara.me/#projects"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inject Schema into Head */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="LK-1" />
        <meta name="geo.placename" content="Maharagama" />
        <meta name="geo.position" content="6.8412;79.9654" />
        <meta name="ICBM" content="6.8412, 79.9654" />
       <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-0PQMQ2QCKB`} 
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0PQMQ2QCKB', {
                page_path: window.location.pathname,
              });
            `,
          }}
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