import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

const divider = '\u2500'.repeat(50);

export const skillsCommand: Command = {
  name: 'skills',
  description: 'Technical skills by category',
  execute: () => {
    const categories = Object.entries(profile.skills);
    let totalSkills = 0;
    categories.forEach(([, skills]) => { totalSkills += skills.length; });

    return {
      output: React.createElement('div', { className: 'space-y-4' },
        // Header
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Technical Skills'),
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),

        // Categories
        ...categories.map(([category, skills]) =>
          React.createElement('div', { key: category, className: 'ml-2 space-y-2' },
            React.createElement('div', { className: 'text-[var(--accent)] font-bold flex items-center gap-2' },
              React.createElement('span', null, '\u2502'),
              ` ${category}`
            ),
            ...skills.map((skill, i) =>
              React.createElement('div', { key: i, className: 'ml-4 flex items-center gap-2 font-mono text-sm' },
                React.createElement('span', { className: 'text-[var(--text-dim)] shrink-0' }, '\u25B8'),
                React.createElement('span', { className: 'w-44 shrink-0 truncate text-[var(--text)]' },
                  skill.name
                ),
                React.createElement('div', { className: 'flex-1 h-3 bg-[var(--text-dim)]/20 rounded-sm overflow-hidden' },
                  React.createElement('div', {
                    className: 'h-full bg-[var(--accent)] rounded-sm',
                    style: { width: `${skill.level}%` },
                  })
                ),
                React.createElement('span', { className: 'w-10 shrink-0 text-right text-[var(--text-dim)]' },
                  `${skill.level}%`
                ),
              )
            ),
          )
        ),

        // Footer
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),

        // Top skills highlight
        React.createElement('div', { className: 'ml-2 space-y-1' },
          React.createElement('div', { className: 'text-[var(--text-dim)]' },
            `  ${totalSkills} skills across ${categories.length} categories`
          ),
          React.createElement('div', { className: 'mt-1' },
            React.createElement('span', { className: 'text-[var(--text-dim)]' }, '  Top: '),
            ...profile.topSkills.map((skill, i) =>
              React.createElement('span', { key: skill },
                React.createElement('span', { className: 'text-[var(--accent)]' }, `[ ${skill} ]`),
                i < profile.topSkills.length - 1 ? ' ' : '',
              )
            ),
          ),
        ),
      ),
    };
  },
};
