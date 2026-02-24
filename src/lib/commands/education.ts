import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

const divider = '\u2500'.repeat(50);

export const educationCommand: Command = {
  name: 'education',
  description: 'Academic qualifications',
  aliases: ['edu'],
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-3' },
        // Header
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Education'),
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),

        // Education entries
        ...profile.education.map((edu, i) =>
          React.createElement('div', { key: i, className: 'ml-2 space-y-0.5' },
            React.createElement('div', { className: 'text-[var(--accent)] font-bold' },
              `[\u2713] ${edu.degree}`
            ),
            React.createElement('div', { className: 'text-[var(--text)] ml-4' },
              `${edu.institution} | ${edu.period}`
            ),
            edu.details && React.createElement('div', { className: 'text-[var(--text-dim)] ml-4' },
              edu.details
            ),
          )
        ),

        // Footer divider
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),

        // Honors
        React.createElement('div', { className: 'ml-2 space-y-1' },
          React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '  Honors'),
          ...profile.honors.map((honor, i) =>
            React.createElement('div', { key: i, className: 'text-[var(--text-dim)] ml-2' },
              `  \u2605 ${honor}`
            )
          ),
        ),
      ),
    };
  },
};
