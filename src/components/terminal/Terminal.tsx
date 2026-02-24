'use client';

import { useCallback, useEffect } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { useTheme } from '@/hooks/useTheme';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';
import { ProfileHero } from './ProfileHero';
import { BootSequence } from '@/components/effects/BootSequence';
import { CRTEffect } from '@/components/effects/CRTEffect';
import { MatrixRain } from '@/components/effects/MatrixRain';
import { MobileNav } from '@/components/ui/MobileNav';
import { Sidebar } from '@/components/ui/Sidebar';
import { StatusBar } from '@/components/ui/StatusBar';

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
  }, [setIsBooting]);

  const handleCommand = useCallback((cmd: string) => {
    executeCommand(cmd);
    focusInput();
  }, [executeCommand, focusInput]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Only focus input when clicking inside the terminal area
      if (scrollRef.current?.contains(e.target as Node)) {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
          focusInput();
        }
      }
    };
    if (!isBooting) {
      document.addEventListener('click', handleClick);
      focusInput();
      // Reset scroll to top so hero is visible after boot
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }
    return () => document.removeEventListener('click', handleClick);
  }, [isBooting, focusInput, scrollRef]);

  return (
    <div
      className="h-screen w-screen max-w-[1600px] mx-auto p-2 md:p-5 bg-black box-border text-[var(--text)] font-mono"
    >
      <div className="w-full h-full bg-[var(--bg)] flex flex-col overflow-hidden rounded-lg border border-[var(--text-dim)]/30">
      {/* Terminal Title Bar */}
      <div
        className="flex items-center px-4 py-2 bg-[var(--bg-secondary)] border-b border-dashed border-[var(--text-dim)]/30 shrink-0"
      >
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center text-xs text-[var(--text-dim)]">
          visitor@krishan.run: ~
        </span>
        <div className="w-[52px]" />
      </div>

      <CRTEffect enabled={crtEnabled} />
      <MatrixRain enabled={theme.name === 'matrix'} />

      {isBooting ? (
        <div className="flex-1 overflow-hidden">
          <BootSequence onComplete={handleBootComplete} />
        </div>
      ) : (
        <>
          {/* Main Content: Sidebar + Terminal */}
          <div className="relative z-10 flex flex-1 min-h-0">
            {/* Sidebar (desktop only) */}
            <Sidebar onCommand={handleCommand} />

            {/* Terminal Body */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 md:px-10 md:py-7"
            >
              <ProfileHero />

              <TerminalOutput entries={outputHistory} />

              <div className="mt-3 pb-20 md:pb-4">
                <TerminalInput
                  value={input}
                  onChange={setInput}
                  onKeyDown={handleKeyDown}
                  inputRef={inputRef}
                  suggestions={suggestions}
                />
              </div>
            </div>
          </div>

          {/* Status Bar (desktop only) */}
          <StatusBar />

          {/* Mobile Nav (mobile only) */}
          <MobileNav onCommand={handleCommand} />
        </>
      )}
      </div>
    </div>
  );
}
