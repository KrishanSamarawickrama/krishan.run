'use client';

export function TerminalPrompt() {
  return (
    <span className="whitespace-nowrap">
      <span className="text-[var(--accent)] font-bold">visitor</span>
      <span className="text-[var(--text-dim)]">@</span>
      <span className="text-[var(--prompt)] font-bold">krishan.run</span>
      <span className="text-[var(--text-dim)]">:</span>
      <span className="text-[var(--accent)]">~</span>
      <span className="text-[var(--text)]">$ </span>
    </span>
  );
}
