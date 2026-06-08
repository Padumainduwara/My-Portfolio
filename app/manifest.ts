import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Paduma Induwara | AI Expert, Data Scientist & Software Engineer',
    short_name: 'Paduma.Dev',
    description:
      'World-class Software Engineer & Data Scientist specializing in AI, Machine Learning, Next.js, and immersive 3D Web Development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020010',
    theme_color: '#020010',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['technology', 'software', 'development', 'portfolio', 'business'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/Paduma-Induwara-Profile.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Paduma Induwara Portfolio',
      },
    ],
    prefer_related_applications: false,
  };
}
