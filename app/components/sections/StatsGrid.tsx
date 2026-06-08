"use client";

import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { Briefcase, Globe2, Users2, Activity } from 'lucide-react';

// --- Custom Premium Animated Number ---
function AnimatedNumber({ value, playKey, isDecimal = false }: { value: number; playKey: number; isDecimal?: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.5, // Premium slow feel
      ease: [0.16, 1, 0.3, 1], // Custom snappy easing (Apple style)
      onUpdate: (v) => setDisplay(isDecimal ? Number(v.toFixed(1)) : Math.round(v)),
    });
    return () => controls.stop();
  }, [value, playKey, isDecimal]);

  return <span>{display}</span>;
}

// --- Next-Level Stats Data ---
const stats = [
  {
    num: 5,
    suffix: "+",
    label: "Years Experience",
    icon: Briefcase,
    gradient: "from-purple-400 to-indigo-400",
    glow: "bg-purple-500"
  },
  {
    num: 100,
    suffix: "+",
    label: "Global Projects",
    icon: Globe2,
    gradient: "from-cyan-400 to-blue-400",
    glow: "bg-cyan-500"
  },
  {
    num: 100,
    suffix: "+",
    label: "Worldwide Clients",
    icon: Users2,
    gradient: "from-emerald-400 to-teal-400",
    glow: "bg-emerald-500"
  },
  {
    num: 99.9,
    suffix: "%",
    label: "System Uptime",
    icon: Activity, // Technical vibe
    gradient: "from-yellow-400 to-orange-400",
    glow: "bg-yellow-500",
    isDecimal: true
  }
];

export default function StatsGrid() {
  const [hoverKeys, setHoverKeys] = useState([0, 0, 0, 0]);

  const handleHover = (index: number) => {
    setHoverKeys(prev => {
      const newKeys = [...prev];
      newKeys[index] += 1; 
      return newKeys;
    });
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full max-w-5xl mx-auto mt-10 md:mt-2">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
          onMouseEnter={() => handleHover(index)} 
          onTouchStart={() => handleHover(index)} 
          className="group relative flex flex-col justify-between p-5 md:p-6 min-h-[130px] md:min-h-[140px] rounded-[20px] md:rounded-[24px] bg-[#050505]/50 backdrop-blur-xl border border-white/10 overflow-hidden cursor-pointer hover:-translate-y-1 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)]"
        >
          {/* 1. Animated Edge Lighting (Top Glow Line) */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[2px] ${stat.glow} opacity-0 group-hover:opacity-100 blur-[2px] transition-all duration-500 group-hover:w-[50%]`} />
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[1px] ${stat.glow} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-[50%]`} />

          {/* 2. The Background Watermark Number (Huge & Subtle) */}
          <div className="absolute -bottom-4 -right-2 text-[90px] md:text-[110px] font-black leading-none text-white opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none select-none">
            {stat.num}
          </div>

          {/* 3. Ambient Corner Glow */}
          <div className={`absolute -right-10 -top-10 w-28 h-28 rounded-full blur-[40px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none ${stat.glow}`} />

          {/* Top Row: Label & Icon */}
          <div className="relative z-10 flex items-start justify-between w-full mb-4 md:mb-5">
            <p className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-[0.15em] group-hover:text-gray-200 transition-colors pt-1">
              {stat.label}
            </p>
            <div className={`shrink-0 w-8 h-8 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-white/10 ml-2`}>
              <stat.icon size={14} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* Bottom Row: The Big Number */}
          <div className="relative z-10 flex items-baseline gap-1 mt-auto">
            <h4 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-500`}>
              <AnimatedNumber value={stat.num} playKey={hoverKeys[index]} isDecimal={stat.isDecimal} />
            </h4>
            <span className={`text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} opacity-80`}>
              {stat.suffix}
            </span>
          </div>

        </motion.div>
      ))}
    </div>
  );
}