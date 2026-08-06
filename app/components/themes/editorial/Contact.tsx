'use client';

import Reveal from './Reveal';
import { useParallax } from './useParallax';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/codad5' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chibueze-michael' },
  { name: 'Twitter', url: 'https://twitter.com/codad5_' },
];

export default function Contact() {
  const nameRef = useParallax<HTMLHeadingElement>(0.05);

  return (
    <section
      id="contact"
      className="ed-stack relative w-full flex flex-col justify-center px-6 lg:px-12 pt-20 lg:pt-28 pb-8 lg:min-h-screen"
      style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', zIndex: 60 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <Reveal variant="line">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl max-w-xl leading-tight"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-accent)' }}
            >
              Let&apos;s build something worth shipping.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <a
              href="mailto:aniezeoformic@gmail.com"
              className="ed-underline inline-flex items-center gap-3 text-xl no-underline"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}
            >
              aniezeoformic@gmail.com ↗
            </a>
          </Reveal>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          {socialLinks.map((social, i) => (
            <Reveal
              key={social.name}
              delay={i * 70}
              className="group flex items-center justify-between py-4"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 no-underline"
              >
                <span className="ed-index text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-lg transition-transform duration-500 group-hover:translate-x-1"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  {social.name}
                </span>
              </a>
              <span
                className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: 'var(--color-text-primary)' }}
              >
                ↗
              </span>
            </Reveal>
          ))}
        </div>

        <div className="overflow-hidden -mx-6 lg:-mx-12">
          <h3
            ref={nameRef}
            className="text-[16vw] lg:text-[11vw] leading-[0.85] text-center whitespace-nowrap select-none"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--color-bg-inverse)' }}
          >
            Say Hello
          </h3>
        </div>
      </div>
    </section>
  );
}
