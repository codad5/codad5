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
          'OAI-SearchBot',
          'PerplexityBot',
          'Perplexity-User',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'Meta-ExternalAgent',
          'MistralAI-User',
          'Bytespider',
          'CCBot',
          'Diffbot',
          'cohere-ai',
        ],
        allow: '/',
        // A named group replaces the * group for these bots, so repeat its blocks
        disallow: ['/post/new', '/api/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
