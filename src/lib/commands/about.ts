import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Brief introduction',
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-2' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold text-lg' },
          `> ${profile.name}`
        ),
        React.createElement('div', { className: 'text-[var(--text-dim)]' },
          `  ${profile.title} | ${profile.location}`
        ),
        React.createElement('div', { className: 'mt-2' },
          ...profile.about.map((line, i) =>
            React.createElement('div', { key: i }, line || '\u00A0')
          )
        ),
        React.createElement('div', { className: 'text-[var(--text-dim)] mt-3' },
          "Type 'skills' to see my technical expertise, or 'experience' for career history."
        ),
      ),
    };
  },
};
