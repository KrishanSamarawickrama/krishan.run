import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const aboutCommand: Command = {
  name: 'about',
  description: 'About me and contact info',
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-3' },
        // Header
        React.createElement('div', { className: 'text-[var(--accent)] font-bold text-lg' },
          `> ${profile.name}`
        ),
        React.createElement('div', { className: 'text-[var(--text-dim)]' },
          `  ${profile.title} @ ${profile.company} | ${profile.location}`
        ),
        // Divider
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, '\u2500'.repeat(50)),
        // Bio paragraphs
        ...profile.about
          .filter(line => line !== '')
          .map((line, i) =>
            React.createElement('div', { key: `bio-${i}`, className: 'text-[var(--text)] leading-relaxed' }, line)
          ),
        // Interests
        React.createElement('div', { className: 'text-[var(--text-dim)] mt-1' },
          `  Interests: ${profile.interests.join(' | ')}`
        ),
        // Divider
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, '\u2500'.repeat(50)),
        // Contact
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Contact'),
        React.createElement('div', { className: 'ml-2 space-y-1' },
          React.createElement('div', null,
            '  \u25B8 Email:    ',
            React.createElement('a', {
              href: `mailto:${profile.email}`,
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, profile.email),
          ),
          React.createElement('div', null,
            '  \u25B8 LinkedIn: ',
            React.createElement('a', {
              href: profile.linkedin,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, 'krishan-samarawickrama'),
          ),
          React.createElement('div', null,
            '  \u25B8 GitHub:   ',
            React.createElement('a', {
              href: profile.github,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, 'KrishanSamarawickrama'),
          ),
          React.createElement('div', null,
            '  \u25B8 Website:  ',
            React.createElement('a', {
              href: profile.website,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, profile.website),
          ),
        ),
        // Hint
        React.createElement('div', { className: 'text-[var(--text-dim)] mt-2' },
          "Type 'skills' for technical expertise, 'experience' for career history, or 'contact' for just contact info."
        ),
      ),
    };
  },
};
