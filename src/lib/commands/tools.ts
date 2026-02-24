import { Command } from '@/types/terminal';
import { profile } from '@/lib/data/profile';
import React from 'react';

const divider = '─'.repeat(50);
const dottedDivider = '─ '.repeat(25);

export const toolsCommand: Command = {
  name: 'tools',
  description: 'Tools and applications built by me',
  execute: () => {
    return {
      output: React.createElement('div', { className: 'space-y-4' },
        // Header
        React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, '// Tools'),
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),

        // Tool entries
        ...profile.tools.flatMap((tool, i) => {
          const isLast = i === profile.tools.length - 1;
          const elements = [
            React.createElement('div', { key: `tool-${i}`, className: 'ml-2 space-y-1' },
              // Tool name + status badge
              React.createElement('div', { className: 'text-[var(--accent)] font-bold flex items-center gap-2' },
                React.createElement('span', null, '│'),
                ` ${tool.name}`,
                React.createElement('span', {
                  className: tool.status === 'live'
                    ? 'text-[var(--accent)] text-xs font-mono'
                    : 'text-[var(--text-dim)] text-xs font-mono',
                }, tool.status === 'live' ? '[ LIVE ]' : '[ COMING SOON ]'),
              ),
              // Description
              React.createElement('div', { className: 'ml-6 text-[var(--text)] text-sm leading-relaxed' },
                tool.description
              ),
              // Highlights
              tool.highlights && React.createElement('div', { className: 'ml-6 space-y-0.5 mt-1' },
                ...tool.highlights.map((h, j) =>
                  React.createElement('div', { key: j, className: 'text-[var(--text-dim)] text-sm' },
                    `▸ ${h}`
                  )
                )
              ),
              // URL link - prominent CTA
              React.createElement('div', { className: 'ml-6 mt-3' },
                React.createElement('a', {
                  href: tool.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--accent)]/60 rounded text-[var(--accent)] font-bold font-mono hover:bg-[var(--accent)]/10 hover:text-glow-sm transition-all',
                },
                  '→ Try it live',
                  React.createElement('span', { className: 'text-[var(--text-dim)] text-xs font-normal' }, tool.url),
                )
              ),
              // Tech tags
              React.createElement('div', { className: 'ml-6 flex flex-wrap gap-1.5 mt-1' },
                ...tool.tech.split(', ').map((tech) =>
                  React.createElement('span', {
                    key: tech,
                    className: 'text-[var(--accent)] text-xs font-mono',
                  }, `[ ${tech} ]`)
                ),
              ),
            ),
          ];

          if (!isLast) {
            elements.push(
              React.createElement('div', { key: `div-${i}`, className: 'text-[var(--text-dim)] ml-2' }, dottedDivider)
            );
          }

          return elements;
        }),

        // Footer
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, divider),
        React.createElement('div', { className: 'ml-2 space-y-1' },
          React.createElement('div', { className: 'text-[var(--text-dim)]' },
            `  ${profile.tools.length} tool${profile.tools.length !== 1 ? 's' : ''} available`
          ),
          React.createElement('div', { className: 'text-[var(--text-dim)] text-sm' },
            '  More tools coming soon...'
          ),
        ),
      ),
    };
  },
};
