'use client';

import { useEffect } from 'react';
import { Theme } from '@/types/terminal';

export function useTheme(theme: Theme) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg', theme.colors.bg);
    root.style.setProperty('--bg-secondary', theme.colors.bgSecondary);
    root.style.setProperty('--text', theme.colors.text);
    root.style.setProperty('--text-dim', theme.colors.textDim);
    root.style.setProperty('--accent', theme.colors.accent);
    root.style.setProperty('--prompt', theme.colors.prompt);
    root.style.setProperty('--error', theme.colors.error);
  }, [theme]);
}
