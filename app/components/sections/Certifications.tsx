"use client";

import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Gemini Certified University Student",
    issuer: "Google",
    date: "Nov 2025",
    expires: "Nov 2028",
    color: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    border: "group-hover:border-blue-500/40",
    bg: "group-hover:bg-blue-500/5",
    icon: "text-blue-400 group-hover:bg-blue-500/10",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/" 
  },
  {
    id: 2,
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "Jan 2025",
    expires: "Jan 2028",
    color: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    border: "group-hover:border-purple-500/40",
    bg: "group-hover:bg-purple-500/5",
    icon: "text-purple-400 group-hover:bg-purple-500/10",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  },
  {
    id: 3,
    title: "Responsible AI with GitHub Copilot",
    issuer: "Microsoft",
    date: "Oct 2025",
    expires: null,
    color: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    border: "group-hover:border-orange-500/40",
    bg: "group-hover:bg-orange-500/5",
    icon: "text-orange-400 group-hover:bg-orange-500/10",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  },
  {
    id: 4,
    title: "Handling, Storing and Managing Data",
    issuer: "UNICEF",
    date: "Jan 2025",
    expires: null,
    color: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    border: "group-hover:border-cyan-500/40",
    bg: "group-hover:bg-cyan-500/5",
    icon: "text-cyan-400 group-hover:bg-cyan-500/10",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  },
  {
    id: 5,
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta",
    date: "Dec 2022",
    expires: "Dec 2024",
    color: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
    border: "group-hover:border-indigo-500/40",
    bg: "group-hover:bg-indigo-500/5",
    icon: "text-indigo-400 group-hover:bg-indigo-500/10",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-24 relative z-10">
      
      {/* Background Ambient Glows (Matched with New Theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Modern Header - Matched Exactly with Experience & HostedProjects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <ShieldCheck size={12} className="text-purple-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Official Credentials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Expertise</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            Industry-recognized qualifications validating my skills in AI, Software Engineering, and Data Science.
          </p>
        </motion.div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <div className="h-full group relative transition-transform duration-500 hover:-translate-y-1">
                
                {/* Glow Effect Behind Card */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/5 rounded-[20px] md:rounded-[24px] blur opacity-0 transition duration-500 ${cert.color} pointer-events-none`} />
                
                {/* Main Card Content */}
                <div className={`relative h-full flex flex-col justify-between p-5 md:p-6 rounded-[20px] md:rounded-[24px] bg-[#050505]/90 border border-white/5 backdrop-blur-xl transition-all duration-500 ${cert.border} ${cert.bg}`}>
                  
                  <div>
                    {/* Top Row: Icon & Issuer */}
                    <div className="flex justify-between items-start mb-5">
                      <div className={`p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 ${cert.icon}`}>
                        <Award size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">{cert.issuer}</span>
                        {cert.expires ? (
                          <span className="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] md:text-[10px] text-emerald-400 font-mono shadow-inner group-hover:border-emerald-500/40 transition-colors">
                            Valid until {cert.expires}
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] md:text-[10px] text-gray-400 font-mono shadow-inner">
                            No Expiration
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] md:text-[17px] font-bold text-white mb-2.5 leading-snug group-hover:text-white/90 transition-colors">
                      {cert.title}
                    </h3>
                    
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-[11px] md:text-xs text-gray-500 mb-6 font-medium group-hover:text-gray-400 transition-colors">
                      <Calendar size={12} />
                      <span>Issued {cert.date}</span>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto w-full group/btn relative overflow-hidden rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <div className="flex items-center justify-center gap-2 relative z-10">
                      <span className="text-[11px] md:text-xs font-bold text-gray-300 group-hover/btn:text-white transition-colors tracking-wide">
                        Verify Credential
                      </span>
                      <ExternalLink size={14} className="text-gray-500 group-hover/btn:text-white transition-colors" />
                    </div>
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}