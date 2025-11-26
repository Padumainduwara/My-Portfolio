"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, School, Award, Loader2, CheckCircle2, Sparkles } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "BSc (Hons) Data Science",
    school: "Cardiff Metropolitan University",
    period: "2022 - Present",
    location: "Colombo, Sri Lanka",
    desc: "Specializing in Data Science, Machine Learning, and AI technologies. Conducting research on predictive modeling and intelligent systems.",
    icon: GraduationCap,
    tags: ["AI & ML", "Big Data", "Research"],
    status: "Reading",
    // Pink Glow for the moving border
    gradientColor: "#ec4899" 
  },
  {
    id: 2,
    degree: "Higher Diploma in Computing",
    school: "ICBT Campus",
    period: "2022",
    location: "Colombo, Sri Lanka",
    desc: "Comprehensive study of software engineering principles, full-stack development, and advanced system analysis.",
    icon: BookOpen,
    tags: ["Software Eng.", "Distinction", "Full Stack"],
    status: "Graduated",
    gradientColor: "#3b82f6" // Optional: Keep others blue or make all pink. I will make all Pink as requested.
  },
  {
    id: 3,
    degree: "Foundation in IT",
    school: "University of Colombo (UCSC)",
    period: "2022",
    location: "Colombo, Sri Lanka",
    desc: "Gained strong fundamentals in Information Technology, algorithms, logic design, and computer systems.",
    icon: Award,
    tags: ["Algorithms", "Logic Design", "Basics"],
    status: "Completed",
    gradientColor: "#06b6d4"
  },
  {
    id: 4,
    degree: "G.C.E Advanced & Ordinary Level",
    school: "St. John's College",
    period: "2008 - 2021",
    location: "Nugegoda, Sri Lanka",
    desc: "Completed primary and secondary education with a focus on Physical Science and Mathematics. Active member of the Prefects' Guild.",
    icon: School,
    tags: ["Physical Science", "Leadership", "Mathematics"],
    status: "Graduated",
    gradientColor: "#10b981"
  }
];

export default function Education() {
  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
  <School size={14} className="text-purple-400" />
  <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Academic History</span>
</div>
          {/* "My Services" - Big Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Pathway</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             My academic qualifications and professional milestones.
          </p>
        </motion.div>

        {/* Grid Layout - Responsive (1 column mobile, 2 columns desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative h-full"
            >
              {/* --- FUTURISTIC CARD WITH MOVING PINK BORDER --- */}
              <div className="group relative h-full overflow-hidden rounded-3xl bg-[#0a0a0a] p-[1px] transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)]">
                
                {/* Animated Gradient Border Layer (PINK) */}
                <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#000000_50%,#ec4899_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Static Border (Fallback) */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:opacity-0 transition-opacity" />

                {/* Inner Content */}
                <div className="relative h-full rounded-[23px] bg-[#080808]/95 backdrop-blur-xl p-6 md:p-8 flex flex-col">
                  
                  {/* Background Noise Texture */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />
                  
                  {/* Top Row: Icon & Year */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/10 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
                      <edu.icon size={28} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                      <Calendar size={12} className="text-gray-400" />
                      <span className="text-xs font-mono text-gray-300">{edu.period}</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 mb-6 flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <MapPin size={14} className="text-pink-500/50" />
                      <span>{edu.school}</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {edu.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

                  {/* Bottom Tags & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400 uppercase tracking-wider group-hover:border-pink-500/30 group-hover:text-pink-200/70 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Status Badge (Reading/Completed) */}
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold self-start sm:self-auto ${
                      edu.status === "Reading" 
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                        : "bg-green-500/10 text-green-400 border border-green-500/20"
                    }`}>
                      {edu.status === "Reading" ? (
                        <Loader2 size={12} className="animate-spin" />
                      ) : (
                        <CheckCircle2 size={12} />
                      )}
                      {edu.status}
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}