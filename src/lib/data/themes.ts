import { Theme } from '@/types/terminal';

export const themes: Record<string, Theme> = {
  green: {
    name: 'green',
    label: 'Phosphor Green',
    colors: {
      bg: '#0a0e14',
      bgSecondary: '#111820',
      text: '#33ff33',
      textDim: '#1a8a1a',
      accent: '#00ff88',
      prompt: '#5599ff',
      error: '#ff3333',
    },
  },
  amber: {
    name: 'amber',
    label: 'Amber',
    colors: {
      bg: '#0a0a08',
      bgSecondary: '#14120e',
      text: '#ffb000',
      textDim: '#8a6000',
      accent: '#ffd700',
      prompt: '#ff8844',
      error: '#ff3333',
    },
  },
  blue: {
    name: 'blue',
    label: 'Cool Blue',
    colors: {
      bg: '#0a0e14',
      bgSecondary: '#0e1420',
      text: '#00bfff',
      textDim: '#006080',
      accent: '#00ffff',
      prompt: '#8888ff',
      error: '#ff4466',
    },
  },
  matrix: {
    name: 'matrix',
    label: 'Matrix',
    colors: {
      bg: '#000000',
      bgSecondary: '#0a0a0a',
      text: '#00ff41',
      textDim: '#008f11',
      accent: '#00ff41',
      prompt: '#00ff41',
      error: '#ff0000',
    },
  },
};

export const defaultTheme = themes.green;
