'use client';

import { useState } from 'react';
import { profile } from '@/lib/data/profile';

const infoLines = [
  { label: 'User', value: profile.name },
  { label: 'Role', value: profile.title },
  { label: 'Location', value: profile.location },
  { label: '', value: '' },
  { label: 'OS', value: 'Portfolio-OS 1.0' },
  { label: 'Kernel', value: 'Web-based' },
  { label: 'Uptime', value: '10+ Years' },
  { label: 'Shell', value: 'Zsh-like' },
  { label: 'Terminal', value: 'WebTTY' },
  { label: 'CPU', value: 'Creative Mind' },
  { label: 'Memory', value: 'Unlimited Learning' },
];

const condensedExperience = [
  {
    title: `Senior Technical Lead @ ${profile.company}`,
    period: '2019-Present',
    desc: 'Architecting scalable software solutions, leadership, mentorship. C#, .NET, Azure, SQL.',
  },
  {
    title: 'Software Architect',
    period: '2016-2019',
    desc: 'Enterprise domains, cloud-native architectures.',
  },
  {
    title: 'Lead Developer',
    period: '2013-2016',
    desc: 'Data analytics, innovation. Python, Java.',
  },
];

const condensedEducation = [
  { text: `${profile.education[0].degree}, ${profile.education[0].institution}` },
  { text: `${profile.education[1].degree}, ${profile.education[1].institution}` },
];

function Prompt() {
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

export function ProfileHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="mb-8">
      {/* $ neofetch */}
      <div className="mb-4">
        <span className="text-[var(--accent)] text-glow-sm">$</span> neofetch
      </div>

      {/* Two-column layout: Profile left, Experience/Education right */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">

        {/* Left Column: Portrait + System Info */}
        <div className="shrink-0">
          <div className="flex gap-8 items-start">
            {/* Portrait — desktop only */}
            <div className="hidden md:block shrink-0">
              <div className="relative w-52 h-60 border border-[var(--accent)]/40 rounded bg-[var(--bg-secondary)] overflow-hidden">
                {imgError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <div className="text-[var(--accent)] text-6xl font-bold text-glow tracking-widest">
                      KS
                    </div>
                    <div className="text-[var(--text-dim)] text-sm tracking-wider">
                      krishan.run
                    </div>
                  </div>
                ) : (
                  <img
                    src="/profile.jpg"
                    alt={profile.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'grayscale(1) brightness(1.3) sepia(1) hue-rotate(80deg) saturate(5) contrast(1.4)',
                    }}
                  />
                )}
                {/* Scanline overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
                  }}
                />
              </div>
            </div>

            {/* System Info */}
            <div className="font-mono min-w-0">
              <div className="space-y-0.5 leading-relaxed">
                {infoLines.map((line, i) => (
                  <div key={i}>
                    {line.label ? (
                      <>
                        <span className="text-[var(--accent)] font-bold text-glow-sm">{line.label}</span>
                        <span className="text-[var(--text)]">: {line.value}</span>
                      </>
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Experience + Education stacked */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">
          {/* cat experience.json */}
          <div>
            <Prompt />
            <span>cat experience.json</span>
          </div>

          {/* Experience Box */}
          <div className="border border-[var(--accent)]/50 rounded px-6 py-5">
            <div className="text-[var(--accent)] font-bold mb-4 text-glow-sm flex items-center gap-2">
              <span className="text-[var(--accent)]">│</span> EXPERIENCE
            </div>
            <div className="space-y-5 leading-relaxed">
              {condensedExperience.map((exp, i) => (
                <div key={i}>
                  <span className="text-[var(--accent)] font-bold">{exp.title}</span>
                  <span className="text-[var(--text-dim)]"> ({exp.period})</span>
                  <span className="text-[var(--text)]">: {exp.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Box */}
          <div className="border border-[var(--accent)]/50 rounded px-6 py-5">
            <div className="text-[var(--accent)] font-bold mb-4 text-glow-sm flex items-center gap-2">
              <span className="text-[var(--accent)]">│</span> EDUCATION
            </div>
            <div className="space-y-4 leading-relaxed">
              {condensedEducation.map((edu, i) => (
                <div key={i} className="text-[var(--text)]">
                  {edu.text}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
