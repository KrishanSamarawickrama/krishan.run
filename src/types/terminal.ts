import { ReactNode } from 'react';

export interface Command {
  name: string;
  description: string;
  aliases?: string[];
  usage?: string;
  execute: (args: string[], flags: Record<string, string>) => CommandResult;
}

export interface CommandResult {
  output: ReactNode;
  clear?: boolean;
}

export interface ParsedCommand {
  name: string;
  args: string[];
  flags: Record<string, string>;
  raw: string;
}

export interface TerminalEntry {
  id: string;
  command: string;
  output: ReactNode;
  timestamp: number;
}

export interface Theme {
  name: string;
  label: string;
  colors: {
    bg: string;
    bgSecondary: string;
    text: string;
    textDim: string;
    accent: string;
    prompt: string;
    error: string;
  };
}

export interface TerminalState {
  outputHistory: TerminalEntry[];
  commandHistory: string[];
  historyIndex: number;
  theme: Theme;
  crtEnabled: boolean;
  isBooting: boolean;
  currentInput: string;
}
