"use client";

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { Handshake } from 'lucide-react';
import { useEffect, useState, MouseEvent } from 'react';

// --- DATA ---
const partners = [
  { name: "Agro Ventures", src: "/partners/agro-ventures.png" },
  { name: "Axiata", src: "/partners/axiata-logo.png" },
  { name: "Axiora", src: "/partners/axiora.png" },
  { name: "Axiora Labs", src: "/partners/axiora-labs.png" },
  { name: "Centrum", src: "/partners/centrum-class.png" },
  { name: "Crypto Cartel", src: "/partners/crypto-cartel.png" },
  { name: "ICBT Society", src: "/partners/csoficbt-logo.png" },
  { name: "Dragon Fashion", src: "/partners/dragon-fashion.png" },
  { name: "EcoLK Graphics", src: "/partners/ecolk-graphics.png" },
  { name: "Fitness Kingdom", src: "/partners/fitness-kingdom.png" },
  { name: "Health Care VIP", src: "/partners/healthcare.png" },
  { name: "HK Sports", src: "/partners/hk-sport.png" },
  { name: "IntelliPark", src: "/partners/intellipark.png" },
  { name: "Kingxer Marketing", src: "/partners/kingxer-marketing.png" },
  { name: "Kliko", src: "/partners/kliko.png" },
  { name: "Lahya", src: "/partners/lahya.png" },
  { name: "Lak Deepa", src: "/partners/lakdeepa.png" },
  { name: "Lakmal Construction", src: "/partners/lakmal-cosn.png" },
  { name: "Lankesha Dance", src: "/partners/lankesha.png" },
  { name: "Madhara", src: "/partners/madhara.png" },
  { name: "Dare to Dazzle", src: "/partners/nadanu.png" },
  { name: "Nimlo Engineering", src: "/partners/nimlo-eng.png" },
  { name: "Real Smart", src: "/partners/real-smart.png" },
  { name: "Rodney Place", src: "/partners/rodney-place.png" },
  { name: "Swasthika", src: "/partners/sawasthika.png" },
  { name: "Scholaraice", src: "/partners/scholaraice.png" },
  { name: "Sen Sera", src: "/partners/sensara.png" },
  { name: "Sentio 360", src: "/partners/sentio360.png" },
  { name: "Shathvika", src: "/partners/shathvika.png" },
  { name: "Subhasadhaka", src: "/partners/subhasadhaka.png" },
  { name: "Tesso", src: "/partners/tesso.png" },
  { name: "WSP", src: "/partners/wsp.png" },
];

export default function InfinitePartners() {
  const [duration, setDuration] = useState(80);

  useEffect(() => {
    const updateSpeed = () => {
      // Desktop: 100s | Mobile: 60s (Premium smooth flow)
      setDuration(window.innerWidth < 768 ? 100 : 100);
    };
    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);

  return (
    <section id="partners" className="py-20 md:py-24 relative z-10">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px]" />
        {/* THE FIX: Replaced the external URL with the correct local noise.svg to remove the box effect */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <Handshake size={12} className="text-cyan-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Our Ecosystem</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Industry Leaders</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            Collaborating with visionary brands and organizations to deliver world-class digital experiences.
          </p>
        </motion.div>

      </div>

      {/* --- PREMIUM SINGLE LINE MARQUEE --- */}
      <div 
        className="flex flex-col gap-5 md:gap-6 relative w-full overflow-hidden group py-6"
        style={{
          // Smooth fade out on edges
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        
        {/* CSS Injection for Flawless Scroll & Pause */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: infinite-scroll ${duration}s linear infinite;
          }
          .marquee-container:hover .marquee-track,
          .marquee-container:active .marquee-track {
            animation-play-state: paused !important;
          }
        `}} />

        <div className="flex overflow-visible select-none w-full marquee-container cursor-pointer">
          <div className="flex gap-4 md:gap-6 min-w-max px-4 marquee-track items-center">
            {/* Map twice for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// --- Next-Level Solid Glassmorphism Card (Full Color Logos) ---
function PartnerCard({ partner }: { partner: { name: string; src: string } }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse tracking for the dynamic hover aura
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      // THE FIX: Visible border and glassy background by default!
      className="relative group/card shrink-0 flex items-center justify-center 
      w-[140px] h-[75px] md:w-[170px] md:h-[90px] 
      bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden 
      transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.15)] hover:-translate-y-1 hover:z-30 backdrop-blur-sm"
    >
      {/* 1. Dynamic Flashlight Aura (Only visible on hover) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover/card:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.2),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Inner Gradient Background (Gives subtle depth) */}
      <div className="absolute inset-[1px] bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/80 rounded-[15px] z-0 transition-colors duration-500 group-hover/card:from-[#111]/80 group-hover/card:to-[#080808]/80" />

      {/* 2. Strict Uniform Image Wrapper (Ensures all logos look the exact same size) */}
      <div className="relative z-10 w-[70%] h-[60%] flex items-center justify-center transition-transform duration-500 group-hover/card:scale-110">
        <Image 
          src={partner.src} 
          alt={partner.name} 
          fill 
          // THE FIX: Original colors always visible. Added a tiny glow on hover.
          className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.02)] group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-500"
          sizes="(max-width: 768px) 100px, 140px"
        />
      </div>
    </div> 
  ); 
}