'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '@/lib/data/profile';

// ── Animation Variants ──────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// ── Helpers ──────────────────────────────────────────────────────────────

const languageLevelMap: Record<string, number> = {
  'Native or Bilingual': 100,
  'Full Professional': 85,
  'Limited Working': 60,
};

function getTopSkills(n: number) {
  const all: { name: string; level: number }[] = [];
  for (const skills of Object.values(profile.skills)) {
    for (const skill of skills) {
      if (skill.level >= 80) all.push(skill);
    }
  }
  return all.sort((a, b) => b.level - a.level).slice(0, n);
}

function renderBarChars(level: number, width = 20): string {
  const filled = Math.round((level / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

// ── Counter Hook ─────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { count, ref };
}

// ── Animated Progress Bar ────────────────────────────────────────────────

function AnimatedBar({
  level,
  delay = 0,
  barWidth = 20,
}: {
  level: number;
  delay?: number;
  barWidth?: number;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / 1000, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(eased * level));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, level, delay]);

  return (
    <span ref={ref} className="text-[var(--accent)]">
      [{renderBarChars(current, barWidth)}] {current}%
    </span>
  );
}

// ── Sub-Components ──────────────────────────────────────────────────────

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
  { role: 'Senior Technical Lead', company: 'Rootcode', period: '2025 – Present' },
  { role: 'Technical Lead', company: 'Rootcode', period: '2023 – 2025' },
  { role: 'Associate Technical Lead', company: 'Rootcode', period: '2021 – 2023' },
];

const condensedEducation = [
  { degree: 'M.Sc. Data Science', school: 'Cardiff Metropolitan', year: '2024 – 2025' },
  { degree: 'B.Sc. Computer Science', school: 'University College Dublin', year: '2012 – 2014' },
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

function CommandLine({ command }: { command: string }) {
  return (
    <div className="mb-4">
      <Prompt />
      <span>{command}</span>
    </div>
  );
}

function StatCounter({ label, value }: { label: string; value: string }) {
  const numeric = parseInt(value);
  const suffix = value.replace(/\d+/, '');
  const { count, ref } = useCountUp(isNaN(numeric) ? 0 : numeric);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="text-2xl md:text-3xl font-bold text-[var(--accent)] text-glow"
      >
        {isNaN(numeric) ? value : `${count}${suffix}`}
      </span>
      <div className="text-xs text-[var(--text-dim)] mt-1 tracking-wider">
        {label}
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────

export function ProfileHero() {
  const [imgError, setImgError] = useState(false);
  const topSkills = getTopSkills(10);

  return (
    <div className="space-y-14">
      {/* ══════════ Section 1: Neofetch Hero ══════════ */}
      <section>
        <div className="mb-4">
          <span className="text-[var(--accent)] text-glow-sm">$</span> neofetch
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left group: Portrait + System Info */}
          <div className="flex flex-col md:flex-row gap-8 items-start shrink-0">
            {/* Portrait */}
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
                    src="/images/profile.png"
                    alt={profile.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                    style={{
                      filter:
                        'grayscale(1) brightness(1.1) sepia(0.4) hue-rotate(80deg) saturate(1.5) contrast(1.1)',
                    }}
                  />
                )}
              </div>
            </div>

            {/* System Info */}
            <div className="font-mono min-w-0">
              <div className="space-y-0.5 leading-relaxed">
                {infoLines.map((line, i) => (
                  <div key={i}>
                    {line.label ? (
                      <>
                        <span className="text-[var(--accent)] font-bold text-glow-sm">
                          {line.label}
                        </span>
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

          {/* Right column: Experience + Education */}
          <div className="flex-1 flex flex-col gap-5 min-w-0">
            <div className="mb-1">
              <Prompt />
              <span>cat experience.json</span>
            </div>

            {/* Experience */}
            <div className="border border-[var(--accent)]/50 rounded px-4 py-4 md:px-8 md:py-6">
              <div className="text-[var(--accent)] font-bold mb-4 text-glow-sm flex items-center gap-2">
                <span>│</span> EXPERIENCE
              </div>
              <div className="space-y-3 font-mono text-sm">
                {condensedExperience.map((exp) => (
                  <div key={exp.role} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] shrink-0">▸</span>
                    <div>
                      <span className="text-[var(--text)]">{exp.role}</span>
                      <span className="text-[var(--text-dim)]">
                        {' '}— {exp.company}, {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="border border-[var(--accent)]/50 rounded px-4 py-4 md:px-8 md:py-6">
              <div className="text-[var(--accent)] font-bold mb-4 text-glow-sm flex items-center gap-2">
                <span>│</span> EDUCATION
              </div>
              <div className="space-y-3 font-mono text-sm">
                {condensedEducation.map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] shrink-0">▸</span>
                    <div>
                      <span className="text-[var(--text)]">{edu.degree}</span>
                      <span className="text-[var(--text-dim)]">
                        {' '}— {edu.school}, {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 py-4 border-t border-b border-[var(--accent)]/20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profile.stats.map((stat, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <StatCounter label={stat.label} value={stat.value} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ Section 2: Top Skills Tags ══════════ */}
      <section>
        <CommandLine command="echo $SKILLS" />
        <motion.div
          className="flex flex-wrap gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profile.topSkills.map((skill) => (
            <motion.span
              key={skill}
              variants={fadeInScale}
              className="px-4 py-1.5 border border-[var(--accent)]/60 rounded text-sm text-[var(--accent)] font-mono
                         hover:border-[var(--accent)] hover:shadow-[0_0_8px_var(--accent)] transition-all duration-200 cursor-default"
            >
              [ {skill} ]
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ══════════ Section 3: Skills Matrix ══════════ */}
      <section>
        <CommandLine command="cat /proc/skills | sort -rn" />
        <motion.div
          className="border border-[var(--accent)]/40 rounded px-4 py-4 md:px-8 md:py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[var(--accent)] font-bold mb-4 text-glow-sm flex items-center gap-2">
            <span>│</span> CAPABILITIES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 font-mono text-sm">
            {topSkills.map((skill, i) => (
              <div key={skill.name} className="flex items-center gap-2 overflow-hidden">
                <span className="text-[var(--text)] w-28 md:w-48 shrink-0 truncate">
                  {skill.name}
                </span>
                <AnimatedBar level={skill.level} delay={300 + i * 80} barWidth={10} />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════ Section 4: Project Domain Cards ══════════ */}
      <section>
        <CommandLine command="ls ~/projects/" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profile.projects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeInUp}
              className="border border-[var(--accent)]/30 rounded px-4 py-4 md:px-8 md:py-6
                         hover:border-[var(--accent)]/70 hover:-translate-y-0.5
                         transition-all duration-200"
            >
              <div className="text-[var(--accent)] font-bold text-glow-sm mb-2">
                {project.name}
              </div>
              <div className="text-[var(--text)] text-sm leading-relaxed mb-3">
                {project.description}
              </div>
              <div className="text-[var(--text-dim)] text-xs font-mono">
                {project.tech}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════ Section 5: Certifications + Languages ══════════ */}
      <section>
        <CommandLine command="cat credentials.json" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Certifications */}
          <motion.div
            className="border border-[var(--accent)]/40 rounded px-4 py-4 md:px-8 md:py-6"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-[var(--accent)] font-bold mb-4 text-glow-sm flex items-center gap-2">
              <span>│</span> CERTIFICATIONS
            </div>
            <div className="space-y-3">
              {profile.certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-2 text-sm">
                  <span className="text-[var(--accent)] shrink-0">[✓]</span>
                  <div>
                    <span className="text-[var(--text)]">{cert.name}</span>
                    <span className="text-[var(--text-dim)]">
                      {' '}
                      — {cert.issuer}, {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            className="border border-[var(--accent)]/40 rounded px-4 py-4 md:px-8 md:py-6"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-[var(--accent)] font-bold mb-4 text-glow-sm flex items-center gap-2">
              <span>│</span> LANGUAGES
            </div>
            <div className="space-y-3 font-mono text-sm">
              {profile.languages.map((lang) => {
                const level = languageLevelMap[lang.level] ?? 50;
                return (
                  <div key={lang.name} className="flex items-center gap-2 md:gap-3">
                    <span className="text-[var(--text)] w-20 md:w-24 shrink-0 truncate">
                      {lang.name}
                    </span>
                    <AnimatedBar level={level} delay={200} barWidth={8} />
                    <span className="text-[var(--text-dim)] text-xs shrink-0 hidden sm:inline">
                      {lang.level}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ Section 6: Try Commands Hint ══════════ */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[var(--text-dim)] text-sm font-mono">
            Type <span className="text-[var(--accent)] font-bold text-glow-sm">help</span> for more commands            
          </div>
        </motion.div>
      </section>
    </div>
  );
}

