'use client';

import { useCallback, useEffect } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { useTheme } from '@/hooks/useTheme';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';
import { TerminalWelcome } from './TerminalWelcome';
import { BootSequence } from '@/components/effects/BootSequence';
import { CRTEffect } from '@/components/effects/CRTEffect';
import { MatrixRain } from '@/components/effects/MatrixRain';
import { MobileNav } from '@/components/ui/MobileNav';

export function Terminal() {
  const {
    input,
    setInput,
    suggestions,
    outputHistory,
    theme,
    crtEnabled,
    isBooting,
    setIsBooting,
    handleKeyDown,
    inputRef,
    scrollRef,
    focusInput,
    executeCommand,
  } = useTerminal();

  useTheme(theme);

  const handleBootComplete = useCallback(() => {
    setIsBooting(false);
    // Auto-run help after boot
    setTimeout(() => {
      executeCommand('help');
    }, 200);
  }, [setIsBooting, executeCommand]);

  const handleMobileCommand = useCallback((cmd: string) => {
    executeCommand(cmd);
    focusInput();
  }, [executeCommand, focusInput]);

  // Focus input on any click in the terminal area
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        focusInput();
      }
    };
    // Small delay to not interfere with boot sequence
    if (!isBooting) {
      document.addEventListener('click', handleClick);
      focusInput();
    }
    return () => document.removeEventListener('click', handleClick);
  }, [isBooting, focusInput]);

  if (isBooting) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-mono">
        <CRTEffect enabled={crtEnabled} />
        <BootSequence onComplete={handleBootComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-mono relative">
      <CRTEffect enabled={crtEnabled} />
      <MatrixRain enabled={theme.name === 'matrix'} />

      <div
        ref={scrollRef}
        className="relative z-10 p-4 sm:p-6 pb-24 md:pb-6 max-w-4xl mx-auto min-h-screen overflow-y-auto"
        style={{ maxHeight: '100vh' }}
      >
        <TerminalWelcome />

        <div className="mt-4">
          <TerminalOutput entries={outputHistory} />
        </div>

        <div className="mt-3">
          <TerminalInput
            value={input}
            onChange={setInput}
            onKeyDown={handleKeyDown}
            inputRef={inputRef}
            suggestions={suggestions}
          />
        </div>
      </div>

      <MobileNav onCommand={handleMobileCommand} />
    </div>
  );
}
