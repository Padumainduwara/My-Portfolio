'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: null },
];

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-2 relative z-20">
      <ol className="flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i === 0 && <Home size={11} className="text-purple-500/60" />}
              {isLast ? (
                <span className="text-gray-400">{crumb.label}</span>
              ) : (
                <Link href={crumb.href!} className="text-gray-500 hover:text-purple-400 transition-colors">
                  {crumb.label}
                </Link>
              )}
              {!isLast && <ChevronRight size={11} className="text-gray-700" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
