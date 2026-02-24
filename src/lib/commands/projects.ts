import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

const divider = '\u2500'.repeat(50);
const dottedDivider = '\u2500 '.repeat(25);

export const projectsCommand: Command = {
  name: 'projects',
  description: 'Domains and key project areas',
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-4' },
        // Header
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Projects'),
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),

        // Project entries
        ...profile.projects.flatMap((proj, i) => {
          const isLast = i === profile.projects.length - 1;
          const elements = [
            React.createElement('div', { key: `proj-${i}`, className: 'ml-2 space-y-1' },
              // Project name
              React.createElement('div', { className: 'text-[var(--accent)] font-bold flex items-center gap-2' },
                React.createElement('span', null, '\u2502'),
                ` ${proj.name}`
              ),
              // Role + period
              React.createElement('div', { className: 'ml-6 text-[var(--text-dim)] text-sm' },
                proj.role,
                proj.period ? ` | ${proj.period}` : '',
              ),
              // Description
              React.createElement('div', { className: 'ml-6 text-[var(--text)] text-sm leading-relaxed' },
                proj.description
              ),
              // Highlights
              proj.highlights && React.createElement('div', { className: 'ml-6 space-y-0.5 mt-1' },
                ...proj.highlights.map((h, j) =>
                  React.createElement('div', { key: j, className: 'text-[var(--text-dim)] text-sm' },
                    `\u25B8 ${h}`
                  )
                )
              ),
              // Tech tags
              React.createElement('div', { className: 'ml-6 flex flex-wrap gap-1.5 mt-1' },
                ...proj.tech.split(', ').map((tech) =>
                  React.createElement('span', {
                    key: tech,
                    className: 'text-[var(--accent)] text-xs font-mono',
                  }, `[ ${tech} ]`)
                ),
              ),
            ),
          ];

          if (!isLast) {
            elements.push(
              React.createElement('div', { key: `div-${i}`, className: 'text-[var(--text-dim)] ml-2' }, dottedDivider)
            );
          }

          return elements;
        }),

        // Footer
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),
        React.createElement('div', { className: 'text-[var(--text-dim)] ml-2' },
          `  ${profile.projects.length} projects`
        ),
      ),
    };
  },
};
