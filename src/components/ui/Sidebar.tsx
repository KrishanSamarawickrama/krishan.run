'use client';

const fileTree = [
  { name: 'experience.json', command: 'experience', prefix: '── ' },
  { name: 'education.json', command: 'education', prefix: '── ' },  
  { name: 'skills.dart', command: 'skills', prefix: '── ' },  
  { name: 'projects.sh', command: 'projects', prefix: '── ' },
  { name: 'tools.exe', command: 'tools', prefix: '── ' },
  { name: 'about.md', command: 'about', prefix: '── ' },
];

interface SidebarProps {
  onCommand: (command: string) => void;
}

export function Sidebar({ onCommand }: SidebarProps) {
  return (
    <div className="hidden md:flex flex-col w-64 border-r border-dashed border-[var(--text-dim)]/30 bg-[var(--bg-secondary)]/50 overflow-y-auto shrink-0" style={{ padding: '24px 20px' }}>
      <div className="text-[var(--accent)] font-bold text-base tracking-widest uppercase mb-6 text-glow-sm">
        {"KRISHAN'S PORTFOLIO"}
      </div>

      <div className="space-y-1 flex-1">
        {fileTree.map((item, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              onCommand(item.command);
            }}
            className="block w-full text-left text-base font-mono rounded px-2 py-1 transition-colors cursor-pointer hover:bg-[var(--text-dim)]/10 text-[var(--text-dim)] hover:text-[var(--accent)]"
          >
            <span className="opacity-40">{item.prefix}</span>
            {item.name}
          </button>
        ))}
      </div>

      {/* Decorative blinking cursor */}
      <div className="mt-8">
        <span className="text-[var(--accent)] animate-pulse text-base">█</span>
      </div>
    </div>
  );
}
