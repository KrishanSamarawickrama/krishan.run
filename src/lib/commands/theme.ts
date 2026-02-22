import { Command, CommandResult } from '@/types/terminal';
import { themes } from '@/lib/data/themes';
import React from 'react';

// The actual theme switching is handled by the terminal context.
// This command returns the info, and the terminal checks for theme commands.
export const themeCommand: Command = {
  name: 'theme',
  description: 'Switch theme (green / amber / blue / matrix)',
  usage: 'theme <name>',
  execute: (args): CommandResult => {
    const themeName = args[0]?.toLowerCase();

    if (!themeName) {
      const themeList = Object.values(themes).map(t =>
        `  ${t.name.padEnd(10)} ${t.label}`
      ).join('\n');

      return {
        output: React.createElement('div', { className: 'space-y-1' },
          React.createElement('div', { className: 'text-[var(--accent)] font-bold' }, 'Available Themes:'),
          React.createElement('pre', { className: 'whitespace-pre' }, themeList),
          React.createElement('div', { className: 'text-[var(--text-dim)] mt-2' }, "Usage: theme <name>"),
        ),
      };
    }

    if (!themes[themeName]) {
      return {
        output: React.createElement('span', { className: 'text-[var(--error)]' },
          `Unknown theme: '${themeName}'. Available: ${Object.keys(themes).join(', ')}`
        ),
      };
    }

    // Return a special marker that the terminal context will handle
    return {
      output: React.createElement('div', { className: 'text-[var(--accent)]' },
        `Theme switched to '${themes[themeName].label}'`
      ),
    };
  },
};
