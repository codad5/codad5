'use client';

import { useNavMenu } from './NavMenuContext';
import { useScrollPast } from './useScrollPast';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/posts' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '#contact' },
];

export default function TopBar() {
  const { open, toggle, close } = useNavMenu();
  const pastHero = useScrollPast('ed-hero-header-end');

  return (
    <>
      <div
        className="ed-topbar flex items-center justify-between px-6 lg:px-12 transition-all duration-500"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-bg-primary) 85%, transparent)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--color-border)',
          transform: pastHero ? 'translateY(0)' : 'translateY(-100%)',
          opacity: pastHero ? 1 : 0,
          pointerEvents: pastHero ? 'auto' : 'none',
        }}
      >
        <a
          href="#"
          className="no-underline transition-opacity duration-300 hover:opacity-60"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-text-primary)', fontSize: '1.1rem' }}
        >
          Chibueze A.
        </a>

        <button
          onClick={toggle}
          className="text-sm transition-opacity duration-300 hover:opacity-50"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}
          aria-label="Toggle menu"
        >
          {open ? 'Close ✕' : 'Menu ☰'}
        </button>
      </div>

      {/* Full-screen nav overlay — shared by TopBar and Hero's own menu trigger */}
      <div
        className={`fixed inset-0 z-99 flex flex-col justify-center px-6 lg:px-12 transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-bg-inverse)' }}
      >
        <button
          onClick={close}
          className="absolute top-6 right-6 lg:top-8 lg:right-12 text-sm transition-opacity duration-300 hover:opacity-50"
          style={{ color: '#171a18', fontFamily: 'var(--font-body)', fontWeight: 700 }}
          aria-label="Close menu"
        >
          Close ✕
        </button>

        <nav className="flex flex-col gap-2">
          {navLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={close}
              className="group no-underline flex items-baseline gap-4 py-2 transition-transform duration-500"
              style={{
                transitionDelay: open ? `${i * 60}ms` : '0ms',
                transform: open ? 'translateX(0)' : 'translateX(24px)',
                opacity: open ? 1 : 0,
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
    </>
  );
}
