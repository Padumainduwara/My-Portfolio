import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'], // API routes hide karanna
    },
    sitemap: 'https://www.padumainduwara.me/sitemap.xml',
  };
}