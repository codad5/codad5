export interface Experience {
  id: string;
  company: string;
  position: string;
  timeline: string;
  url?: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 'awadoc',
    company: 'AwaDoc',
    position: 'Founding Engineer',
    timeline: 'January 2024 – Present',
    url: 'https://awadoc.com',
    highlights: [
      'Built out the backend and guided much of the engineering as the platform grew to 200,000+ users',
      'Engineered a message-processing pipeline and queue system sustaining ~240,000 daily messages and ~10,000 messages/hour',
      'Established the engineering quality bar: 2,000+ automated tests and a factory-pattern architecture',
      'Built AwaDoc\'s multi-tenant partner integration platform (2-engineer team), handling 10,000+ events/day',
      'Integrated OpenAI and DeepSeek for medical guidance; led prompt engineering and evaluation',
    ],
  },
  {
    id: 'ridox-studio',
    company: 'Ridox Studio',
    position: 'Founder & Lead Engineer',
    timeline: '2022 – Present',
    url: 'https://ridoxstudio.com',
    highlights: [
      'Founded an independent studio building web, mobile, cloud, and AI products; own architecture and delivery end-to-end',
      'Develop and operate in-house products including RISMS (multi-tenant school-management SaaS), Cilbup (anonymous creator messaging/tipping), and Resurgee (AI task orchestration)',
      'Building Netcart, a multi-audience marketplace, end-to-end — mobile app, backend, and admin portal',
      'Deliver client engagements from discovery and architecture through to deployment and handover',
    ],
  },
  {
    id: 'fusion-intelligence',
    company: 'Fusion Intelligence',
    position: 'WordPress Developer',
    timeline: 'December 2024 – Present',
    url: 'https://fusionintel.io',
    highlights: [
      'Spearheading development of custom WordPress themes and plugins',
      'Improved system uptime to 99.9%',
      'Optimized plugin workflow efficiency by 40%',
      'Increased user engagement by 50% through responsive design',
    ],
  },
  {
    id: 'cyberinfomatic',
    company: 'Cyberinfomatic',
    position: 'PHP Developer',
    timeline: 'March 2024 – December 2024',
    url: 'https://cyberinfomatic.com',
    highlights: [
      'Built real-time crypto tracking plugin for WordPress',
      'Developed Laravel-based License Management System (60% faster validation)',
      'Achieved 70% performance boost via Redis caching',
      'Plugin approved on WordPress.org within 2 weeks',
    ],
  },
  {
    id: 'appsthathelps',
    company: 'Appsthathelps',
    position: 'Backend Developer',
    timeline: 'July 2023 – August 2024',
    highlights: [
      'Designed and maintained Laravel APIs for mobile app (5,000+ downloads)',
      'Automated recurring updates reducing manual work by 90%',
      'Integrated OneSignal for push notifications',
      'Achieved 99.9% API uptime',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance (Upwork)',
    position: 'PHP Web Developer',
    timeline: '2020 – Present',
    highlights: [
      'Delivered 10+ professional websites with 90% client satisfaction',
      '5+ open-source contributions',
      'Developed custom PHP plugins, scrapers, and dashboards',
    ],
  },
];
