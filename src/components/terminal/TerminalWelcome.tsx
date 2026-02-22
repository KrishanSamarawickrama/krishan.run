'use client';

import { asciiBanner } from '@/lib/data/ascii-art';

export function TerminalWelcome() {
  return (
    <div className="space-y-2">
      <pre className="text-[var(--accent)] text-xs sm:text-sm leading-tight font-bold whitespace-pre overflow-x-auto">
        {asciiBanner}
      </pre>
      <div className="text-[var(--text-dim)] text-sm">
        Welcome to krishan.run — Interactive Terminal Portfolio
      </div>
      <div className="text-[var(--text-dim)] text-sm">
        Type <span className="text-[var(--accent)]">help</span> to see available commands.
      </div>
    </div>
  );
}
