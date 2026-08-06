import { Playfair_Display, Source_Serif_4, Courier_Prime, Archivo } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { cookies } from 'next/headers';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { DEFAULT_THEME, ThemeType, THEME_COOKIE_NAME, getThemeById } from '@/app/lib/theme';
import JsonLd from '@/app/components/shared/JsonLd';
import '@/app/globals.css';

// Font configurations
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
  weight: ['400', '500', '600', '700'],
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-courier',
  weight: ['400', '700'],
});

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: {
    default: "Chibueze Aniezeofor (codad5) | Top Software Engineer & Backend Developer",
    template: "%s | Chibueze Aniezeofor (codad5)"
  },
  description:
    "Chibueze Aniezeofor (codad5) is a top software engineer and senior backend developer with 6+ years building scalable systems, APIs, and AI products in PHP, Node.js, TypeScript, Python, and Rust.",
  generator: "Next.js",
  applicationName: "Chibueze Aniezeofor (codad5) Portfolio",
  metadataBase: new URL('https://codad5.me'),
  alternates: {
    canonical: 'https://codad5.me',
  },
  keywords: [
    "Chibueze Aniezeofor",
    "codad5",
    "codad5_",
    "top software engineer",
    "top backend engineer",
    "PHP developer",
    "PHP software engineer",
    "nodejs developer",
    "Node.js developer",
    "TypeScript developer",
    "TypeScript software engineer",
    "Python developer",
    "Python software engineer",
    "Rust developer",
    "Software Engineer",
    "Backend Developer",
    "Systems Architect",
    "Laravel developer",
    "NestJS developer",
    "Next.js developer",
    "AI Developer",
    "Full Stack Developer"
  ],
  authors: [{ name: "Chibueze Aniezeofor", url: "https://codad5.me" }],
  creator: "Chibueze Aniezeofor (codad5)",
  publisher: "Chibueze Aniezeofor",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Chibueze Aniezeofor (codad5) | Top Software Engineer & Backend Developer",
    description:
      "Official portfolio of Chibueze Aniezeofor (codad5) — Top Software Engineer, PHP Developer, Node.js Developer, TypeScript Developer, Python Developer & Systems Architect.",
    url: "https://codad5.me",
    siteName: "Chibueze Aniezeofor (codad5)",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/66634814?v=4",
        width: 800,
        height: 800,
        alt: "Chibueze Aniezeofor (codad5) - Top Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibueze Aniezeofor (codad5) | Top Software Engineer",
    description: "Top Software Engineer & Senior Backend Developer specializing in PHP, Node.js, TypeScript, Python & Rust.",
    creator: "@codad5_",
    images: ["https://avatars.githubusercontent.com/u/66634814?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeValue = cookieStore.get(THEME_COOKIE_NAME)?.value || '';
  const theme = getThemeById(themeValue);
  
  return (
    <html 
      lang="en" 
      data-theme={theme}
      className={`${playfairDisplay.variable} ${sourceSerif.variable} ${courierPrime.variable} ${archivo.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="max-w-[100vw] overflow-x-hidden">
        <ThemeProvider initialTheme={theme}>
          <div id="root">
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

