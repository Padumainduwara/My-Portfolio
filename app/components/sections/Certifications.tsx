"use client";
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle, Calendar } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Gemini Certified University Student",
    issuer: "Google",
    date: "Nov 2025",
    expires: "Nov 2028",
    // Google: Multi-color vibe
    color: "group-hover:shadow-blue-500/40",
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/5",
    icon: "text-blue-400",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/" 
  },
  {
    id: 2,
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "Jan 2025",
    expires: "Jan 2028",
    // GitHub: Purple/White vibe
    color: "group-hover:shadow-purple-500/40",
    border: "group-hover:border-purple-500/50",
    bg: "group-hover:bg-purple-500/5",
    icon: "text-purple-400",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  },
  {
    id: 3,
    title: "Responsible AI with GitHub Copilot",
    issuer: "Microsoft",
    date: "Oct 2025",
    expires: null,
    // Microsoft: Orange/Blue vibe
    color: "group-hover:shadow-orange-500/40",
    border: "group-hover:border-orange-500/50",
    bg: "group-hover:bg-orange-500/5",
    icon: "text-orange-400",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  },
  {
    id: 4,
    title: "Handling, Storing and Managing Data",
    issuer: "UNICEF",
    date: "Jan 2025",
    expires: null,
    // UNICEF: Cyan/Blue vibe
    color: "group-hover:shadow-cyan-500/40",
    border: "group-hover:border-cyan-500/50",
    bg: "group-hover:bg-cyan-500/5",
    icon: "text-cyan-400",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  },
  {
    id: 5,
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta",
    date: "Dec 2022",
    expires: "Dec 2024",
    // Meta: Blue vibe
    color: "group-hover:shadow-indigo-500/40",
    border: "group-hover:border-indigo-500/50",
    bg: "group-hover:bg-indigo-500/5",
    icon: "text-indigo-400",
    link: "https://www.linkedin.com/in/padumainduwara/details/certifications/"
  }
];

export default function Certifications() {
  return (
    <section className="py-32 relative z-10">
       <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
 <ShieldCheck size={14} className="text-purple-400" />
  <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Official Credentials</span>
</div>
          {/* "My Services" - Big Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Industry-recognized qualifications validating my skills in AI, Software Engineering, and Data Science.
          </p>
        </motion.div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full group relative">
                
                {/* Glow Effect Behind Card */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500 ${cert.color}`} />
                
                {/* Main Card Content */}
                <div className={`relative h-full flex flex-col justify-between p-8 rounded-2xl bg-[#080808] border border-white/10 backdrop-blur-xl transition-all duration-500 ${cert.border} ${cert.bg}`}>
                  
                  <div>
                    {/* Top Row: Icon & Issuer */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${cert.icon} transition-transform group-hover:scale-110 duration-300`}>
                        <Award size={32} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{cert.issuer}</span>
                        {cert.expires ? (
                          <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono">
                            Valid until {cert.expires}
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded bg-gray-800 border border-gray-700 text-[10px] text-gray-400 font-mono">
                            No Expiration
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-white/90">
                      {cert.title}
                    </h3>
                    
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                      <Calendar size={14} />
                      <span>Issued {cert.date}</span>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto w-full group/btn relative overflow-hidden rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-center transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-semibold text-gray-300 group-hover/btn:text-white transition-colors">
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