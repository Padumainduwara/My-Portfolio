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
    <section className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
  <Cpu size={14} className="text-purple-400" />
  <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">System Capabilities</span>
</div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             The cutting-edge languages, frameworks, and tools powering my high-performance solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="h-full"
            >
              {/* --- TECH MODULE CARD --- */}
              <div className="group relative h-full bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300">
                
                {/* Hover Glow Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`} />
                
                {/* Top Bar (Decor) */}
                <div className="h-1 w-full bg-white/5 relative">
                  <div className={`absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-700 ${skill.bar}`} />
                </div>

                <div className="p-6 relative z-10">
                  
                  {/* Header: Icon & Status */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg bg-white/5 border border-white/5 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon size={24} />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${skill.bar} animate-pulse`} />
                      <span className="text-[10px] font-mono text-gray-500 uppercase">Online</span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono mb-4 uppercase tracking-wider">{skill.level}</p>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${skill.bar} rounded-full shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                  
                  {/* Percentage Number (Shows on Hover) */}
                  <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] text-gray-500 font-mono">Proficiency</span>
                    <span className={`text-xs font-bold font-mono ${skill.color}`}>{skill.percent}%</span>
                  </div>

                </div>

                {/* Corner Accents */}
                <div className="absolute bottom-0 right-0 p-2 opacity-20 group-hover:opacity-50 transition-opacity">
                  <Zap size={12} className={skill.color} />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}