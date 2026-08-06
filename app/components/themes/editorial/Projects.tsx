'use client';

import { useState } from 'react';
import { projects, Project, RELEVANCE_FIELDS, RelevanceField, getProjectsByRelevance } from '@/app/lib/data/projects';
import Reveal from './Reveal';

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      delay={Math.min(index, 6) * 55}
      className="group grid grid-cols-1 lg:grid-cols-[3rem_1fr_auto_auto] gap-3 lg:gap-8 py-7 lg:items-center"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <span className="ed-index text-sm" style={{ color: 'var(--color-text-muted)' }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="flex flex-col gap-1 min-w-0">
        <h3
          className="text-xl lg:text-2xl truncate transition-transform duration-500 group-hover:translate-x-1"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
        >
          {project.name}
        </h3>
        <p
          className="text-sm max-w-xl"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
        >
          {project.description}
        </p>
      </div>

      <span
        className="text-xs uppercase tracking-wide whitespace-nowrap"
        style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        {project.mainLang}
      </span>

      <div className="flex gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm no-underline transition-transform duration-300 inline-block group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: 'var(--color-accent)' }}
            aria-label={`${project.name} on GitHub`}
          >
            ↗
          </a>
        )}
        {project.links.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm no-underline"
            style={{ color: 'var(--color-accent)' }}
            aria-label={`${project.name} live demo`}
          >
            Demo
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedField, setSelectedField] = useState<RelevanceField | 'all'>('all');

  const handleFilterChange = (field: RelevanceField | 'all') => {
    setSelectedField(field);
    setFilteredProjects(field === 'all' ? projects : getProjectsByRelevance(field));
  };

  return (
    <section
      id="projects"
      className="relative w-full px-6 lg:px-12 py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', zIndex: 40 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div
          className="ed-section-header flex flex-col gap-6 -mx-6 px-6 lg:-mx-12 lg:px-12 py-4"
          style={{ backgroundColor: 'var(--color-bg-secondary)' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <Reveal variant="line">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-accent)' }}
              >
                Selected Work
              </h2>
            </Reveal>
            <a
              href="https://github.com/codad5"
              target="_blank"
              rel="noopener noreferrer"
              className="ed-underline inline-flex items-center gap-2 text-sm no-underline uppercase tracking-wide"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              All Repositories ↗
            </a>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <button
              onClick={() => handleFilterChange('all')}
              className="text-xs uppercase tracking-wide pb-1 transition-all"
              style={{
                color: selectedField === 'all' ? 'var(--color-accent)' : 'var(--color-text-muted)',
                borderBottom: selectedField === 'all' ? '1px solid var(--color-accent)' : '1px solid transparent',
                fontFamily: 'var(--font-body)',
              }}
            >
              All
            </button>
            {RELEVANCE_FIELDS.slice(0, 6).map((field) => (
              <button
                key={field.id}
                onClick={() => handleFilterChange(field.id)}
                className="text-xs uppercase tracking-wide pb-1 transition-all"
                style={{
                  color: selectedField === field.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  borderBottom: selectedField === field.id ? '1px solid var(--color-accent)' : '1px solid transparent',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {field.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          {filteredProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
