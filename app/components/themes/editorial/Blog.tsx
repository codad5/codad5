'use client';

import Link from 'next/link';
import { postsType } from '@/app/components/types';
import Reveal from './Reveal';

interface BlogProps {
  posts: postsType[];
}

export default function Blog({ posts }: BlogProps) {
  const recentPosts = posts.filter((p) => p.published !== false).slice(0, 3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section
      id="blog"
      className="w-full px-6 lg:px-12 py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Reveal variant="line">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-accent)' }}
            >
              Writing
            </h2>
          </Reveal>
          <Link
            href="/posts"
            className="ed-underline inline-flex items-center gap-2 text-sm no-underline uppercase tracking-wide"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            All Posts ↗
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          {recentPosts.map((post, i) => (
            <Reveal
              key={post.slug}
              delay={i * 80}
              className="group grid grid-cols-1 lg:grid-cols-[3rem_1fr_auto] gap-3 lg:gap-8 py-7 lg:items-center"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <span className="ed-index text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <Link href={`/posts/${post.slug}`} className="no-underline min-w-0">
                <h3
                  className="text-xl lg:text-2xl truncate transition-transform duration-500 group-hover:translate-x-1"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm mt-1 line-clamp-1"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {post.description}
                </p>
              </Link>

              <span
                className="text-xs uppercase tracking-wide whitespace-nowrap"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {post.date}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
