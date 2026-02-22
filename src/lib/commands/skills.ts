import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

function renderBar(level: number): string {
  const filled = Math.round(level / 5);
  const empty = 20 - filled;
  return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${level}%`;
}

export const skillsCommand: Command = {
  name: 'skills',
  description: 'Technical skills by category',
  execute: () => {
    const categories = Object.entries(profile.skills);

    return {
      output: React.createElement('div', { className: 'space-y-4' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Technical Skills'),
        ...categories.map(([category, skills]) =>
          React.createElement('div', { key: category, className: 'space-y-1' },
            React.createElement('div', { className: 'text-[var(--accent)] font-bold mt-2' }, `  ${category}`),
            React.createElement('div', { className: 'text-[var(--text-dim)]' }, `  ${'─'.repeat(40)}`),
            ...skills.map((skill, i) =>
              React.createElement('div', { key: i, className: 'whitespace-pre font-mono' },
                `  ${skill.name.padEnd(20)} ${renderBar(skill.level)}`
              )
            ),
          )
        ),
      ),
    };
  },
};
