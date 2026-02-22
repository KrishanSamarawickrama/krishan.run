'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { asciiBanner, bootMessages } from '@/lib/data/ascii-art';

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [waitingForKey, setWaitingForKey] = useState(false);

  const allLines = [
    ...asciiBanner.split('\n'),
    '',
    ...bootMessages,
  ];

  const bannerLineCount = asciiBanner.split('\n').length;

  const handleTypingDone = useCallback(() => {
    setWaitingForKey(true);
  }, []);

  const { displayedLines, isComplete, skip } = useTypingAnimation(allLines, {
    speed: 15,
    onComplete: handleTypingDone,
  });

  const handleInteraction = useCallback(() => {
    if (waitingForKey) {
      onComplete();
    } else if (!isComplete) {
      skip();
    }
  }, [waitingForKey, isComplete, skip, onComplete]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (waitingForKey) {
      e.preventDefault();
      onComplete();
    } else if (!isComplete && (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape')) {
      skip();
    }
  }, [waitingForKey, isComplete, skip, onComplete]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="cursor-pointer h-full flex flex-col items-center justify-center p-4"
      onClick={handleInteraction}
    >
      <pre className="text-[var(--accent)] text-xs sm:text-sm leading-tight whitespace-pre text-center">
        {displayedLines.map((line, i) => (
          <div key={i}>
            {i < bannerLineCount ? (
              <span className="font-bold">{line}</span>
            ) : (
              <span className="text-[var(--text-dim)]">{line}</span>
            )}
          </div>
        ))}
        {!waitingForKey && <span className="animate-pulse">█</span>}
      </pre>
      {waitingForKey ? (
        <div className="text-[var(--accent)] text-sm mt-6 text-center animate-pulse">
          Press any key to continue...
        </div>
      ) : !isComplete ? (
        <div className="text-[var(--text-dim)] text-xs mt-4 text-center">
          Press any key or click to skip...
        </div>
      ) : null}
    </div>
  );
}
