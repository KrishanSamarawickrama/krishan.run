import { ParsedCommand } from '@/types/terminal';

export function parseCommand(input: string): ParsedCommand {
  const raw = input.trim();
  const parts = raw.split(/\s+/);
  const name = (parts[0] || '').toLowerCase();
  const args: string[] = [];
  const flags: Record<string, string> = {};

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith('--')) {
      const [key, value] = part.slice(2).split('=');
      flags[key] = value || 'true';
    } else if (part.startsWith('-')) {
      flags[part.slice(1)] = 'true';
    } else {
      args.push(part);
    }
  }

  return { name, args, flags, raw };
}
