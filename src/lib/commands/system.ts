import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

export const whoamiCommand: Command = {
  name: 'whoami',
  description: 'Print current user',
  execute: () => ({
    output: React.createElement('span', null, 'visitor@krishan.run'),
  }),
};

export const clearCommand: Command = {
  name: 'clear',
  description: 'Clear terminal',
  aliases: ['cls'],
  execute: () => ({
    output: null,
    clear: true,
  }),
};

export const dateCommand: Command = {
  name: 'date',
  description: 'Print current date',
  execute: () => ({
    output: React.createElement('span', null, new Date().toString()),
  }),
};

export const echoCommand: Command = {
  name: 'echo',
  description: 'Print text',
  execute: (args) => ({
    output: React.createElement('span', null, args.join(' ')),
  }),
};

export const sudoCommand: Command = {
  name: 'sudo',
  description: 'Run as superuser',
  execute: (args) => {
    const full = args.join(' ').toLowerCase();
    if (full.includes('rm') && full.includes('-rf')) {
      return {
        output: React.createElement('div', { className: 'space-y-1' },
          React.createElement('div', { className: 'text-[var(--error)] font-bold' },
            'Nice try. Permission denied. 🚫'
          ),
          React.createElement('div', { className: 'text-[var(--text-dim)]' },
            "This incident will be reported to /dev/null"
          ),
        ),
      };
    }
    return {
      output: React.createElement('span', { className: 'text-[var(--error)]' },
        `${profile.name} is not in the sudoers file. This incident will be reported.`
      ),
    };
  },
};

export const resumeCommand: Command = {
  name: 'resume',
  description: 'Download resume PDF',
  aliases: ['cv'],
  execute: () => {
    if (typeof window !== 'undefined') {
      window.open('/resume.pdf', '_blank');
    }
    return {
      output: React.createElement('div', { className: 'text-[var(--accent)]' },
        'Opening resume.pdf... (If nothing happened, ',
        React.createElement('a', {
          href: '/resume.pdf',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'underline hover:brightness-125',
        }, 'click here'),
        ')',
      ),
    };
  },
};

export const socialCommand: Command = {
  name: 'social',
  description: 'Open social links',
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-2' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Social Links'),
        ...profile.social.map((link, i) =>
          React.createElement('div', { key: i, className: 'ml-2' },
            `  ▸ `,
            React.createElement('a', {
              href: link.url,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-[var(--accent)] underline hover:brightness-125',
            }, `${link.name}: ${link.url}`),
          )
        ),
      ),
    };
  },
};

export const languagesCommand: Command = {
  name: 'languages',
  description: 'Spoken languages',
  aliases: ['lang'],
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-1' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Languages'),
        ...profile.languages.map((lang, i) =>
          React.createElement('div', { key: i, className: 'ml-2' },
            `  ${lang.name.padEnd(12)} ${lang.level}`
          )
        ),
      ),
    };
  },
};

export const historyCommand: Command = {
  name: 'history',
  description: 'Show command history',
  execute: () => {
    // This will be populated by the terminal context
    return {
      output: React.createElement('span', { className: 'text-[var(--text-dim)]' },
        'History is managed by the terminal.'
      ),
    };
  },
};
