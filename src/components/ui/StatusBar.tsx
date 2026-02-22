'use client';

import { profile } from '@/lib/data/profile';

export function StatusBar() {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-2 bg-[var(--bg-secondary)] border-t border-dashed border-[var(--text-dim)]/30 text-sm font-mono shrink-0 relative z-10">
      {/* Fake System Stats */}
      <div className="flex gap-8 text-[var(--text-dim)]">
        <span>CPU: <span className="text-[var(--accent)]">35%</span></span>
        <span>RAM: <span className="text-[var(--accent)]">60%</span></span>
        <span>NETWORK: <span className="text-[var(--accent)]">1GBps</span></span>
      </div>

      {/* Social Links */}
      <div className="flex gap-5">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline hover:brightness-125"
        >
          [LinkedIn]
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline hover:brightness-125"
        >
          [GitHub]
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-[var(--accent)] hover:underline hover:brightness-125"
        >
          [Email]
        </a>
      </div>
    </div>
  );
}
