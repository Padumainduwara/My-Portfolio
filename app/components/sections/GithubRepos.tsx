"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ArrowUpRight, Code2, Loader2 } from 'lucide-react';

// GitHub Username
const GITHUB_USERNAME = "Padumainduwara";

// Interface for Repo Data
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

// Premium Language Color Mapping
const getLangColor = (lang: string) => {
  switch (lang) {
    case 'TypeScript': return 'bg-blue-500 shadow-blue-500';
    case 'JavaScript': return 'bg-yellow-400 shadow-yellow-400';
    case 'Python': return 'bg-green-500 shadow-green-500';
    case 'CSS': return 'bg-pink-500 shadow-pink-500';
    case 'HTML': return 'bg-orange-500 shadow-orange-500';
    case 'Java': return 'bg-red-500 shadow-red-500';
    case 'C#': return 'bg-purple-500 shadow-purple-500';
    default: return 'bg-cyan-400 shadow-cyan-400';
  }
};

// Next-Level Bento Grid Layout
const getGridClass = (index: number) => {
  switch (index) {
    case 0: return "md:col-span-2 md:row-span-2"; // Large Featured (Left)
    case 1: return "md:col-span-1 md:row-span-1"; // Top Right Small
    case 2: return "md:col-span-1 md:row-span-1"; // Mid Right Small
    case 3: return "md:col-span-1 md:row-span-1"; // Bottom Left Small
    case 4: return "md:col-span-2 md:row-span-1"; // Bottom Right Wide
    default: return "md:col-span-1 md:row-span-1";
  }
};

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch GitHub Repos on Mount
  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=5`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="opensource" className="py-20 md:py-24 relative z-10 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header matched exactly with Experience & HostedProjects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
           <Github size={12} className="text-purple-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Open Source</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Latest on <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">GitHub</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            Contributions to the developer community. Automatically updated from my repositories.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin mb-4" />
            <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Fetching Repositories...</span>
          </div>
        ) : (
          /* Bento Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[180px]">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative p-5 md:p-6 rounded-[20px] md:rounded-[24px] bg-[#050505]/80 backdrop-blur-md border border-white/5 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.15)] ${getGridClass(index)}`}
              >
                {/* Hover Inner Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${getLangColor(repo.language)}`} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-[10px] bg-white/5 border border-white/10 text-gray-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                        <Code2 size={16} />
                      </div>
                      <h3 className="font-bold text-white text-base md:text-lg tracking-tight group-hover:text-cyan-100 transition-colors line-clamp-1">
                        {repo.name}
                      </h3>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                  </div>

                  {/* Show description only for larger boxes (index 0 and 4) or on mobile */}
                  {(index === 0 || index === 4 || typeof window !== 'undefined' && window.innerWidth < 768) && (
                    <p className="text-gray-400 text-xs md:text-[13px] leading-relaxed line-clamp-2 mt-2 font-light group-hover:text-gray-300 transition-colors">
                      {repo.description || "Check out the code on GitHub for more detailed information and recent commits."}
                    </p>
                  )}
                </div>

                {/* Bottom Meta Data */}
                <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${getLangColor(repo.language)} shadow-sm`} />
                    <span className="text-[10px] md:text-xs font-medium text-gray-300">{repo.language || 'Code'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-[10px] md:text-xs font-mono">
                    <div className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                      <Star size={12} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                      <GitFork size={12} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Bottom Action Button */}
        {!loading && (
          <div className="mt-12 flex justify-center">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs md:text-sm font-bold hover:bg-white/10 hover:text-white transition-all duration-300 hover:border-purple-500/30"
            >
              <Github size={16} />
              <span>Explore All Repositories</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}