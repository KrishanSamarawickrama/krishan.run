'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-[#33ff33] font-mono flex items-center justify-center p-4">
      <div className="space-y-4 max-w-lg">
        <pre className="text-[#ff3333] text-lg font-bold">
{`  _  _    ___  _  _
 | || |  / _ \\| || |
 | || |_| | | | || |_
 |__   _| | | |__   _|
    | | | |_| |  | |
    |_|  \\___/   |_|
`}
        </pre>
        <div className="space-y-2">
          <p className="text-[#ff3333]">
            bash: page not found: the requested path does not exist
          </p>
          <p className="text-[#1a8a1a]">
            Maybe you meant to visit the terminal?
          </p>
          <div className="mt-4">
            <span className="text-[#00ff88]">visitor</span>
            <span className="text-[#1a8a1a]">@</span>
            <span className="text-[#5599ff]">krishan.run</span>
            <span className="text-[#1a8a1a]">:</span>
            <span className="text-[#00ff88]">~</span>
            <span className="text-[#33ff33]">$ </span>
            <Link href="/" className="text-[#00ff88] underline hover:brightness-125">
              cd /home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
