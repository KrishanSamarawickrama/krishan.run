'use client';

import { TerminalEntry } from '@/types/terminal';
import { TerminalPrompt } from './TerminalPrompt';

interface TerminalOutputProps {
  entries: TerminalEntry[];
}

export function TerminalOutput({ entries }: TerminalOutputProps) {
  return (
    <div className="space-y-3">
      {entries.map((entry) => (
        <div key={entry.id} className="space-y-1">
          <div className="flex items-start">
            <TerminalPrompt />
            <span className="break-all">{entry.command}</span>
          </div>
          {entry.output && (
            <div className="ml-0 mt-1 leading-relaxed">
              {entry.output}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
