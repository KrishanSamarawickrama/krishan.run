'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useTerminalContext } from '@/context/TerminalContext';
import { useCommandHistory } from './useCommandHistory';
import { useAutocomplete } from './useAutocomplete';

export function useTerminal() {
  const {
    outputHistory,
    commandHistory,
    theme,
    crtEnabled,
    isBooting,
    executeCommand,
    setIsBooting,
  } = useTerminalContext();

  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigateUp, navigateDown, resetIndex } = useCommandHistory(commandHistory);
  const { getSuggestions, complete } = useAutocomplete();

  const handleSubmit = useCallback(() => {
    if (!input.trim()) return;
    executeCommand(input);
    setInput('');
    setSuggestions([]);
    resetIndex();
  }, [input, executeCommand, resetIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = navigateUp();
      if (prev !== null) setInput(prev);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = navigateDown();
      if (next !== null) setInput(next);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const completed = complete(input);
      if (completed) {
        setInput(completed);
        setSuggestions([]);
      } else {
        const sugs = getSuggestions(input);
        setSuggestions(sugs);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      executeCommand('clear');
      setInput('');
    }
  }, [handleSubmit, navigateUp, navigateDown, complete, getSuggestions, input, executeCommand]);

  const handleInputChange = useCallback((value: string) => {
    setInput(value);
    if (value.trim()) {
      setSuggestions(getSuggestions(value));
    } else {
      setSuggestions([]);
    }
    resetIndex();
  }, [getSuggestions, resetIndex]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-scroll to the start of the latest command output, or to top on clear
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef.current) return;
    if (outputHistory.length === 0) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const lastId = outputHistory[outputHistory.length - 1].id;
    const el = scrollRef.current.querySelector(`[data-entry-id="${lastId}"]`);
    if (el) {
      el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [outputHistory]);

  return {
    input,
    setInput: handleInputChange,
    suggestions,
    outputHistory,
    commandHistory,
    theme,
    crtEnabled,
    isBooting,
    setIsBooting,
    handleKeyDown,
    handleSubmit,
    inputRef,
    scrollRef,
    focusInput,
    executeCommand,
  };
}
