'use client';

const mobileCommands = [
  'skills', 'experience', 'projects', 'tools', 'education',
  'certs', 'contact', 'neofetch', 'clear',
];

interface MobileNavProps {
  onCommand: (command: string) => void;
}

export function MobileNav({ onCommand }: MobileNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[var(--bg)]/95 backdrop-blur border-t border-[var(--text-dim)]/20 p-2 md:hidden">
      <div className="flex flex-wrap gap-1.5 justify-center">
        {mobileCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => onCommand(cmd)}
            className="px-3 py-1.5 text-xs font-mono border border-[var(--text-dim)]/40 rounded text-[var(--accent)] bg-[var(--bg-secondary)] hover:bg-[var(--text-dim)]/20 active:bg-[var(--text-dim)]/30 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
