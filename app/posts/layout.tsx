import Footer from '../components/shared/Footer';

export const metadata = {
  title: 'Blog & Software Engineering Articles | Chibueze Aniezeofor (codad5)',
  description: 'Thoughts, tutorials, and deep technical insights on software engineering, PHP, Node.js, TypeScript, Python, and backend systems by Chibueze Aniezeofor (codad5).',
  generator: 'Next.js',
  applicationName: 'Codad5',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://codad5.me/posts',
  },
  keywords: ['codad5', 'codad5_', 'blog', 'software engineering', 'PHP developer', 'nodejs developer', 'TypeScript developer', 'Python developer', 'tutorials', 'Chibueze Aniezeofor'],
  authors: [{ name: 'Chibueze Aniezeofor', url: 'https://codad5.me' }],
  creator: 'Chibueze Aniezeofor (codad5)',
  publisher: 'Chibueze Aniezeofor',
  openGraph: {
    title: 'Blog & Articles | Chibueze Aniezeofor (codad5) - Top Software Engineer',
    description: 'Thoughts, tutorials, and insights on software engineering, PHP, Node.js, TypeScript, and Python by Chibueze Aniezeofor (codad5).',
    url: 'https://codad5.me/posts',
    siteName: 'Chibueze Aniezeofor (codad5)',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
}

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div 
      className="min-h-screen flex flex-col max-w-[100vw] overflow-x-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Main content */}
      <div className="flex-1">
        {children}
      </div>
      
      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
