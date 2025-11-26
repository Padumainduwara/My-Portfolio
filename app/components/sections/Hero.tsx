"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Phone, Code2, Database, Terminal, Cpu, Globe, Sparkles } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import GlowButton from '../ui/GlowButton';
import Image from 'next/image';

// --- Floating Tech Icons Animation (Responsive Logic) ---
const FloatingIcon = ({ icon: Icon, delay, x, y, mx, my }: { icon: any, delay: number, x: number, y: number, mx: number, my: number }) => {
  const [coords, setCoords] = useState({ x: mx, y: my });

  useEffect(() => {
    const updatePosition = () => {
      // 768px is the breakpoint for md (Tablets/Desktops)
      if (window.innerWidth >= 768) {
        setCoords({ x: x, y: y });
      } else {
        setCoords({ x: mx, y: my });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [x, y, mx, my]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.5, 1, 0.5], 
        scale: [1, 1.1, 1],
        y: [coords.y, coords.y - 15, coords.y],
        x: [coords.x, coords.x + 8, coords.x]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay 
      }}
      className="absolute w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] z-20"
      style={{ 
        top: `calc(50% + ${coords.y}px)`, 
        left: `calc(50% + ${coords.x}px)` 
      }}
    >
      <Icon size={20} className="text-purple-300" />
    </motion.div>
  );
};

export default function Hero() {
  return (
    // FIX: Added pb-48 for mobile to create space for floating icons so they don't get cut off by the next section
    <section className="min-h-screen flex items-center justify-center relative pt-28 pb-48 md:pt-32 md:pb-20 overflow-hidden bg-[#020010]">
      
      {/* --- Ultra Dark Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse opacity-60" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-600/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse delay-1000 opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light"></div>
        
        <motion.div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }}
          animate={{ 
            backgroundPosition: ["0px 0px", "50px 0px"] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 relative z-10">
        
        {/* --- LEFT SIDE: Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left w-full order-1"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-md"
          >
             <span className="relative flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
             </span>
             <span className="text-purple-200 text-[10px] md:text-xs font-semibold tracking-wider uppercase">Open for Projects</span>
          </motion.div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Designing the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              Future Web
            </span>
          </h1>
          
          {/* --- Typewriter Effect Section --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3 mb-8 h-auto sm:h-10">
             {/* Static Text */}
             <span className="text-white text-xl sm:text-2xl font-light">I am a</span>
             
             {/* Typewriter Animation */}
             <TypeAnimation
                sequence={[
                  'Data Scientist', 
                  2000, 
                  'Software Engineer', 
                  2000, 
                  'Full Stack Developer',
                  2000,
                  'Tech Innovator',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide pb-1"
                cursor={true} 
             />
          </div>
          
          {/* Description (FIXED: Increased text size for mobile 'text-base sm:text-lg') */}
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed text-base sm:text-lg md:text-lg">
            I engineer <span className="text-white font-medium">data-driven intelligent systems</span> and <span className="text-white font-medium">immersive 3D web experiences</span>. 
            Blending advanced <span className="text-purple-400">Software Engineering</span> with <span className="text-blue-400">Data Science</span> to craft high-performance digital solutions from Sri Lanka.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            <GlowButton href="https://github.com/Padumainduwara" icon={Github} primary>
              Explore Work
            </GlowButton>
            <GlowButton href="mailto:induwarapaduma2002@gmail.com" icon={Mail}>
              Let's Talk
            </GlowButton>
          </div>

          {/* Footer / Socials */}
          <div className="flex gap-6 justify-center md:justify-start items-center opacity-80 md:opacity-60 hover:opacity-100 transition-opacity duration-300">
             <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Linkedin size={22} /></a>
             <a href="tel:+94724113376" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Phone size={22} /></a>
             <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
             <span className="text-xs text-gray-500 font-mono hidden sm:block">BASED IN SRI LANKA</span>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: Floating Holographic Avatar --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center items-center relative w-full mt-8 md:mt-0 order-2"
        >
          {/* Container Size */}
          <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[340px] md:h-[420px] flex items-center justify-center">
            
            {/* Rotating Rings */}
            <div className="absolute w-[140%] h-[140%] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute w-[110%] h-[110%] border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

            {/* Tilt Card */}
            <TiltCard className="w-full h-full z-10">
              <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative group overflow-hidden shadow-2xl shadow-purple-500/20">
                
                {/* Glowing Borders */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl z-20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                
                {/* Image Container */}
                <div className="relative w-full h-full"> 
                   <Image 
                     src="/Profile_Pic2.png" 
                     alt="Paduma Induwara" 
                     fill
                     className="object-cover object-top opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                     priority
                     sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020010] via-transparent to-transparent opacity-90" />
                   
                   {/* Holographic Info Overlay */}
                   <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md border border-white/10 bg-black/30 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles size={10} className="text-purple-400" />
                            <p className="text-[9px] font-mono text-purple-300 uppercase tracking-wider">Innovator</p>
                          </div>
                          <p className="text-white font-bold text-lg tracking-tight leading-none">Paduma Induwara</p>
                        </div>
                        
                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-md shadow-inner">
                          <Code2 size={16} className="text-white/90" />
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating 3D Icons */}
            <FloatingIcon icon={Globe} delay={0} x={-160} y={-50} mx={-100} my={-60} />
            <FloatingIcon icon={Database} delay={1.5} x={160} y={-20} mx={100} my={-30} />
            <FloatingIcon icon={Terminal} delay={3} x={-150} y={120} mx={-90} my={110} />
            <FloatingIcon icon={Cpu} delay={4.5} x={150} y={100} mx={90} my={90} />

            <div className="absolute w-[80%] h-[80%] bg-purple-600 rounded-full blur-[120px] opacity-20 -z-10 animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}