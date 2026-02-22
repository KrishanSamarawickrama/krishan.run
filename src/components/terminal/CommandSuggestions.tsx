'use client';

interface CommandSuggestionsProps {
  suggestions: string[];
  onSelect: (command: string) => void;
}

export function CommandSuggestions({ suggestions, onSelect }: CommandSuggestionsProps) {
  if (suggestions.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="px-2 py-0.5 border border-[var(--text-dim)] rounded text-[var(--accent)] hover:bg-[var(--text-dim)]/20 transition-colors"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
