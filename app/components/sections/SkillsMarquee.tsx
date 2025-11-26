"use client";
import { motion } from 'framer-motion';

const skills = [
  "React", "Next.js", "Node.js", "Python", "Tailwind CSS", 
  "MySQL", "C#", ".NET", "PHP", "Java", "R Language", 
  "Data Science", "Machine Learning", "Web Scraping"
];

export default function SkillsMarquee() {
  return (
    <section className="py-8 border-y border-white/5 bg-black/30 relative overflow-hidden backdrop-blur-sm">
      
      {/* Side Fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#020010] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#020010] to-transparent z-10" />

      <motion.div 
        // Mobile wala gap eka tikak adu kala (gap-6) Desktop wala thibba widiyamai (md:gap-10)
        className="flex gap-6 md:gap-10 py-2 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center gap-4 group">
            {/* CHANGED HERE: 
               text-2xl (Mobile wala loku kala) 
               md:text-3xl (Desktop wala parana size ekama thibba)
            */}
            <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/10 stroke-text hover:text-white/40 transition-colors cursor-default select-none uppercase tracking-widest">
              {skill}
            </span>
            
            {/* Separator Dot */}
            <span className="text-purple-500/20 text-lg group-hover:text-purple-500/50 transition-colors">●</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}