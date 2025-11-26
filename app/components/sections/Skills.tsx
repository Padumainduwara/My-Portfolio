"use client";
import { motion } from 'framer-motion';

const skills = [
  "React", "Next.js", "Node.js", "Python", "Tailwind CSS", 
  "MySQL", "C#", ".NET", "PHP", "Java", "R Language", 
  "WordPress", "Digital Marketing", "Data Science"
];

export default function Skills() {
  return (
    <section className="py-20 relative overflow-hidden bg-black/50">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-400 uppercase tracking-widest">Technical Arsenal</h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div 
          className="flex gap-12 py-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 stroke-text hover:from-purple-400 hover:to-blue-400 transition-colors cursor-default">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}