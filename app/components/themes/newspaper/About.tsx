'use client';

import { skillCategories } from '@/app/lib/data/skills';

export default function About() {
  return (
    <section 
      id="about"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 pb-6">
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            About
          </h2>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main article - 2 columns */}
          <article 
            className="lg:col-span-2 font-body text-lg leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-primary)'
            }}
          >
            <p className="drop-cap">
              Chibueze Aniezeofor (codad5) is a top software engineer blending computer science discipline with rapid startup execution speed. 
              Known for taking backend products from concept to scale — from 0 to 100,000+ users — 
              while ensuring bank-grade security, maintainability, and peak system performance.
            </p>
            <p className="pt-4">
              As a senior PHP developer, Node.js developer, TypeScript engineer, and Python & Rust systems developer, 
              Chibueze has a proven track record building distributed systems handling 240,000+ daily messages, 
              high-throughput payment integrations, and microservices architecture.
            </p>
            <p className="pt-4">
              Currently serving as Lead / Founding Engineer at AwaDoc, an AI-driven health assistant 
              empowering users to access reliable medical insights via WhatsApp.
            </p>
            <p className="pt-4">
              Beyond enterprise engineering, codad5 is passionate about open-source developer tools, authoring 
              widely-used packages including FLI (12,000+ downloads on crates.io), a type-safe CLI library for Rust.
            </p>
          </article>

          {/* Sidebar - Technical Proficiencies */}
          <aside 
            className="p-6 border"
            style={{ 
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-secondary)'
            }}
          >
            <h3 
              className="text-xl font-heading font-bold pb-4 border-b"
              style={{ 
                fontFamily: 'var(--font-heading)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)'
              }}
            >
              Technical Stack
            </h3>
            <div className="flex flex-col gap-4 pt-4">
              {skillCategories.slice(0, 5).map((category) => (
                <div key={category.name}>
                  <h4 
                    className="text-sm uppercase tracking-wider font-bold pb-1"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {category.name}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {category.skills.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
