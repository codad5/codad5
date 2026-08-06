import { MetadataRoute } from 'next';
import { getPostsAndMetadata } from '@/app/helpers/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codad5.me';
  const currentDate = new Date().toISOString();

  // Static routes with high priority
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Section anchors for Google Sitelinks indexing
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic blog post routes
  try {
    const posts = getPostsAndMetadata();
    const publishedPosts = posts.filter((post) => post.published);

    const postRoutes: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

    return [...routes, ...postRoutes];
  } catch (error) {
    console.error('Error generating post routes for sitemap:', error);
    return routes;
  }
}
