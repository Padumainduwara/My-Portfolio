"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Rocket, Cpu, Search, Palette } from 'lucide-react';

const services = [
  {
    title: "Modern Web Development",
    desc: "Crafting blazing-fast, responsive web applications using Next.js, React, and server-side architecture for next-gen performance.",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    bgGlow: "group-hover:bg-cyan-500/10"
  },
  {
    title: "Custom Software Solutions",
    desc: "Scalable enterprise-grade software engineered for precision, security, and high-load business environments.",
    icon: Cpu,
    color: "from-purple-500 to-fuchsia-600",
    glow: "shadow-purple-500/20",
    bgGlow: "group-hover:bg-purple-500/10"
  },
  {
    title: "Search Engine Optimization",
    desc: "AI-driven SEO strategies that dominate search rankings and drive organic growth through data-backed content architecture.",
    icon: Search,
    color: "from-emerald-400 to-teal-500",
    glow: "shadow-emerald-500/20",
    bgGlow: "group-hover:bg-emerald-500/10"
  },
  {
    title: "AI & Automation Integration",
    desc: "Harnessing LLMs and autonomous agents to automate complex business workflows, saving time and increasing operational ROI.",
    icon: Bot,
    color: "from-orange-400 to-red-500",
    glow: "shadow-orange-500/20",
    bgGlow: "group-hover:bg-orange-500/10"
  },
  {
    title: "Digital Marketing & Branding",
    desc: "Crafting compelling visual identities and high-conversion marketing campaigns that resonate with modern audiences.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
    bgGlow: "group-hover:bg-pink-500/10"
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-20 md:py-24 relative z-10">

      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-700/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-700/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- MODERN HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Rocket size={12} className="text-purple-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">My Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[13px] md:text-sm font-light">
             I don't just write code. I build scalable digital experiences that solve real business problems.
          </p>
        </motion.div>

        {/* --- RESPONSIVE MATRIX --- */}
        <div className="flex flex-col lg:flex-row items-start relative w-full">
          
          {/* LEFT: Sticky Glass Showcase (ONLY VISIBLE ON DESKTOP - lg:flex) */}
          <div className="hidden lg:flex w-1/2 sticky top-[20vh] h-[60vh] items-center justify-center z-20">
            <div className="relative w-full max-w-[400px] aspect-square rounded-[40px] border border-white/10 bg-[#050505]/60 backdrop-blur-2xl shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-500">
              
              {/* ALUTHIN ADD KARAPU: Hardware-Accelerated Cyber Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.15] blur-3xl`} />
                    
                    {/* ALUTHIN ADD KARAPU: The 3D Quantum Orbit Rings (Adjusted sizes to fit nicely) */}
                    {isActive && (
                      <>
                        <div className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/5 border-t-white/20 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border border-white/5 border-b-cyan-500/20 animate-[spin_12s_linear_infinite_reverse]" />
                      </>
                    )}

                    <div className={`relative flex items-center justify-center w-28 h-28 rounded-[24px] bg-white/5 border border-white/10 shadow-xl transition-all duration-500 ${isActive ? service.glow : ''} z-10`}>
                      <service.icon size={48} className={`text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`} strokeWidth={1.5} />
                    </div>
                  </motion.div>
                );
              })}
              
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none rounded-[40px]" />
            </div>
          </div>

          {/* RIGHT: Scrolling Content Details (Cards on Mobile, Text on Desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-0 lg:pl-16 xl:pl-20 relative z-10">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ margin: "-45% 0px -45% 0px", amount: "some" }}
                  // MOBILE: Premium Cards | DESKTOP: Clean Text layout with standard heights
                  className={`group relative flex flex-col lg:justify-center 
                    p-6 sm:p-8 lg:p-0 
                    rounded-[24px] lg:rounded-none 
                    bg-[#050505]/80 lg:bg-transparent 
                    border border-white/5 lg:border-transparent 
                    backdrop-blur-xl lg:backdrop-blur-none
                    lg:min-h-[50vh] transition-all duration-700 ease-in-out
                    ${isActive ? "opacity-100 lg:scale-100" : "opacity-60 lg:opacity-30 lg:scale-[0.97]"}
                    hover:border-white/10 lg:hover:border-transparent
                  `}
                >
                  {/* MOBILE ICON (Hidden on Desktop) */}
                  <div className={`lg:hidden w-14 h-14 mb-5 rounded-[16px] bg-gradient-to-br ${service.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-[#050505] rounded-[15px] flex items-center justify-center">
                       <service.icon size={22} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <span className={`text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase transition-colors duration-700 ${isActive ? 'text-cyan-400' : 'text-gray-600'}`}>
                      0{index + 1} //
                    </span>
                    <h3 className={`text-[17px] sm:text-xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight transition-colors duration-700 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className={`text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-relaxed max-w-md transition-all duration-700 ${
                    isActive ? "text-gray-300 lg:translate-y-0" : "text-gray-500 lg:translate-y-4"
                  }`}>
                    {service.desc}
                  </p>

                  {/* Subtle mobile card hover glow */}
                  <div className={`absolute inset-0 rounded-[24px] pointer-events-none transition-colors duration-500 lg:hidden ${service.bgGlow}`} />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}