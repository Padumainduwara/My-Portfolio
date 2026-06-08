"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Code2, Cpu, Globe, Database, Terminal } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import StatsGrid from './StatsGrid';

// --- Floating Tech Icons Animation (Responsive & Cute Logic) ---
const FloatingIcon = ({ icon: Icon, delay, x, y, mx, my }: { icon: any, delay: number, x: number, y: number, mx: number, my: number }) => {
  const [coords, setCoords] = useState({ x: mx, y: my });

  useEffect(() => {
    const updatePosition = () => {
      // 768px is the breakpoint for md (Tablets/Desktops)
      if (window.innerWidth >= 768) {
        setCoords({ x: x, y: y }); // Desktop coords
      } else {
        setCoords({ x: mx, y: my }); // Mobile coords
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
        y: [coords.y, coords.y - 12, coords.y],
        x: [coords.x, coords.x + 6, coords.x]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay 
      }}
      className="absolute w-8 h-8 md:w-10 md:h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] z-30"
      style={{ 
        top: `calc(50% + ${coords.y}px)`, 
        left: `calc(50% + ${coords.x}px)` 
      }}
    >
      <Icon size={16} className="text-purple-300" />
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Left Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center w-full lg:w-5/12 order-2 lg:order-1 mt-8 lg:mt-0"
        >
          {/* Reduced image sizes to make it look "cuter" and less bulky */}
          <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[380px] md:w-[340px] md:h-[420px] flex items-center justify-center">
            
            <div className="absolute w-[115%] h-[115%] border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute w-[95%] h-[95%] border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              <div className="w-full h-full rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 relative group overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] z-20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

                <div className="relative w-full h-full">
                <Image
                  src="/Paduma-Induwara-Profile.png"
                  alt="Paduma Induwara"
                  fill
                  className="object-cover object-top opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020010] via-[#020010]/20 to-transparent opacity-90" />

                {/* Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-md border border-white/10 bg-black/40 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Cpu size={10} className="text-purple-400 animate-pulse" />
                        <p className="text-[9px] font-mono text-purple-300 uppercase tracking-widest">Innovator</p>
                      </div>
                      <p className="text-white font-bold text-base tracking-tight leading-none">Paduma Induwara</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-md shadow-inner group-hover:bg-purple-500/20 transition-colors">
                      <Code2 size={14} className="text-white/90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 3D Icons - Adjusted coordinates to be much closer to the image */}
            <FloatingIcon icon={Globe} delay={0} x={-115} y={-90} mx={-90} my={-70} />
            <FloatingIcon icon={Database} delay={1.5} x={100} y={-60} mx={75} my={-40} />
            <FloatingIcon icon={Terminal} delay={3} x={-115} y={100} mx={-90} my={80} />
            
            <div className="absolute w-[80%] h-[80%] bg-purple-600 rounded-full blur-[100px] opacity-30 -z-10 animate-pulse" />
          </div>
        </motion.div>

        {/* Right Side: About Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-7/12 order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <Cpu size={12} className="text-cyan-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">About Me</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 lg:mb-8 tracking-tight leading-[1.15]">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Am I?</span>
          </h2>

          <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-[1.8] font-light md:text-justify">
            <p>
              I am a technology enthusiast and digital professional passionate about building innovative digital solutions. I specialize in merging <span className="text-white font-medium">software engineering, data science, and digital marketing</span> to build intelligent, high-performance web experiences that drive tangible results for my clients.
            </p>
            <p>
              With a strong academic foundation in <span className="text-white font-medium">Data Science and IT</span>, I architect scalable full-stack applications using Next.js, React, and Node.js. My focus goes beyond writing clean code—I integrate <span className="text-purple-300 font-medium">machine learning models, big data analytics, and seamless UI/UX designs</span> to solve complex real-world problems.
            </p>
            <p>
              As a <span className="text-white font-medium">Meta Certified Digital Marketing Associate</span> and the founder of Kingxer Marketing Solutions, I pair technical development with strategic SEO and data-driven branding. This unique blend of skills allows me to deliver digital products that not only look amazing but also perform flawlessly and drive business growth.
            </p>
          </div>
        </motion.div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 mt-16 md:mt-24">
        <StatsGrid />
      </div>

    </section>
  );
}