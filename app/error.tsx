'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Portfolio Error]', error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-8 relative overflow-hidden bg-[#020010]">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/8 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <h1 className="text-[clamp(40px,8vw,60px)] font-extrabold leading-none m-0 text-red-400">
        Oops!
      </h1>

      <p className="text-[clamp(16px,3vw,20px)] text-gray-400 mt-3 mb-2 font-light">
        Something went wrong
      </p>

      <p className="text-[13px] text-gray-500 max-w-[380px] leading-relaxed mb-8">
        A technical issue occurred while loading this page. Please try
        again or return home.
      </p>

      <button
        onClick={reset}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm border-none cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow mb-3"
      >
        Try Again
      </button>

      <a
        href="/"
        className="text-[13px] text-gray-500 underline underline-offset-4 hover:text-gray-300 transition-colors"
      >
        Return to Home
      </a>
    </main>
  );
}
