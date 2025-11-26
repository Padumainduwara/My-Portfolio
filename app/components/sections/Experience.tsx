"use client";
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import React, { useState, useRef } from 'react';

const experiences = [
  {
    role: "Owner / Freelance",
    company: "Kingxer Marketing Solutions",
    period: "2020 - Present",
    desc: "Leading digital marketing strategies and developing innovative software solutions for clients. Managing full-scale digital campaigns and technical development."
  },
  {
    role: "Exam Invigilator",
    company: "ICBT Campus",
    period: "2023 - Present",
    desc: "Ensuring exam integrity and maintaining high standards in academic assessment. Managing examination protocols and student supervision."
  },
  {
    role: "Digital Marketing Intern",
    company: "FALCONET",
    period: "2024",
    desc: "Executed digital marketing campaigns and analyzed performance metrics. Gained hands-on experience in SEO, social media management, and content strategy."
  },
  {
    role: "Industrial Labour",
    company: "Colombo Dockyard PLC",
    period: "2022",
    desc: "Gained industrial experience in Sri Lanka's pioneer shipbuilding company. Worked with engineering teams on large-scale projects."
  }
];

export default function Experience() {

  // Mouse move handle function (Real-time calculation)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set CSS variables for the spotlight position
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      
      {/* Background Glows (Subtle) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
  <Briefcase size={14} className="text-purple-400" />
  <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Professional Experience</span>
</div>
          {/* "My Services" - Big Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Work  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
           My professional journey through tech and industry.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12 md:space-y-16">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Glowing Dot on Timeline */}
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-[#020010] border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20"></div>
              </div>
              
              {/* 3D Glass Card with Spotlight Effect */}
              <TiltCard className="w-full">
                <div 
                  onMouseMove={handleMouseMove}
                  className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300 overflow-hidden"
                >
                  
                  {/* --- SPOTLIGHT EFFECT LAYER --- */}
                  <div 
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.15), transparent 40%)`
                    }}
                  />
                  
                  {/* Content Container (Relative z-10 ensures text is above the glow) */}
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 font-medium">
                          <Building2 size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono whitespace-nowrap group-hover:border-purple-500/20 transition-colors">
                        <Calendar size={14} className="text-purple-400" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4 mt-4 group-hover:text-gray-300 transition-colors">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}