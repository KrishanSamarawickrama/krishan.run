'use client';

import { RefObject } from 'react';
import { TerminalPrompt } from './TerminalPrompt';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  suggestions: string[];
}

export function TerminalInput({
  value,
  onChange,
  onKeyDown,
  inputRef,
  suggestions,
}: TerminalInputProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <TerminalPrompt />
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            className="w-full bg-transparent outline-none caret-[var(--text)] text-[var(--text)] font-mono"
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
      {suggestions.length > 1 && (
        <div className="flex flex-wrap gap-2 ml-0 text-[var(--text-dim)]">
          {suggestions.map((s) => (
            <span key={s} className="text-[var(--accent)]">{s}</span>
          ))}
        </div>
      )}
    </div>
  );
}
