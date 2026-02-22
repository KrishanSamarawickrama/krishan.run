import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const projectsCommand: Command = {
  name: 'projects',
  description: 'Domains and key project areas',
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-3' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Project Domains'),
        ...profile.projects.map((proj, i) =>
          React.createElement('div', { key: i, className: 'ml-2 space-y-0.5' },
            React.createElement('div', { className: 'text-[var(--accent)] font-bold' },
              `  ┌─ ${proj.name}`
            ),
            React.createElement('div', null, `  │  ${proj.description}`),
            React.createElement('div', { className: 'text-[var(--text-dim)]' }, `  │  Tech: ${proj.tech}`),
            React.createElement('div', { className: 'text-[var(--text-dim)]' }, '  └─'),
          )
        ),
      ),
    };
  },
};
