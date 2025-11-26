"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Handshake } from 'lucide-react';

// --- DATA ---
const partners = [
  { name: "EcoLK Graphics", src: "/partners/20220306_090441.png" },
  { name: "Agro Ventures", src: "/partners/Agro Ventures.png" },
  { name: "Axiata", src: "/partners/Axiata_Logo.png" },
  { name: "Axiora Labs", src: "/partners/Axiora Labs Logo.png" },
  { name: "Axiora", src: "/partners/Axiora Logo.png" },
  { name: "Centrum", src: "/partners/Centrum_Class.png" },
  { name: "Crypto Cartel", src: "/partners/CRYPTO CARTEL LOGO.png" },
  { name: "ICBT Society", src: "/partners/CSOFICBT_Logo.png" },
  { name: "Dragon Fashion", src: "/partners/dragon_fashion.png" },
  { name: "Fitness Kingdom", src: "/partners/FITNESS KINGDOM LOGO.png" },
  { name: "Health Care VIP", src: "/partners/healthcare_Logo.png" },
  { name: "HK Sports", src: "/partners/Hk_Sport.png" },
  { name: "IntelliPark", src: "/partners/IntelliPark.png" },
  { name: "Kingxer Marketing", src: "/partners/KINGXER MARKETING LOGO.png" },
  { name: "Kliko", src: "/partners/Kliko-01.png" },
  { name: "Lahya", src: "/partners/lahya.png" },
  { name: "Lak Deepa", src: "/partners/LakDeepaLogo.png" },
  { name: "Lakmal Construction", src: "/partners/Lakmal Cosn.jpg" }, 
  { name: "Lankesha Dance", src: "/partners/Lankesha logo.png" },
  { name: "Madhara", src: "/partners/Madhara Logo.png" },
  { name: "Dare to Dazzle", src: "/partners/nadanu.png" },
  { name: "Nimlo Engineering", src: "/partners/Nimlo_Eng.png" },
  { name: "Real Smart", src: "/partners/Real Smart.png" },
  { name: "Rodney Place", src: "/partners/RodneyPlace_Logo.png" },
  { name: "Swasthika", src: "/partners/Sawasthika_Logo.png" },
  { name: "Scholaraice", src: "/partners/Scholaraice .png" },
  { name: "Sen Sera", src: "/partners/Sensara_Logo.png" },
  { name: "Sentio 360", src: "/partners/Sentio360_logo.png" },
  { name: "Shathvika", src: "/partners/shathvika.png" },
  { name: "Subhasadhaka", src: "/partners/Subhasadhaka_Pre_Scl.png" },
  { name: "Tesso", src: "/partners/tesso_logo.png" },
  { name: "WSP", src: "/partners/Wsp_Logo.png" },
];

// Split data into two arrays
const firstRow = partners.slice(0, Math.ceil(partners.length / 2));
const secondRow = partners.slice(Math.ceil(partners.length / 2));

export default function InfinitePartners() {
  return (
    // FIX: Removed 'bg-[#050505]' to make it transparent and blend with the main background
    <section className="py-24 relative z-10 overflow-hidden">
      
      {/* Background Aesthetic - kept faint glow but removed solid colors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-900/10 backdrop-blur-sm mb-6"
        >
          <Handshake size={14} className="text-purple-400" />
          <span className="text-xs font-mono text-cyan-200/70 tracking-widest uppercase">Our Ecosystem</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Collaborating with visionary brands and organizations to deliver world-class digital experiences.
          </p>
      </div>

      {/* --- Marquee Section --- */}
      <div className="flex flex-col gap-8 relative">
        
        {/* Gradient Fade on Sides - Updated to transparent to avoid black bars */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Moves RIGHT */}
        <MarqueeRow items={firstRow} direction="right" speed={50} />

        {/* Row 2: Moves LEFT */}
        <MarqueeRow items={secondRow} direction="left" speed={50} />

      </div>
    </section>
  );
}

// --- Reusable Marquee Row Component ---
function MarqueeRow({ items, direction, speed }: { items: typeof partners, direction: 'left' | 'right', speed: number }) {
  return (
    <div className="flex overflow-hidden select-none group">
      <motion.div
        className="flex gap-4 md:gap-6 min-w-full"
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ 
          x: direction === 'left' ? '-50%' : '0%' 
        }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
        whileHover={{ animationPlayState: "paused" }} 
      >
        {[...items, ...items, ...items, ...items].map((partner, index) => (
          <PartnerCard key={`${direction}-${index}`} partner={partner} />
        ))}
      </motion.div>
    </div>
  );
}

// --- Partner Card (Fixed Sizes) ---
function PartnerCard({ partner }: { partner: { name: string; src: string } }) {
  return (
    <div className="relative shrink-0 
      w-[160px] h-[90px] 
      md:w-[200px] md:h-[110px] 
      flex items-center justify-center 
      p-3 md:p-4 
      rounded-xl bg-white/[0.03] border border-white/[0.05] 
      hover:bg-white/[0.07] hover:border-cyan-500/30 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)] 
      transition-all duration-300 group/card"
    >
      {/* Image Container */}
      <div className="relative w-full h-full opacity-60 grayscale group-hover/card:opacity-100 group-hover/card:grayscale-0 transition-all duration-500 filter">
        <Image 
          src={partner.src} 
          alt={partner.name} 
          fill 
          className="object-contain drop-shadow-lg"
          sizes="(max-width: 768px) 160px, 200px"
        />
      </div>
      {/* Subtle corner accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover/card:via-cyan-500/50 transition-all duration-500" />
    </div>
  );
}