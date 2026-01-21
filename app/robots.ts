import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.padumainduwara.me/sitemap.xml',
  };
}