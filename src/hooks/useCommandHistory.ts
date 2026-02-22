'use client';

import { useState, useCallback } from 'react';

export function useCommandHistory(history: string[]) {
  const [historyIndex, setHistoryIndex] = useState(-1);

  const navigateUp = useCallback((): string | null => {
    if (history.length === 0) return null;
    const newIndex = historyIndex === -1
      ? history.length - 1
      : Math.max(0, historyIndex - 1);
    setHistoryIndex(newIndex);
    return history[newIndex];
  }, [history, historyIndex]);

  const navigateDown = useCallback((): string | null => {
    if (historyIndex === -1) return null;
    const newIndex = historyIndex + 1;
    if (newIndex >= history.length) {
      setHistoryIndex(-1);
      return '';
    }
    setHistoryIndex(newIndex);
    return history[newIndex];
  }, [history, historyIndex]);

  const resetIndex = useCallback(() => {
    setHistoryIndex(-1);
  }, []);

  return { navigateUp, navigateDown, resetIndex, historyIndex };
}
