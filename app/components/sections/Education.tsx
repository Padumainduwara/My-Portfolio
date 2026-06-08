"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, School, Award, Loader2, CheckCircle2 } from 'lucide-react';

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
    status: "Graduated",
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
    gradientColor: "#ec4899"
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
    gradientColor: "#ec4899"
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
    gradientColor: "#ec4899"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 relative z-10">
         
      {/* Background Ambient Glows (Matched with New Theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Modern Header - Matched Exactly with Experience & HostedProjects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <School size={12} className="text-purple-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Academic History</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Pathway</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
             My academic qualifications and professional milestones.
          </p>
        </motion.div>

        {/* Grid Layout - 1 col mobile, 2 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative h-full group"
            >
              {/* --- FUTURISTIC CARD WITH MOVING PINK BORDER --- */}
              <div className="relative h-full overflow-hidden rounded-[20px] md:rounded-[24px] bg-transparent p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(236,72,153,0.2)]">
                
                {/* Animated Gradient Border Layer (PINK) - Adjusted to blend with new dark theme */}
                <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ec4899_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Static Border (Fallback) */}
                <div className="absolute inset-0 rounded-[20px] md:rounded-[24px] border border-white/5 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Inner Content Area - Dark matched with #020010 vibe */}
                <div className="relative h-full rounded-[19px] md:rounded-[23px] bg-[#050505]/90 backdrop-blur-xl p-5 md:p-6 flex flex-col z-10 overflow-hidden">
                  
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-500/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Top Row: Icon & Year */}
                  <div className="flex justify-between items-start mb-5 relative z-10">
                    <div className="p-2.5 rounded-[12px] bg-white/5 border border-white/5 text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/10 group-hover:text-pink-300 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.05)] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                      <edu.icon size={20} />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors shadow-inner">
                      <Calendar size={12} className="text-gray-400" />
                      <span className="text-[10px] md:text-xs font-mono text-gray-300">{edu.period}</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 mb-5 flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-pink-200 transition-colors tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] md:text-[13px] text-gray-400 mb-3 font-medium">
                      <MapPin size={12} className="text-pink-500/60" />
                      <span>{edu.school}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-[13px] md:text-sm font-light group-hover:text-gray-300 transition-colors line-clamp-3">
                      {edu.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

                  {/* Bottom Tags & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {edu.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-[#020010]/50 border border-white/5 text-[9px] md:text-[10px] font-mono text-gray-400 uppercase tracking-wider group-hover:border-pink-500/30 group-hover:text-pink-200/80 group-hover:bg-pink-500/5 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Status Badge */}
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-bold self-start sm:self-auto shrink-0 transition-colors duration-300 ${
                      edu.status === "Reading" 
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/40" 
                        : "bg-green-500/10 text-green-400 border border-green-500/20 group-hover:border-green-500/40"
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