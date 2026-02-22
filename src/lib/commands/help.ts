import { Command } from '@/types/terminal';
import { registry } from './registry';
import React from 'react';

export const helpCommand: Command = {
  name: 'help',
  description: 'Show available commands',
  aliases: ['?', 'commands'],
  execute: () => {
    const commands = registry.getAll().filter(c => c.name !== 'sudo');
    const maxLen = Math.max(...commands.map(c => c.name.length));

    const lines = commands.map(cmd => {
      const padded = cmd.name.padEnd(maxLen + 2);
      return `  ${padded} ${cmd.description}`;
    });

    return {
      output: React.createElement('div', { className: 'space-y-0.5' },
        React.createElement('div', { className: 'text-[var(--accent)] font-bold mb-2' }, 'Available Commands:'),
        React.createElement('div', { className: 'text-[var(--text-dim)]' }, '─'.repeat(50)),
        ...lines.map((line, i) =>
          React.createElement('div', { key: i, className: 'whitespace-pre' }, line)
        ),
        React.createElement('div', { className: 'text-[var(--text-dim)] mt-2' }, '─'.repeat(50)),
        React.createElement('div', { className: 'text-[var(--text-dim)] mt-1' },
          'Tip: Use Tab for autocomplete, ↑/↓ for history'
        ),
      ),
    };
  },
};
