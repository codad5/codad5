import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://codad5.me';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/post/new', '/api/private/'],
      },
      // Explicitly welcome AI Crawlers for Generative Engine Optimization (GEO)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
          'Diffbot',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
