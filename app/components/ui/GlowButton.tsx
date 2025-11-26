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
      // ADDED: 'min-w-[170px]' kiyana eken button deka ekama width ekakata enawa.
      className={`group relative px-8 py-3 rounded-xl font-bold overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 min-w-[170px] ${
        // ADDED: 'border border-transparent' primary ekata damma, ethakota ara anith button eke border ekata samana wenawa.
        primary ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-transparent' : 'border border-white/20 text-white hover:bg-white/10'
      }`}
    >
      <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${primary ? 'mix-blend-overlay' : ''}`} />
      <span className="relative flex items-center gap-2 z-10">
        {Icon && <Icon size={20} />} {children}
      </span>
    </a>
  );
}