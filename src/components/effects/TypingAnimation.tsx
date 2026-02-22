'use client';

import { useTypingAnimation } from '@/hooks/useTypingAnimation';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export function TypingAnimation({ text, speed = 30, onComplete, className }: TypingAnimationProps) {
  const { displayedLines, isComplete } = useTypingAnimation(
    [text],
    { speed, onComplete }
  );

  return (
    <span className={className}>
      {displayedLines[0] || ''}
      {!isComplete && <span className="animate-pulse">█</span>}
    </span>
  );
}
