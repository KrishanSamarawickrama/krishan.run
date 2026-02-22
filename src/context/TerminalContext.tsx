'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { TerminalEntry, Theme } from '@/types/terminal';
import { themes, defaultTheme } from '@/lib/data/themes';
import { registry, parseCommand } from '@/lib/commands';

interface TerminalContextValue {
  outputHistory: TerminalEntry[];
  commandHistory: string[];
  theme: Theme;
  crtEnabled: boolean;
  isBooting: boolean;
  executeCommand: (input: string) => void;
  addOutput: (entry: Omit<TerminalEntry, 'id' | 'timestamp'>) => void;
  clearOutput: () => void;
  setTheme: (name: string) => boolean;
  toggleCrt: () => void;
  setIsBooting: (value: boolean) => void;
}

const TerminalContext = createContext<TerminalContextValue | null>(null);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [outputHistory, setOutputHistory] = useState<TerminalEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [isBooting, setIsBooting] = useState(true);

  const addOutput = useCallback((entry: Omit<TerminalEntry, 'id' | 'timestamp'>) => {
    setOutputHistory(prev => [
      ...prev,
      {
        ...entry,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      },
    ]);
  }, []);

  const clearOutput = useCallback(() => {
    setOutputHistory([]);
  }, []);

  const setTheme = useCallback((name: string): boolean => {
    const t = themes[name];
    if (t) {
      setThemeState(t);
      return true;
    }
    return false;
  }, []);

  const toggleCrt = useCallback(() => {
    setCrtEnabled(prev => !prev);
  }, []);

  const executeCommand = useCallback((input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, trimmed]);
    const parsed = parseCommand(trimmed);

    // Handle theme switching
    if (parsed.name === 'theme' && parsed.args[0]) {
      setTheme(parsed.args[0].toLowerCase());
    }

    // Handle CRT toggle
    if (parsed.name === 'crt') {
      toggleCrt();
      addOutput({
        command: trimmed,
        output: React.createElement('span', { className: 'text-[var(--accent)]' },
          `CRT effects ${!crtEnabled ? 'enabled' : 'disabled'}`
        ),
      });
      return;
    }

    const result = registry.execute(parsed.name, parsed.args, parsed.flags);

    if (result.clear) {
      clearOutput();
      return;
    }

    addOutput({
      command: trimmed,
      output: result.output,
    });
  }, [addOutput, clearOutput, setTheme, toggleCrt, crtEnabled]);

  return (
    <TerminalContext.Provider value={{
      outputHistory,
      commandHistory,
      theme,
      crtEnabled,
      isBooting,
      executeCommand,
      addOutput,
      clearOutput,
      setTheme,
      toggleCrt,
      setIsBooting,
    }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminalContext() {
  const ctx = useContext(TerminalContext);
  if (!ctx) throw new Error('useTerminalContext must be used within TerminalProvider');
  return ctx;
}
