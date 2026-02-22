'use client';

const fileTree = [
  { name: 'about.md', command: 'about', prefix: '── ', isDir: false },
  { name: 'skills.json', command: 'skills', prefix: '── ', isDir: false },
  { name: 'experience.json', command: 'experience', prefix: '── ', isDir: false },
  { name: 'education.json', command: 'education', prefix: '── ', isDir: false },
  { name: 'projects/', command: 'projects', prefix: '── ', isDir: true },
  { name: 'project1.sh', command: 'projects', prefix: '   ├── ', isDir: false },
  { name: 'project2.py', command: 'projects', prefix: '   ├── ', isDir: false },
  { name: 'project3.go', command: 'projects', prefix: '   └── ', isDir: false },
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
            className={`block w-full text-left text-base font-mono rounded px-2 py-1 transition-colors cursor-pointer hover:bg-[var(--text-dim)]/10 ${
              item.isDir
                ? 'text-[var(--accent)] font-bold hover:brightness-125'
                : 'text-[var(--text-dim)] hover:text-[var(--accent)]'
            }`}
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
