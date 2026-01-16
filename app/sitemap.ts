import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.padumainduwara.me',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    
  ];
}