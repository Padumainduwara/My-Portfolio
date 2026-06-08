"use client";

import { motion } from 'framer-motion';
import { Globe, Terminal, Database, Layers, Code2, Cpu, Star, Smartphone, Zap } from 'lucide-react';

// Skill Data with "Power Levels" (Percentages)
const skills = [
  { name: "React & Next.js", icon: Globe, level: "Expert", percent: 95, color: "text-cyan-400", bar: "bg-cyan-400" },
  { name: "Node.js & Python", icon: Terminal, level: "Advanced", percent: 85, color: "text-green-400", bar: "bg-green-400" },
  { name: "Data Science (R)", icon: Database, level: "Advanced", percent: 88, color: "text-blue-400", bar: "bg-blue-400" },
  { name: "Tailwind CSS", icon: Layers, level: "Expert", percent: 92, color: "text-teal-400", bar: "bg-teal-400" },
  { name: "MySQL & SQL", icon: Database, level: "Intermediate", percent: 75, color: "text-orange-400", bar: "bg-orange-400" },
  { name: "C# & .NET", icon: Code2, level: "Intermediate", percent: 70, color: "text-purple-400", bar: "bg-purple-400" },
  { name: "Mobile Dev", icon: Smartphone, level: "Intermediate", percent: 65, color: "text-pink-400", bar: "bg-pink-400" },
  { name: "Digital Marketing", icon: Star, level: "Expert", percent: 90, color: "text-yellow-400", bar: "bg-yellow-400" },
];

export default function TechGrid() {
  return (
    <section id="tech-stack" className="py-20 md:py-24 relative z-10">
      {/* Background Ambient Glows (Matched with New Theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[30%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Modern Header - Matched Exactly with Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Cpu size={12} className="text-purple-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">System Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Arsenal</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            The cutting-edge languages, frameworks, and tools powering my high-performance solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="h-full"
            >
              {/* --- TECH MODULE CARD --- */}
              <div className="group relative h-full bg-transparent rounded-[20px] md:rounded-[24px] hover:-translate-y-1 transition-all duration-300">
                
                <div className="relative h-full bg-[#050505]/90 border border-white/5 hover:border-white/15 backdrop-blur-xl overflow-hidden rounded-[20px] md:rounded-[24px] shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_15px_30px_-10px_rgba(34,211,238,0.1)] transition-all duration-500">
                  
                  {/* Hover Glow Background inside card */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent pointer-events-none`} />
                  
                  {/* Top Bar (Decor Animation) */}
                  <div className="h-[3px] w-full bg-white/5 relative z-20">
                    <div className={`absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${skill.bar}`} />
                  </div>

                  <div className="p-5 md:p-6 relative z-10 flex flex-col h-[calc(100%-3px)]">
                    
                    {/* Header: Icon & Status */}
                    <div className="flex justify-between items-start mb-5">
                      <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${skill.color} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-inner`}>
                        <skill.icon size={18} className="md:w-5 md:h-5" />
                      </div>
                      
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 shadow-inner">
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.bar} animate-pulse shadow-[0_0_8px_currentColor]`} />
                        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Online</span>
                      </div>
                    </div>

                    {/* Name & Level */}
                    <h3 className="text-[15px] md:text-[17px] font-bold text-white mb-1 group-hover:text-gray-100 transition-colors tracking-tight">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] md:text-[11px] text-gray-500 font-mono mb-5 uppercase tracking-widest">
                      {skill.level}
                    </p>

                    {/* Progress Bar & Percent Area */}
                    <div className="mt-auto">
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className={`h-full ${skill.bar} rounded-full shadow-[0_0_10px_currentColor]`}
                        />
                      </div>
                      
                      {/* Percentage Number (Shows on Hover smoothly) */}
                      <div className="flex justify-between items-center mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-4">
                        <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">Proficiency</span>
                        <span className={`text-[10px] font-bold font-mono ${skill.color}`}>{skill.percent}%</span>
                      </div>
                    </div>

                  </div>

                  {/* Corner Accent Icon (Zap) */}
                  <div className="absolute bottom-4 right-4 p-1 opacity-10 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none">
                    <Zap size={14} className={skill.color} />
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