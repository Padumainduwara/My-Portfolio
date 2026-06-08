import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description:
    'The page you are looking for does not exist. Return to the portfolio of Paduma Induwara, Software Engineer & Data Scientist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-8 relative overflow-hidden bg-[#020010]">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 404 number */}
      <h1 className="text-[clamp(80px,15vw,160px)] font-extrabold leading-none m-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        404
      </h1>

      <p className="text-[clamp(18px,3vw,24px)] text-gray-400 mt-4 mb-2 font-light">
        Page not found
      </p>

      <p className="text-sm text-gray-500 max-w-[400px] leading-relaxed mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been
        moved. Let&apos;s get you back to the portfolio.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
