import { Command, ParsedCommand } from '@/types/terminal';

export type { Command, ParsedCommand };

export interface CommandContext {
  args: string[];
  flags: Record<string, string>;
  raw: string;
  setTheme: (themeName: string) => boolean;
  addOutput: (entry: { command: string; output: React.ReactNode }) => void;
}
