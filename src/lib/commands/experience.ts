import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

const divider = '\u2500'.repeat(50);
const dottedDivider = '\u2500 '.repeat(25);

export const experienceCommand: Command = {
  name: 'experience',
  description: 'Career timeline',
  aliases: ['exp', 'work'],
  execute: () => {
    const companies = new Set(profile.experience.map(e => e.company));

    return {
      output: React.createElement('div', { className: 'space-y-4' },
        // Header
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Career Timeline'),
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),

        // Experience entries
        ...profile.experience.flatMap((exp, i) => {
          const isFirst = i === 0;
          const isLast = i === profile.experience.length - 1;
          const elements = [
            React.createElement('div', { key: `exp-${i}`, className: 'ml-2 space-y-1' },
              React.createElement('div', { className: 'text-[var(--accent)] font-bold' },
                `${isFirst ? '\u25CF' : '\u25CB'} ${exp.role} @ ${exp.company}`
              ),
              React.createElement('div', { className: 'text-[var(--text-dim)] ml-3' }, exp.period),
              React.createElement('div', { className: 'ml-3 mt-1' }, exp.description),
              React.createElement('div', { className: 'ml-3 mt-1 space-y-0.5' },
                ...exp.highlights.map((h, j) =>
                  React.createElement('div', { key: j, className: 'text-[var(--text-dim)]' }, `  \u25B8 ${h}`)
                )
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
          `  ${profile.experience.length} positions | 10+ years | ${companies.size} companies`
        ),
      ),
    };
  },
};
