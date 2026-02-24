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
        <div key={entry.id} data-entry-id={entry.id}>
          <div className="border-t border-dashed border-[var(--text-dim)]/20 my-4" />
          <div className="space-y-1">
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
        </div>
      ))}
    </div>
  );
}
