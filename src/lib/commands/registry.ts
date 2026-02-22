import { Command, CommandResult } from '@/types/terminal';
import React from 'react';

class CommandRegistry {
  private commands: Map<string, Command> = new Map();
  private aliases: Map<string, string> = new Map();

  register(command: Command): void {
    this.commands.set(command.name, command);
    if (command.aliases) {
      for (const alias of command.aliases) {
        this.aliases.set(alias, command.name);
      }
    }
  }

  get(name: string): Command | undefined {
    const resolvedName = this.aliases.get(name) || name;
    return this.commands.get(resolvedName);
  }

  execute(name: string, args: string[], flags: Record<string, string>): CommandResult {
    const command = this.get(name);
    if (!command) {
      return {
        output: React.createElement('span', { className: 'text-[var(--error)]' },
          `Command not found: ${name}. Type 'help' for available commands.`
        ),
      };
    }
    return command.execute(args, flags);
  }

  getAll(): Command[] {
    return Array.from(this.commands.values());
  }

  getNames(): string[] {
    return [
      ...Array.from(this.commands.keys()),
      ...Array.from(this.aliases.keys()),
    ];
  }
}

export const registry = new CommandRegistry();
