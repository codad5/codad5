import React from 'react';

export default function JsonLd() {
  const baseUrl = 'https://codad5.me';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'ProfilePage'],
    '@id': `${baseUrl}/#person`,
    name: 'Chibueze Aniezeofor',
    alternateName: ['codad5', 'codad5_', 'Chibueze Aniezeofor (codad5)'],
    url: baseUrl,
    image: 'https://avatars.githubusercontent.com/u/66634814?v=4',
    jobTitle: [
      'Top Software Engineer',
      'Senior Backend Engineer',
      'PHP Developer',
      'Node.js Developer',
      'TypeScript Developer',
      'Python Developer',
      'Rust Developer',
      'Full Stack Developer',
      'Systems Architect'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Independent / Consulting'
    },
    description:
      'Chibueze Aniezeofor (codad5) is a top software engineer and senior backend systems developer with 6+ years of experience building scalable backend APIs, developer tools, high-performance distributed systems, and AI-driven products using PHP, Node.js, TypeScript, Python, and Rust.',
    knowsAbout: [
      'Software Engineering',
      'Backend Development',
      'PHP',
      'Laravel',
      'Node.js',
      'Express.js',
      'NestJS',
      'TypeScript',
      'JavaScript',
      'Python',
      'FastAPI',
      'Rust',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'RabbitMQ',
      'Docker',
      'Systems Architecture',
      'Performance Optimization',
      'AI Integration',
      'REST APIs',
      'WebSockets'
    ],
    sameAs: [
      'https://github.com/codad5',
      'https://www.linkedin.com/in/codad5',
      'https://x.com/codad5_',
      'https://twitter.com/codad5_'
    ],
    mainEntityOfPage: {
      '@type': 'ProfilePage',
      '@id': baseUrl
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Chibueze Aniezeofor (codad5) | Top Software Engineer',
    description:
      'Official portfolio of Chibueze Aniezeofor (codad5) — Top Software Engineer, PHP Developer, Node.js Developer, TypeScript Developer, Python Developer & Systems Architect.',
    publisher: {
      '@id': `${baseUrl}/#person`
    },
    inLanguage: 'en-US'
  };

  const navigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'About Me',
        description: 'Learn about Chibueze Aniezeofor (codad5), top software engineer background, and experience.',
        url: `${baseUrl}/#about`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Experience',
        description: 'Engineering experience in PHP, Node.js, TypeScript, Python, and cloud infrastructure.',
        url: `${baseUrl}/#experience`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Projects',
        description: 'Featured software engineering projects, open-source work, and tools by codad5.',
        url: `${baseUrl}/#projects`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Resume',
        description: 'Comprehensive resume and career summary of Chibueze Aniezeofor.',
        url: `${baseUrl}/resume`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Blog & Articles',
        description: 'Technical articles, tutorials, and insights on software engineering, PHP, Node.js, and TypeScript.',
        url: `${baseUrl}/posts`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Contact',
        description: 'Get in touch with Chibueze Aniezeofor (codad5) for software engineering opportunities.',
        url: `${baseUrl}/#contact`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
    </>
  );
}
