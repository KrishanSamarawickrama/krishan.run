'use client';

interface CRTEffectProps {
  enabled: boolean;
}

export function CRTEffect({ enabled }: CRTEffectProps) {
  if (!enabled) return null;

  return (
    <>
      {/* Scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
        }}
      />
      {/* Screen glow */}
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          boxShadow: 'inset 0 0 120px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.15)',
        }}
      />
    </>
  );
}
