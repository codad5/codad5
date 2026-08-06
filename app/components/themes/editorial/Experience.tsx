'use client';

import { experiences } from '@/app/lib/data/experience';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full px-6 lg:px-12 py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', zIndex: 30 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div
          className="ed-section-header flex items-end justify-between gap-6 -mx-6 px-6 lg:-mx-12 lg:px-12 py-4"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          <Reveal variant="line">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-accent)' }}
            >
              Experience
            </h2>
          </Reveal>
          <a
            href="/resume"
            className="ed-underline hidden sm:inline-flex items-center gap-2 text-sm no-underline uppercase tracking-wide"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Full Resume ↗
          </a>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.id}
              delay={Math.min(i, 4) * 70}
              className="group grid grid-cols-1 lg:grid-cols-[3rem_1fr_1fr_auto] gap-3 lg:gap-8 py-8 lg:items-start"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <span className="ed-index text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col gap-1">
                <h3
                  className="text-2xl transition-transform duration-500 group-hover:translate-x-1"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline"
                      style={{ color: 'inherit' }}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <span
                  className="text-sm uppercase tracking-wide"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {exp.position}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {exp.highlights.slice(0, 3).map((h, hi) => (
                  <li
                    key={hi}
                    className="text-sm leading-relaxed flex gap-2"
                    style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }}>—</span>
                    {h}
                  </li>
                ))}
              </ul>

              <span
                className="text-xs uppercase tracking-wide lg:text-right whitespace-nowrap"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {exp.timeline}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
