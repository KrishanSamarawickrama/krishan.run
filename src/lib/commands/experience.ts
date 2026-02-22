import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const experienceCommand: Command = {
  name: 'experience',
  description: 'Career timeline',
  aliases: ['exp', 'work'],
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-1' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold mb-2' }, '// Career Timeline'),
        ...profile.experience.map((exp, i) =>
          React.createElement('div', { key: i, className: 'ml-2 space-y-1' },
            React.createElement('div', { className: 'flex items-start gap-2' },
              React.createElement('span', { className: 'text-[var(--text-dim)]' }, i === 0 ? '●' : '○'),
              React.createElement('div', null,
                React.createElement('div', { className: 'text-[var(--accent)] font-bold' },
                  `${exp.role} @ ${exp.company}`
                ),
                React.createElement('div', { className: 'text-[var(--text-dim)]' }, exp.period),
                React.createElement('div', { className: 'mt-1' }, exp.description),
                React.createElement('div', { className: 'mt-1 space-y-0.5' },
                  ...exp.highlights.map((h, j) =>
                    React.createElement('div', { key: j, className: 'text-[var(--text-dim)]' }, `    ▸ ${h}`)
                  )
                ),
              ),
            ),
            i < profile.experience.length - 1 &&
              React.createElement('div', { className: 'text-[var(--text-dim)] ml-1' }, '│'),
          )
        ),
      ),
    };
  },
};
