import React from 'react';

export default function JsonLd() {
  const baseUrl = 'https://codad5.me';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Chibueze Aniezeofor',
    alternateName: ['codad5', 'codad5_', 'Chibueze Michael Aniezeofor'],
    url: baseUrl,
    image: 'https://avatars.githubusercontent.com/u/66634814?v=4',
    jobTitle: 'Senior Backend Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent / Consulting'
    },
    description:
      'Chibueze Aniezeofor (codad5) is a senior backend engineer with 6+ years of experience building scalable backend APIs, developer tools, distributed systems, and AI-driven products using Node.js, TypeScript, PHP, Python, and Rust.',
    knowsAbout: [
      'Backend Development',
      'Node.js',
      'TypeScript',
      'PHP',
      'Laravel',
      'NestJS',
      'Python',
      'Rust',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Distributed Systems',
      'AI Integration'
    ],
    sameAs: [
      'https://github.com/codad5',
      'https://www.linkedin.com/in/chibueze-aniezeofor',
      'https://x.com/codad5_',
      'https://www.instagram.com/codad5_',
      'https://www.npmjs.com/~codad5',
      'https://crates.io/users/codad5'
    ]
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/#profilepage`,
    url: baseUrl,
    mainEntity: {
      '@id': `${baseUrl}/#person`
    },
    isPartOf: {
      '@id': `${baseUrl}/#website`
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: 'Chibueze Aniezeofor',
    alternateName: ['codad5', 'codad5.me'],
    description:
      'Portfolio, projects, and writing of Chibueze Aniezeofor (codad5), senior backend engineer.',
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
        description: 'Learn about Chibueze Aniezeofor (codad5), software engineering background, and experience.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
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
