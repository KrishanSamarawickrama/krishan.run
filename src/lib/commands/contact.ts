import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const contactCommand: Command = {
  name: 'contact',
  description: 'Get in touch',
  aliases: ['email'],
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-2' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Contact'),
        React.createElement('div', { className: 'ml-2 space-y-1' },
          React.createElement('div', null,
            '  📧 Email:    ',
            React.createElement('a', {
              href: `mailto:${profile.email}`,
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, profile.email),
          ),
          React.createElement('div', null,
            '  🔗 LinkedIn: ',
            React.createElement('a', {
              href: profile.linkedin,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, profile.linkedin),
          ),
          React.createElement('div', null,
            '  💻 GitHub:   ',
            React.createElement('a', {
              href: profile.github,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, profile.github),
          ),
          React.createElement('div', null,
            '  🌐 Website:  ',
            React.createElement('a', {
              href: profile.website,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, profile.website),
          ),
        ),
      ),
    };
  },
};
