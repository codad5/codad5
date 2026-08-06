'use client';

import { skillCategories } from '@/app/lib/data/skills';
import Reveal from './Reveal';

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '100k+', label: 'Users Reached' },
  { value: '12k+', label: 'Package Downloads' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 lg:px-12 py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', zIndex: 20 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div
          className="ed-section-header flex items-end justify-between gap-6 -mx-6 px-6 lg:-mx-12 lg:px-12 py-4"
          style={{ backgroundColor: 'var(--color-bg-secondary)' }}
        >
          <Reveal variant="line">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-accent)' }}
            >
              About
            </h2>
          </Reveal>
          <span
            className="ed-index text-sm hidden sm:block"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
          >
            (01 / 06)
          </span>
        </div>

        {/* Bio + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <Reveal delay={80} className="lg:col-span-2 flex flex-col gap-6">
            <p
              className="text-xl lg:text-2xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Software engineer blending engineering discipline with startup execution
              speed — known for taking products from concept to scale, from 0 to
              100,000+ users, while keeping systems secure and maintainable.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
            >
              Currently Founding Engineer at AwaDoc, an AI-driven health assistant
              helping Nigerians access reliable medical insights via WhatsApp. Outside
              of work, I build open-source systems tooling in Rust.
            </p>
          </Reveal>

          <div className="flex flex-col">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={100 + i * 90}
                className="flex items-baseline justify-between py-4"
                style={{ borderBottom: i < stats.length - 1 ? '1px solid var(--color-border)' : undefined }}
              >
                <span
                  className="text-4xl font-semibold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs uppercase tracking-wide text-right"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skill index */}
        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          {skillCategories.map((cat, i) => (
            <Reveal
              key={cat.name}
              delay={i * 60}
              className="grid grid-cols-1 sm:grid-cols-[3rem_1fr_2fr] gap-2 sm:gap-6 py-5 items-baseline"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <span
                className="ed-index text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="text-lg"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                {cat.name}
              </span>
              <span
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {cat.skills.join(' · ')}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
