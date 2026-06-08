"use client";

import { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_SCENE = 'https://prod.spline.design/V6pmDGXl2kReOd7S/scene.splinecode';

function SplineFallback() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite]" />
    </div>
  );
}

export default function Hero() {
  const [showSpline, setShowSpline] = useState(false);
  const [splineReady, setSplineReady] = useState(false);

  useEffect(() => {
    // Optimized for Mobile: Wait 600ms and use requestAnimationFrame so the UI paints smoothly first without lagging
    const showTimer = setTimeout(() => {
      requestAnimationFrame(() => {
        setShowSpline(true);
      });
    }, 600);
    const fallbackTimer = setTimeout(() => setSplineReady(true), 10000);
    return () => { clearTimeout(showTimer); clearTimeout(fallbackTimer); };
  }, []);

  const handleSplineLoad = useCallback(() => setSplineReady(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020010]">
      
      {/* ===== 1. THE ORIGINAL PURPLE VIBE & EFFECTS ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Deep Purple Ambient Glow - Top Left */}
        <div className="absolute -top-[10%] -left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse opacity-60" style={{ transform: 'translateZ(0)', willChange: 'opacity' }} />
        
        {/* Deep Purple Ambient Glow - Behind Robot */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-purple-700/25 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000 opacity-70" style={{ transform: 'translateZ(0)', willChange: 'opacity' }} />

        {/* The Animated Thin Rings from Old Portfolio */}
        <div className="absolute top-1/2 left-1/2 md:left-auto md:right-[5%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-purple-500/10 opacity-50" />
        <div className="absolute top-1/2 left-1/2 md:left-auto md:right-[15%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-purple-500/15 opacity-50" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-soft-light" />

        {/* Animated Moving Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            willChange: 'background-position'
          }}
          animate={{ backgroundPosition: ["0px 0px", "50px 0px"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ===== 2. SPLINE 3D CANVAS ===== */}
      <div
        className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 w-full md:w-[55%] z-[1] transition-opacity duration-1000 ease-out pointer-events-none"
        style={{
          opacity: splineReady ? 0.95 : 0, 
          transform: 'translateZ(0)', 
          willChange: 'opacity'
        }}
      >
        <motion.div 
          className="absolute w-full pointer-events-auto" 
          style={{ top: '-60px', height: 'calc(100% + 120px)' }}
          animate={{ y: [0, -15, 0] }} // 🚀 Magic happens here: Smooth floating effect!
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {showSpline && (
            <Suspense fallback={null}>
              <Spline
                scene={SPLINE_SCENE}
                className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.15)]" // Added a subtle premium shadow
                onLoad={handleSplineLoad}
              />
            </Suspense>
          )}
        </motion.div>
      </div>

      {!splineReady && <SplineFallback />}

      {/* ===== 3. RESPONSIVE OVERLAYS ===== */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none bg-[#020010]/80 md:bg-transparent md:bg-gradient-to-r md:from-[#020010] md:from-30% md:via-[#020010]/80 md:via-55% md:to-transparent md:to-75%"
      />
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      {/* ===== 4. CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-20 pointer-events-none flex flex-col md:block items-center text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl md:max-w-xl pt-32 pb-20 md:pt-42 md:pb-24 flex flex-col items-center md:items-start w-full"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md pointer-events-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-purple-200 text-[10px] md:text-xs font-semibold tracking-wider uppercase">Available for new projects</span>
          </motion.div>

          <p className="text-gray-400 text-lg font-light mb-2 pointer-events-auto">
            Hi there, I'm
          </p>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight pointer-events-auto">
            Paduma <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-xy drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Induwara
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2 sm:gap-3 mb-6 md:mb-8 h-auto sm:h-10 pointer-events-auto">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Data Scientist', 2000,
                'Graphic Designer', 2000,
                'Digital Marketer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl tracking-wide pb-1"
              cursor={true}
            />
          </div>

          <p className="text-gray-300 max-w-[500px] mb-8 md:mb-10 leading-relaxed text-sm sm:text-base pointer-events-auto mx-auto md:mx-0">
            I engineer <span className="text-white font-medium">high-performance digital experiences</span> with <br className="hidden md:block" />
            <span className="text-purple-400 font-medium whitespace-nowrap">scalable full-stack architectures</span>, <span className="text-cyan-400 font-medium">responsive layouts</span>, and seamless 3D animations to craft modern solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 pointer-events-auto">
            <GlowButton href="https://github.com/Padumainduwara" icon={Github} primary>
              Explore Work
            </GlowButton>
            <GlowButton href="#contact" icon={Mail}>
              Let's Talk
            </GlowButton>
          </div>

          <div className="w-[80%] md:w-full max-w-[400px] mx-auto md:mx-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:from-white/20 md:via-white/10 md:to-transparent mb-8 pointer-events-none" />

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-6 items-center opacity-80 md:opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-auto w-full">
            <a href="https://linkedin.com/in/padumainduwara" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <Linkedin size={22} />
            </a>
            <a href="tel:+94724113376" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <Phone size={22} />
            </a>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="text-xs text-gray-500 font-mono hidden sm:block">BASED IN SRI LANKA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}