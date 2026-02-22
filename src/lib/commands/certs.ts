import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const certsCommand: Command = {
  name: 'certs',
  description: 'Professional certifications',
  aliases: ['certifications'],
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-2' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Certifications'),
        ...profile.certifications.map((cert, i) =>
          React.createElement('div', { key: i, className: 'ml-2' },
            React.createElement('div', { className: 'text-[var(--accent)]' }, `  ✓ ${cert.name}`),
            React.createElement('div', { className: 'text-[var(--text-dim)]' }, `    ${cert.issuer} (${cert.year})`),
          )
        ),
      ),
    };
  },
};
