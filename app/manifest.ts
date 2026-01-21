import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Paduma Induwara | Software Engineer & AI Expert',
    short_name: 'Paduma Induwara',
    description: 'Portfolio of Paduma Induwara - Top-tier Software Engineer & Data Scientist in Sri Lanka. Expert in AI and Web Development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020010',
    theme_color: '#020010',
    orientation: 'portrait',
    categories: ["technology", "software development", "artificial intelligence", "education"],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/Paduma-Induwara-Profile.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/Paduma-Induwara-Profile.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  };
}