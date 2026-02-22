'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypingAnimationOptions {
  speed?: number;
  onComplete?: () => void;
}

export function useTypingAnimation(
  lines: string[],
  options: UseTypingAnimationOptions = {}
) {
  const { speed = 30, onComplete } = options;
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (isComplete) return;
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      onCompleteRef.current?.();
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentLine === '') {
      // Empty line - add immediately
      setDisplayedLines(prev => [...prev, '']);
      setCurrentLineIndex(prev => prev + 1);
      setCurrentCharIndex(0);
      return;
    }

    if (currentCharIndex >= currentLine.length) {
      // Move to next line
      setCurrentLineIndex(prev => prev + 1);
      setCurrentCharIndex(0);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedLines(prev => {
        const newLines = [...prev];
        if (newLines.length <= currentLineIndex) {
          newLines.push(currentLine.charAt(currentCharIndex));
        } else {
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
        }
        return newLines;
      });
      setCurrentCharIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, lines, speed, isComplete]);

  const skip = useCallback(() => {
    setDisplayedLines([...lines]);
    setIsComplete(true);
    onCompleteRef.current?.();
  }, [lines]);

  return { displayedLines, isComplete, skip };
}
