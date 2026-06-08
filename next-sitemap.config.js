/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.padumainduwara.me',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  exclude: ['/api/*', '/_next/*', '/404', '/500'],
  // Generate additional sitemaps
  additionalPaths: async (config) => [
    // llms.txt for AI search engines
    { loc: '/llms.txt', changefreq: 'monthly', priority: 0.3, lastmod: new Date().toISOString() },
    { loc: '/llms-full.txt', changefreq: 'monthly', priority: 0.3, lastmod: new Date().toISOString() },
    // security.txt
    { loc: '/.well-known/security.txt', changefreq: 'monthly', priority: 0.1, lastmod: new Date().toISOString() },
  ],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.padumainduwara.me/sitemap.xml'],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/', '/*.json$'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;
    const images = [];
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
      // Add OG image + profile image for image sitemap
      images.push(
        { loc: new URL('/Paduma-Induwara-Profile.png', config.siteUrl).href, caption: 'Paduma Induwara — Software Engineer & Data Scientist', title: 'Paduma Induwara Profile' },
        { loc: new URL('/apple-touch-icon.png', config.siteUrl).href, caption: 'Paduma.Dev Icon', title: 'Paduma.Dev App Icon' }
      );
    }
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [],
      ...(images.length > 0 ? { images } : {}),
    };
  },
};
