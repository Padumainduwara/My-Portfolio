import React from 'react';

/* ==========================================================================
   JSON-LD Structured Data — Schema.org
   All schemas injected via <script type="application/ld+json">
   Zero visual impact. Pure SEO signal for Google, Bing, Yandex, Baidu.
   ========================================================================== */

// ─── Person Schema ───────────────────────────────────────────────────────────
export function PersonSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Paduma Induwara',
    givenName: 'Paduma',
    familyName: 'Induwara',
    alternateName: 'Paduma.Dev',
    url: 'https://www.padumainduwara.me',
    image: 'https://www.padumainduwara.me/Paduma-Induwara-Profile.png',
    jobTitle: 'Software Engineer & Data Scientist',
    description:
      'World-class Software Engineer & Data Scientist specializing in AI, Machine Learning, Next.js, and immersive 3D Web Development.',
    birthPlace: { '@type': 'Place', name: 'Sri Lanka' },
    nationality: { '@type': 'Country', name: 'LK' },
    knowsLanguage: [
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Sinhala' },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Next.js',
      'React',
      'Full Stack Development',
      'Search Engine Optimization',
      'Digital Marketing',
      'Python',
      'TypeScript',
      'Node.js',
      'Tailwind CSS',
      '3D Web Development',
      'Framer Motion',
    ],
    sameAs: [
      'https://github.com/Padumainduwara',
      'https://linkedin.com/in/padumainduwara',
      'https://facebook.com/padumainduwara',
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Cardiff Metropolitan University' },
      { '@type': 'CollegeOrUniversity', name: 'ICBT Campus' },
      { '@type': 'CollegeOrUniversity', name: 'University of Colombo (UCSC)' },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Kingxer Marketing Solutions',
      url: 'https://www.padumainduwara.me',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@padumainduwara.me',
      telephone: '+94724113376',
      contactType: 'customer service',
      availableLanguage: ['English', 'Sinhala'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maharagama',
      addressCountry: 'LK',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── WebSite Schema (with Sitelinks Searchbox) ──────────────────────────────
export function WebSiteSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Paduma Induwara',
    alternateName: 'Paduma.Dev',
    url: 'https://www.padumainduwara.me',
    description:
      'Paduma Induwara is a world-class Software Engineer & Data Scientist specializing in AI, Machine Learning, Next.js, and immersive 3D Web Development.',
    inLanguage: 'en',
    copyrightYear: new Date().getFullYear(),
    datePublished: '2022-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://www.padumainduwara.me/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── BreadcrumbList Schema ───────────────────────────────────────────────────
export function BreadcrumbSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.padumainduwara.me',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: 'https://www.padumainduwara.me/#hero',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── Organization Schema ─────────────────────────────────────────────────────
export function OrganizationSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kingxer Marketing Solutions',
    alternateName: 'Paduma Induwara Freelance',
    url: 'https://www.padumainduwara.me',
    logo: 'https://www.padumainduwara.me/Paduma-Induwara-Profile.png',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Paduma Induwara',
    },
    description:
      'Leading digital marketing strategies and developing innovative software solutions for clients worldwide.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maharagama',
      addressCountry: 'LK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@padumainduwara.me',
      telephone: '+94724113376',
      contactType: 'customer service',
      availableLanguage: ['English', 'Sinhala'],
    },
    sameAs: [
      'https://github.com/Padumainduwara',
      'https://linkedin.com/in/padumainduwara',
      'https://facebook.com/padumainduwara',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── FAQPage Schema ──────────────────────────────────────────────────────────
export function FAQSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Paduma Induwara offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Modern Web Development with Next.js & React, Custom Software Solutions, AI & Automation Integration, SEO Optimization, and Digital Marketing & Branding.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Paduma Induwara based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Paduma Induwara is based in Maharagama, Sri Lanka, serving clients worldwide with remote software engineering and digital marketing services.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Paduma Induwara specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'React, Next.js, Node.js, TypeScript, Python, Data Science, Machine Learning, Tailwind CSS, Framer Motion, GSAP, and full-stack web development with 3D immersive experiences.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Paduma Induwara for a project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach Paduma Induwara via email at info@padumainduwara.me, by phone at +94 72 411 3376, or through the contact form on the website.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Paduma Induwara available for freelance projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Paduma Induwara is currently available for new projects. He offers freelance software engineering, data science consulting, SEO optimization, and digital marketing services.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── ProfilePage Schema ──────────────────────────────────────────────────────
export function ProfilePageSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Paduma Induwara — Software Engineer & Data Scientist',
    description:
      'Professional portfolio of Paduma Induwara, a world-class Software Engineer and Data Scientist from Sri Lanka.',
    mainEntity: {
      '@type': 'Person',
      name: 'Paduma Induwara',
      jobTitle: 'Software Engineer & Data Scientist',
      image: 'https://www.padumainduwara.me/Paduma-Induwara-Profile.png',
      sameAs: [
        'https://github.com/Padumainduwara',
        'https://linkedin.com/in/padumainduwara',
        'https://facebook.com/padumainduwara',
      ],
    },
    hasPart: [
      {
        '@type': 'WebPageElement',
        name: 'Work Experience',
        description:
          'Professional experience at Kingxer Marketing Solutions, ICBT Campus, FALCONET, and Colombo Dockyard PLC.',
      },
      {
        '@type': 'WebPageElement',
        name: 'Education',
        description:
          'BSc Data Science from Cardiff Metropolitan University, Higher Diploma in Computing from ICBT Campus.',
      },
      {
        '@type': 'WebPageElement',
        name: 'Certifications',
        description:
          'Google Gemini Certified, GitHub Foundations, Microsoft Responsible AI, UNICEF Data Management, Meta Digital Marketing Associate.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── SoftwareApplication Schema ──────────────────────────────────────────────
export function SoftwareApplicationSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Paduma Induwara Portfolio',
    applicationCategory: 'WebApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Paduma Induwara',
      url: 'https://www.padumainduwara.me',
    },
    datePublished: '2022-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    description:
      'Immersive 3D portfolio website for Paduma Induwara, Software Engineer and Data Scientist.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── Service Schema (for each service offered) ────────────────────────────────
export function ServiceSchema() {
  const services = [
    {
      name: 'Modern Web Development',
      description:
        'Crafting blazing-fast, responsive web applications using Next.js, React, and server-side architecture for next-gen performance.',
      serviceType: 'Web Development',
      areaServed: { '@type': 'Country', name: 'Worldwide' },
    },
    {
      name: 'Custom Software Solutions',
      description:
        'Scalable enterprise-grade software engineered for precision, security, and high-load business environments.',
      serviceType: 'Software Development',
      areaServed: { '@type': 'Country', name: 'Worldwide' },
    },
    {
      name: 'Search Engine Optimization (SEO)',
      description:
        'AI-driven SEO strategies that dominate search rankings and drive organic growth through data-backed content architecture.',
      serviceType: 'SEO Services',
      areaServed: { '@type': 'Country', name: 'Worldwide' },
    },
    {
      name: 'AI & Automation Integration',
      description:
        'Harnessing LLMs and autonomous agents to automate complex business workflows, saving time and increasing operational ROI.',
      serviceType: 'AI Consulting',
      areaServed: { '@type': 'Country', name: 'Worldwide' },
    },
    {
      name: 'Digital Marketing & Branding',
      description:
        'Crafting compelling visual identities and high-conversion marketing campaigns that resonate with modern audiences.',
      serviceType: 'Digital Marketing',
      areaServed: { '@type': 'Country', name: 'Worldwide' },
    },
  ];

  return (
    <>
      {services.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: s.name,
              description: s.description,
              provider: {
                '@type': 'Person',
                name: 'Paduma Induwara',
                url: 'https://www.padumainduwara.me',
                image:
                  'https://www.padumainduwara.me/Paduma-Induwara-Profile.png',
                jobTitle: 'Software Engineer & Data Scientist',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Maharagama',
                  addressCountry: 'LK',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'info@padumainduwara.me',
                  telephone: '+94724113376',
                  contactType: 'customer service',
                },
              },
              serviceType: s.serviceType,
              areaServed: s.areaServed,
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      ))}
    </>
  );
}

// ─── LocalBusiness Schema ─────────────────────────────────────────────────────
export function LocalBusinessSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Paduma Induwara — Software Engineer & Data Scientist',
    alternateName: 'Paduma.Dev Freelance Services',
    url: 'https://www.padumainduwara.me',
    logo: 'https://www.padumainduwara.me/Paduma-Induwara-Profile.png',
    image: 'https://www.padumainduwara.me/Paduma-Induwara-Profile.png',
    description:
      'World-class Software Engineer & Data Scientist offering freelance services in Next.js, React, Python, AI/ML, and SEO. Based in Maharagama, Sri Lanka, serving clients worldwide.',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Paduma Induwara',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maharagama',
      addressRegion: 'Western Province',
      addressCountry: 'LK',
      postalCode: '10280',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.8475,
      longitude: 79.9251,
    },
    telephone: '+94724113376',
    email: 'info@padumainduwara.me',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: [
      { '@type': 'Country', name: 'Sri Lanka' },
      { '@type': 'Continent', name: 'Worldwide' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Freelance Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI/ML Consulting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
      ],
    },
    sameAs: [
      'https://github.com/Padumainduwara',
      'https://linkedin.com/in/padumainduwara',
      'https://facebook.com/padumainduwara',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── Speakable Schema (Voice Search) ──────────────────────────────────────────
export function SpeakableSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Paduma Induwara — AI Expert, Data Scientist & Software Engineer',
    speakable: {
      '@type': 'SpeakableSpecification',
      xpath: [
        '/html/head/title',
        '/html/head/meta[@name="description"]/@content',
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── Review Schema (Testimonials) ─────────────────────────────────────────────
export function ReviewSchema() {
  const reviews = [
    { name: 'Sanjeiwa Rathnayake', role: 'CEO, Fitlines Wellness', text: 'Paduma is an exceptional developer who delivered our project on time with amazing quality. His understanding of both software and wellness needs was impressive.', rating: 5 },
    { name: 'Sandani Hettiarachchi', role: 'Senior ICT Teacher', text: 'His technical skills in software engineering and data science are truly impressive. A very dedicated and talented individual.', rating: 5 },
    { name: 'Kasun Perera', role: 'Project Manager, TechLK', text: 'Working with Paduma was a breeze. He translated our complex requirements into a sleek, functional web application flawlessly.', rating: 5 },
    { name: 'Sarah Jenkins', role: 'Marketing Director', text: 'The digital marketing strategies and web optimization Paduma implemented doubled our online conversions in just two months!', rating: 5 },
    { name: 'Malith Jayasinghe', role: 'Founder, EduTech', text: 'A true professional. His expertise in React and full-stack development gave our educational platform the performance boost it needed.', rating: 5 },
    { name: 'Natasha Fernando', role: 'Creative Director', text: 'I highly recommend him! Paduma has a rare eye for both beautiful UI design and robust backend architecture.', rating: 5 },
    { name: 'Ryan Morrison', role: 'Operations Head', text: 'He automated our workflows using AI integration perfectly. Were saving hours of manual data entry every single day.', rating: 5 },
    { name: 'Kavindi Silva', role: 'Lead Designer', text: 'Collaborating with him was a great experience. He brought my Figma designs to life exactly pixel-by-pixel with smooth animations.', rating: 5 },
  ];

  return (
    <>
      {reviews.map((r, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Review',
              author: { '@type': 'Person', name: r.name, jobTitle: r.role },
              reviewBody: r.text,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: r.rating,
                bestRating: 5,
                worstRating: 1,
              },
              itemReviewed: {
                '@type': 'ProfessionalService',
                name: 'Paduma Induwara — Software Engineer & Data Scientist',
                url: 'https://www.padumainduwara.me',
              },
            }),
          }}
        />
      ))}
    </>
  );
}

// ─── SiteNavigationElement Schema ─────────────────────────────────────────────
export function SiteNavigationSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Main Navigation',
    url: 'https://www.padumainduwara.me',
    hasPart: [
      { '@type': 'SiteNavigationElement', name: 'Home', url: 'https://www.padumainduwara.me/#hero' },
      { '@type': 'SiteNavigationElement', name: 'About', url: 'https://www.padumainduwara.me/#about' },
      { '@type': 'SiteNavigationElement', name: 'Experience', url: 'https://www.padumainduwara.me/#experience' },
      { '@type': 'SiteNavigationElement', name: 'Projects', url: 'https://www.padumainduwara.me/#hosted-projects' },
      { '@type': 'SiteNavigationElement', name: 'Services', url: 'https://www.padumainduwara.me/#services' },
      { '@type': 'SiteNavigationElement', name: 'Education', url: 'https://www.padumainduwara.me/#education' },
      { '@type': 'SiteNavigationElement', name: 'Certifications', url: 'https://www.padumainduwara.me/#certifications' },
      { '@type': 'SiteNavigationElement', name: 'Tech Stack', url: 'https://www.padumainduwara.me/#tech-stack' },
      { '@type': 'SiteNavigationElement', name: 'Partners', url: 'https://www.padumainduwara.me/#partners' },
      { '@type': 'SiteNavigationElement', name: 'Reviews', url: 'https://www.padumainduwara.me/#reviews' },
      { '@type': 'SiteNavigationElement', name: 'Contact', url: 'https://www.padumainduwara.me/#contact' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── Aggregate All Schemas ───────────────────────────────────────────────────
export default function AllStructuredData() {
  return (
    <>
      <PersonSchema />
      <WebSiteSchema />
      <BreadcrumbSchema />
      <OrganizationSchema />
      <FAQSchema />
      <ProfilePageSchema />
      <SoftwareApplicationSchema />
      <ServiceSchema />
      <LocalBusinessSchema />
      <SpeakableSchema />
      <ReviewSchema />
      <SiteNavigationSchema />
    </>
  );
}
