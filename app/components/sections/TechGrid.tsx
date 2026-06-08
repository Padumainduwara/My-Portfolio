"use client";

import { motion } from 'framer-motion';
import { Cpu, Code2, BrainCircuit, Layout, Database } from 'lucide-react';
import { Variants } from 'framer-motion';

// Organized Skills Data
const techCategories = [
  {
    id: "01",
    title: "Languages & Technologies",
    icon: Code2,
    accent: "text-cyan-400",
    bgHover: "hover:bg-cyan-400/10",
    borderHover: "hover:border-cyan-400/50",
    glow: "shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    lineGradient: "from-cyan-400/60 to-transparent",
    dotBg: "bg-cyan-400",
    skills: [
      "Next.js", "TypeScript", "React", "Node.js", "Python", "R", "JavaScript", 
      "C#", ".NET", "C++", "Java", "PHP", "HTML", "CSS", "Tailwind CSS"
    ]
  },
  {
    id: "02",
    title: "Data Science & AI",
    icon: BrainCircuit,
    accent: "text-purple-400",
    bgHover: "hover:bg-purple-400/10",
    borderHover: "hover:border-purple-400/50",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    lineGradient: "from-purple-400/60 to-transparent",
    dotBg: "bg-purple-400",
    skills: [
      "Machine Learning Architectures", "Model Evaluation (RMSE, F1, KS-Testing)", 
      "TF-IDF Vectors", "Vision Models", "Autoencoders", "Behavior Models", 
      "Data Preprocessing", "Big Data Analysis"
    ]
  },
  {
    id: "03",
    title: "Development & UI/UX",
    icon: Layout,
    accent: "text-pink-400",
    bgHover: "hover:bg-pink-400/10",
    borderHover: "hover:border-pink-400/50",
    glow: "shadow-[0_0_15px_rgba(244,114,182,0.4)]",
    lineGradient: "from-pink-400/60 to-transparent",
    dotBg: "bg-pink-400",
    skills: [
      "Responsive Layouts", "Framer Motion", "Component Architecture", "Environment Optimization"
    ]
  },
  {
    id: "04",
    title: "Databases & Systems",
    icon: Database,
    accent: "text-orange-400",
    bgHover: "hover:bg-orange-400/10",
    borderHover: "hover:border-orange-400/50",
    glow: "shadow-[0_0_15px_rgba(251,146,60,0.4)]",
    lineGradient: "from-orange-400/60 to-transparent",
    dotBg: "bg-orange-400",
    skills: [
      "MySQL", "SQL Server", "GitHub", "WordPress", "Android Studio"
    ]
  }
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function TechGrid() {
  return (
    <section id="tech-stack" className="py-20 md:py-28 relative z-10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Modern Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Cpu size={12} className="text-purple-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">System Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Architecture</span>
          </h2>
          
          {/* Summarized Description */}
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
            The core languages, frameworks, and AI systems powering my high-performance digital solutions.
          </p>
        </motion.div>

        {/* Categories Layout - Borderless & Fluid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 sm:gap-y-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              /* Here is the change: added ml-4 sm:ml-6 md:ml-0 to push the whole block right on mobile */
              className="relative pl-6 sm:pl-8 ml-4 sm:ml-6 md:ml-0"
            >
              {/* Left Glowing Timeline Line */}
              <div className={`absolute left-0 top-3 bottom-0 w-[2px] bg-gradient-to-b ${category.lineGradient} rounded-full`} />
              
              {/* Glowing Dot on Timeline */}
              <div className="absolute -left-[5px] top-[14px] w-3 h-3 rounded-full bg-[#050505] flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${category.dotBg} animate-pulse shadow-[0_0_10px_currentColor]`} />
              </div>

              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className={`p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md ${category.accent}`}>
                  <category.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-mono tracking-widest block mb-0.5 sm:mb-1">
                    {category.id} // MODULE
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-100 tracking-tight">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skill Tags Cloud (Mobile Adjusted) */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 sm:gap-2.5"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className={`
                      relative group px-3 py-1.5 sm:px-4 sm:py-2 rounded-full 
                      bg-white/[0.03] border border-white/[0.05] 
                      text-xs sm:text-sm text-gray-300 font-medium tracking-wide
                      transition-all duration-300 ease-out cursor-default
                      backdrop-blur-sm
                      ${category.bgHover} ${category.borderHover} hover:text-white
                      hover:-translate-y-0.5
                    `}
                  >
                    {skill}
                    {/* Hover Glow Effect behind the text */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:${category.glow}`} />
                  </motion.div>
                ))}
              </motion.div>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}