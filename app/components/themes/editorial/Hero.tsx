'use client';

import { useState } from 'react';
import { useParallax } from './useParallax';
import Reveal from './Reveal';
import AnimatedLetters from './AnimatedLetters';

const roles = [
  { index: '01', label: 'Backend', sub: 'Engineer' },
  { index: '02', label: 'Systems', sub: 'Programmer' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/posts' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '#contact' },
];

const links = [
  { label: 'GitHub', url: 'https://github.com/codad5' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/chibueze-michael' },
  { label: 'Twitter', url: 'https://twitter.com/codad5_' },
  { label: 'Resume', url: '/resume' },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nameRef = useParallax<HTMLHeadingElement>(0.08);

  return (
    <header
      className="w-full flex flex-col relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Top bar: logo + roles */}
      <div
        className="flex items-start justify-between px-6 lg:px-12 pt-8 pb-6 gap-6"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="flex flex-col leading-[0.95]">
          <span
            className="text-2xl"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-text-primary)' }}
          >
            Chibueze
          </span>
          <span
            className="text-2xl"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-text-primary)' }}
          >
            Aniezeofor
          </span>
        </div>

        <div className="hidden md:flex items-start gap-16">
          {roles.map((role, i) => (
            <Reveal key={role.index} delay={i * 120} variant="up" className="flex gap-3">
              <span
                className="text-xs mt-1"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
              >
                {role.index}
              </span>
              <span
                className="text-sm leading-tight"
                style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}
              >
                {role.label}
                <br />
                {role.sub}
              </span>
            </Reveal>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="text-sm transition-opacity duration-300 hover:opacity-50"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </div>

      {/* Full-screen nav overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center px-6 lg:px-12 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-bg-inverse)' }}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group no-underline flex items-baseline gap-4 py-2 transition-transform duration-500"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                transform: menuOpen ? 'translateX(0)' : 'translateX(24px)',
                opacity: menuOpen ? 1 : 0,
              }}
            >
              <span
                className="text-sm transition-colors duration-300 group-hover:text-[#e8734a]"
                style={{ color: '#8a8f8a', fontFamily: 'var(--font-body)' }}
              >
                0{i + 1}
              </span>
              <span
                className="text-4xl sm:text-5xl lg:text-6xl transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#e8734a]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#171a18' }}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Tagline + links panel */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 px-6 lg:px-12 pt-16 lg:pt-24 pb-10">
        <Reveal variant="line" delay={80}>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-text-primary)' }}
          >
            I build reliable backend
            <br />
            systems and developer tools.
          </h1>
        </Reveal>

        <Reveal delay={220} className="flex flex-col justify-end w-full lg:w-72">
          <span
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}
          >
            Links
          </span>
          <div style={{ borderTop: '1px solid var(--color-border)' }}>
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between py-3 px-2 -mx-2 no-underline transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--color-bg-inverse)_12%,transparent)]"
                style={{ borderBottom: '1px solid var(--color-border)' }}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="ed-index text-xs transition-colors duration-300 group-hover:text-(--color-bg-inverse)"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}
                  >
                    {link.label}
                  </span>
                </span>
                <span
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Giant display name with scroll parallax */}
      <div className="relative px-4 lg:px-6 pb-4 lg:pb-8 select-none">
        <h2
          ref={nameRef}
          className="text-[16vw] lg:text-[11.5vw] leading-[0.82] tracking-tight text-center whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            color: 'var(--color-bg-inverse)',
          }}
        >
          <AnimatedLetters text="Codad5" letterDelay={110} />
        </h2>
      </div>
    </header>
  );
}
