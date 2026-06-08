"use client";

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    // Mobile devices wala touch events thiyena nisa animation eka run karanna one na
    if (!cursor || !trail || window.innerWidth < 768) return;

    let x = 0, y = 0, tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    const animate = () => {
      tx += (x - tx) * 0.15; // Speed of the trail following the cursor
      ty += (y - ty) * 0.15;
      trail.style.left = tx + 'px';
      trail.style.top = ty + 'px';
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Main outer circle (Purple border with glow) */}
      <div 
        ref={cursorRef} 
        className="fixed w-6 h-6 border-2 border-purple-500/80 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 hidden md:block shadow-[0_0_10px_rgba(168,85,247,0.4)]" 
        aria-hidden="true" 
      />
      
      {/* Following inner dot (Solid Purple) */}
      <div 
        ref={trailRef} 
        className="fixed w-1.5 h-1.5 bg-purple-400 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_8px_rgba(168,85,247,0.8)]" 
        aria-hidden="true" 
      />
    </>
  );
}