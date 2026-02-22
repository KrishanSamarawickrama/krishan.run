'use client';

import { useEffect, useCallback } from 'react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { asciiBanner, bootMessages } from '@/lib/data/ascii-art';

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const allLines = [
    ...asciiBanner.split('\n'),
    '',
    ...bootMessages,
  ];

  const { displayedLines, isComplete, skip } = useTypingAnimation(allLines, {
    speed: 15,
    onComplete,
  });

  const handleClick = useCallback(() => {
    if (!isComplete) skip();
  }, [isComplete, skip]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isComplete && (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape')) {
      skip();
    }
  }, [isComplete, skip]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="cursor-pointer min-h-screen flex flex-col justify-center p-4"
      onClick={handleClick}
    >
      <pre className="text-[var(--accent)] text-xs sm:text-sm leading-tight whitespace-pre">
        {displayedLines.map((line, i) => (
          <div key={i}>
            {i < asciiBanner.split('\n').length ? (
              <span className="font-bold">{line}</span>
            ) : (
              <span className="text-[var(--text-dim)]">{line}</span>
            )}
          </div>
        ))}
        <span className="animate-pulse">█</span>
      </pre>
      {!isComplete && (
        <div className="text-[var(--text-dim)] text-xs mt-4 text-center">
          Press any key or click to skip...
        </div>
      )}
    </div>
  );
}
