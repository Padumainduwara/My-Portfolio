"use client";

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Briefcase, Building2, Clock, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Owner | Freelance",
    company: "Kingxer Marketing Solutions",
    period: "2020 - Present",
    type: "Part Time",
    desc: "Leading digital marketing strategies and developing innovative software solutions for clients. Managing full-scale digital campaigns and technical development.",
    skills: ["Digital Strategy", "Next.js & React", "SEO Optimization", "Meta Ads", "Analytics"],
    gradient: "from-purple-500 via-fuchsia-500 to-cyan-500"
  },
  {
    role: "Exam Invigilator",
    company: "ICBT Campus",
    period: "2023 - Present",
    type: "Part Time",
    desc: "Ensuring exam integrity and maintaining high standards in academic assessment. Managing examination protocols and student supervision.",
    skills: ["Protocol Management", "Academic Integrity", "Supervision", "Time Management"],
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    role: "Digital Marketing Intern",
    company: "FALCONET",
    period: "2024",
    type: "Full Time",
    desc: "Executed digital marketing campaigns and analyzed performance metrics. Gained hands-on experience in SEO, social media management, and content strategy.",
    skills: ["Content Strategy", "Social Media Mgt", "SEO", "Performance Analytics"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500"
  },
  {
    role: "Industrial Labour",
    company: "Colombo Dockyard PLC",
    period: "2022",
    type: "Full Time",
    desc: "Gained industrial experience in Sri Lanka's pioneer shipbuilding company. Worked with engineering teams on large-scale projects.",
    skills: ["Industrial Safety", "Heavy Machinery", "Teamwork", "Engineering Support"],
    gradient: "from-orange-500 via-red-500 to-purple-500"
  }
];

export default function Experience() {
  // Setup Scroll Animation for the Timeline
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Add a spring physics effect so the line fills up smoothly
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-20 md:py-24 relative z-10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
           <Briefcase size={12} className="text-cyan-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Professional Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Experience</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            My career path through technology, marketing, and industry operations.
          </p>
        </motion.div>

        {/* Sleek Scroll-Linked Timeline Layout */}
        <div ref={containerRef} className="relative">
          
          {/* Default Unfilled Line (Mobile: left-[14px] keeps it perfectly aligned with dot center) */}
          <div className="absolute left-[13px] sm:left-[14px] md:left-[45px] top-[10%] bottom-[10%] w-[2px] bg-white/10 rounded-full" />
          
          {/* Animated Filled Line (Grows based on scroll) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[13px] sm:left-[14px] md:left-[45px] top-[10%] bottom-[10%] w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-purple-600 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] z-0" 
          />
          
          <div className="flex flex-col gap-8 md:gap-12 relative z-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 md:pl-24 group">
                
                {/* Timeline Node - Lights up when scrolled into view */}
                <motion.div 
                  initial={{ backgroundColor: "rgba(34,211,238,0.05)", borderColor: "rgba(34,211,238,0.3)", scale: 0.8 }}
                  whileInView={{ backgroundColor: "rgba(34,211,238,0.15)", borderColor: "rgba(34,211,238,0.8)", scale: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  // 'top-1/2 -translate-y-1/2' makes it perfectly centered vertically
                  className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow duration-500 z-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" 
                  />
                </motion.div>
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                  className="relative p-[1px] rounded-[20px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/40 hover:to-purple-500/40 transition-colors duration-700"
                >
                  <div className="relative bg-[#020010]/90 backdrop-blur-xl rounded-[19px] p-5 md:p-7 border border-white/5 group-hover:border-white/10 transition-colors duration-500 overflow-hidden">
                    
                    {/* Hover Glow Effect inside card */}
                    <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-bl from-cyan-500/15 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 md:mb-5 relative z-10">
                      <div>
                        {/* Type Badge (Part Time / Full Time) */}
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-2.5">
                          <Clock size={10} className="text-cyan-400" />
                          {exp.type}
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm md:text-[15px] font-medium text-purple-400">
                          <Building2 size={14} className="md:w-4 md:h-4" />
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit shrink-0 shadow-inner">
                        <Calendar size={12} className="text-gray-400" />
                        <span className="text-[11px] md:text-xs font-mono text-gray-300">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed text-[13px] md:text-sm font-light mb-5 relative z-10">
                      {exp.desc}
                    </p>

                    {/* Technical Skills / Tags */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 px-2.5 py-1.5 text-[9px] md:text-[11px] font-medium text-gray-300 bg-black/40 border border-white/10 rounded-md group-hover:border-cyan-500/30 group-hover:text-white group-hover:bg-white/5 transition-all duration-300">
                          <CheckCircle2 size={10} className="text-purple-500 group-hover:text-cyan-400 transition-colors" />
                          {skill}
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}