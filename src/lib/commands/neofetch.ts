import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import { neofetchArt } from '@/lib/data/ascii-art';
import React from 'react';

export const neofetchCommand: Command = {
  name: 'neofetch',
  description: 'System information',
  execute: () => {
    const artLines = neofetchArt.split('\n').filter(l => l.length > 0);
    const infoLines = [
      { label: 'User', value: profile.name },
      { label: 'Title', value: profile.title },
      { label: 'Location', value: profile.location },
      { label: 'Website', value: 'krishan.run' },
      { label: 'OS', value: 'Portfolio v1.0.0' },
      { label: 'Shell', value: 'krishan-terminal' },
      { label: 'Uptime', value: 'since 2013' },
      { label: 'Languages', value: 'C#, .NET, Angular, SQL' },
      { label: 'Framework', value: 'Next.js 15' },
      { label: 'Theme', value: 'Phosphor Green' },
    ];

    const maxArtWidth = Math.max(...artLines.map(l => l.length));

    return {
      output: React.createElement('div', { className: 'space-y-0' },
        ...Array.from({ length: Math.max(artLines.length, infoLines.length) }).map((_, i) => {
          const artLine = (artLines[i] || '').padEnd(maxArtWidth + 4);
          const info = infoLines[i];
          return React.createElement('div', { key: i, className: 'whitespace-pre' },
            React.createElement('span', { className: 'text-[var(--accent)]' }, artLine),
            info ? React.createElement('span', null,
              React.createElement('span', { className: 'text-[var(--accent)] font-bold' }, `${info.label}: `),
              React.createElement('span', null, info.value),
            ) : null,
          );
        }),
        React.createElement('div', { className: 'mt-2 whitespace-pre' },
          '  ',
          ...['#ff3333', '#ff8833', '#ffff33', '#33ff33', '#3333ff', '#ff33ff', '#33ffff', '#ffffff'].map((color, i) =>
            React.createElement('span', { key: i, style: { backgroundColor: color } }, '   ')
          ),
        ),
      ),
    };
  },
};
