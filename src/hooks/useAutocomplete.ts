'use client';

import { useMemo, useCallback } from 'react';
import { registry } from '@/lib/commands';

export function useAutocomplete() {
  const commandNames = useMemo(() => registry.getNames(), []);

  const getSuggestions = useCallback((input: string): string[] => {
    if (!input.trim()) return [];
    const lower = input.toLowerCase().trim();
    return commandNames.filter(name => name.startsWith(lower)).sort();
  }, [commandNames]);

  const complete = useCallback((input: string): string | null => {
    const suggestions = getSuggestions(input);
    if (suggestions.length === 1) {
      return suggestions[0];
    }
    if (suggestions.length > 1) {
      // Find longest common prefix
      let prefix = suggestions[0];
      for (let i = 1; i < suggestions.length; i++) {
        while (!suggestions[i].startsWith(prefix)) {
          prefix = prefix.slice(0, -1);
        }
      }
      if (prefix.length > input.trim().length) {
        return prefix;
      }
    }
    return null;
  }, [getSuggestions]);

  return { getSuggestions, complete };
}
