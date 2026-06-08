"use client";
import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ElementType;
  primary?: boolean;
  download?: boolean;
}

export default function GlowButton({ children, href, icon: Icon, primary = false, download = false }: GlowButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
      className={`group relative px-6 py-2.5 rounded-full font-bold text-sm md:text-base overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 min-w-[130px] md:min-w-[150px] ${
        primary
          ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-transparent hover:scale-105'
          : 'border border-white/20 text-white hover:bg-white/10 hover:scale-105'
      }`}
    >
      <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${primary ? 'mix-blend-overlay' : ''}`} />
      <span className="relative flex items-center gap-2 z-10">
        {Icon && <Icon size={18} />} {children}
      </span>
    </a>
  );
}