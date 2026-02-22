import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const educationCommand: Command = {
  name: 'education',
  description: 'Academic qualifications',
  aliases: ['edu'],
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-2' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Education'),
        ...profile.education.map((edu, i) =>
          React.createElement('div', { key: i, className: 'ml-2 space-y-0.5' },
            React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, `  🎓 ${edu.degree}`),
            React.createElement('div', null, `     ${edu.institution}`),
            React.createElement('div', { className: 'text-[var(--text-dim)]' }, `     ${edu.period}`),
            edu.details && React.createElement('div', { className: 'text-[var(--text-dim)]' }, `     ${edu.details}`),
          )
        ),
      ),
    };
  },
};
