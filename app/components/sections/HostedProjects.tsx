"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, ChevronDown, Github, Loader2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "SENTIO 360 Multi-Model Firewall",
    url: "https://sentio-360-multi-model-firewall-system.onrender.com/site/index.html",
    github: "https://github.com/Padumainduwara/SENTIO_360-Multi-Model-Firewall-System.git",
    category: "AI / Cybersecurity",
    desc: "An advanced multi-model AI firewall system engineered for real-time threat detection and intelligent network security.",
    color: "from-red-500 to-rose-600",
    image: "/projects/p15.png",
    stack: ["Python", "TensorFlow", "FastAPI", "React", "TailwindCSS"]
  },
  {
    title: "Hybrid Diabetes Risk Prediction",
    url: "Hybrid-Diabetes-Risk-Prediction-System.onrender.com",
    github: "https://github.com/Padumainduwara/Hybrid-Diabetes-Risk-Prediction-System.git",
    category: "Machine Learning / Healthcare",
    desc: "A hybrid machine learning architecture designed for early and accurate prediction of diabetes risk using clinical data analytics.",
    color: "from-blue-500 to-cyan-500",
    image: "/projects/p16.png",
    stack: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "XGBoost"]
  },
{
    title: "Let's Help Others LK",
    url: "https://letshelpotherslk.vercel.app/",
    github: "https://github.com/madharaservices/letshelpotherslk.git",
    category: "Non-Profit / Social Service",
    desc: "A dedicated digital platform empowering community service and donation drives in Sri Lanka.",
    color: "from-rose-500 to-orange-500",
    image: "/projects/p1.png",
    stack: ["Next.js", "React", "TailwindCSS", "Firebase"]
  },
  {
    title: "Natural Latex Foam Sri Lanka",
    url: "https://naturallatexfoamsrilanka.lk",
    github: "https://github.com/Padumainduwara/natural-latex-foam.git",
    category: "Manufacturing / Export",
    desc: "Premium 100% natural latex foam mattresses and sleep products manufactured in Sri Lanka.",
    color: "from-green-600 to-lime-500",
    image: "/projects/p2.png",
    stack: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"]
  },
  {
    title: "Axiora Blogs",
    url: "https://axiorablogs.com",
    github: "https://github.com/Padumainduwara/axiora-blogs.git",
    category: "Blog / Content",
    desc: "A modern, high-performance blogging platform optimized for tech insights and fast rendering.",
    color: "from-purple-500 to-pink-500",
    image: "/projects/p3.png",
    stack: ["Next.js", "React", "Sanity CMS", "TailwindCSS"]
  },
  {
    title: "Madhara Service Center",
    url: "https://madharaservices.com",
    github: "https://github.com/madharaservices/madhara-services.git",
    category: "Business Service",
    desc: "Digital presence and management platform for automobile service center operations.",
    color: "from-orange-500 to-red-500",
    image: "/projects/p4.png",
    stack: ["React", "Node.js", "TailwindCSS", "PostgreSQL"]
  },
  {
    title: "SKD Event Management",
    url: "https://skdevents.lk",
    github: "https://github.com/Padumainduwara/skd-events.git",
    category: "Event Management",
    desc: "Professional full-service event planning and digital management solutions for all occasions.",
    color: "from-violet-600 to-fuchsia-600",
    image: "/projects/p5.png",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Build With Videos",
    url: "https://buildwithvideos.com",
    github: "https://github.com/buildwithlive/buildwithlive.git",
    category: "Service Platform",
    desc: "An innovative digital platform providing real-time construction site updates via video streaming.",
    color: "from-amber-500 to-yellow-500",
    image: "/projects/p6.png",
    stack: ["Next.js", "AWS S3", "Node.js", "TailwindCSS"]
  },
  {
    title: "Nexentia JICTS",
    url: "https://www.nexentiajicts.com",
    github: "https://github.com/Padumainduwara/nexentia-25.git",
    category: "Event / Competition",
    desc: "Official ICT competition portal for St. Joseph's College, handling registrations and leaderboards.",
    color: "from-cyan-400 to-blue-600",
    image: "/projects/p7.png",
    stack: ["Next.js", "Supabase", "React", "TailwindCSS"]
  },
  {
    title: "Network Company Web",
    url: "https://networxx-web.vercel.app",
    github: "https://github.com/Padumainduwara/Networxx-web.git",
    category: "Corporate",
    desc: "A modern, high-conversion landing page designed for enterprise networking solutions.",
    color: "from-gray-200 to-gray-400",
    image: "/projects/p8.png",
    stack: ["React", "Vite", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "St. Joseph's Girls School",
    url: "https://stjosephsgirlsschool.com",
    github: "https://github.com/Padumainduwara/st-josephs.git",
    category: "Educational Institute",
    desc: "The official academic website and student information portal for St. Joseph's Girls School.",
    color: "from-pink-500 to-rose-500",
    image: "/projects/p9.png",
    stack: ["Next.js", "WordPress API", "TailwindCSS", "React"]
  },
  {
    title: "ICT with Sandani",
    url: "https://ictwithsandani.com",
    github: "https://github.com/Padumainduwara/mr-sandani-portfolio.git",
    category: "Education / Portfolio",
    desc: "Official educational portal and professional portfolio for an ICT educator.",
    color: "from-emerald-400 to-teal-600",
    image: "/projects/p10.png",
    stack: ["Next.js", "React", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Inova LK",
    url: "https://inova-lk.vercel.app",
    github: "https://github.com/Padumainduwara/inova-engineering-web.git",
    category: "Tech Innovation",
    desc: "A next-generation platform delivering innovative digital and engineering solutions.",
    color: "from-cyan-500 to-blue-500",
    image: "/projects/p11.png",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Three.js"]
  },
  {
    title: "Doc Do Online Channeling",
    url: "https://doc-do-clinic-app.vercel.app",
    github: "https://github.com/Padumainduwara/DocDo-clinic-app.git",
    category: "Healthcare",
    desc: "A seamless doctor channeling, patient management, and clinic appointment system.",
    color: "from-teal-400 to-blue-500",
    image: "/projects/p12.png",
    stack: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"]
  },
  {
    title: "Arabian Gig",
    url: "https://arabiangig.vercel.app",
    github: "https://github.com/Padumainduwara/arabiangig.git",
    category: "Travel & Tourism",
    desc: "A premier travel platform specializing in tailor-made luxury vacations and immersive experiences.",
    color: "from-teal-400 to-emerald-500",
    image: "/projects/p13.png",
    stack: ["Next.js", "React", "TailwindCSS", "PostgreSQL"]
  },
  {
    title: "QR Code Generator",
    url: "https://qr.axioralabs.com",
    github: "https://github.com/Padumainduwara/qr-code-generator.git",
    category: "Tools",
    desc: "A fast, reliable, and customizable QR code generation tool built for everyday utility.",
    color: "from-green-400 to-emerald-600",
    image: "/projects/p14.png",
    stack: ["React", "Vite", "Node.js", "TailwindCSS"]
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index % 3 * 0.1, duration: 0.5 }}
            className="group relative block h-full"
        >
            <div className="h-full rounded-[24px] bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)] flex flex-col backdrop-blur-sm">
                
                {/* Browser Window Header */}
                <div className="h-10 bg-[#050505]/80 border-b border-white/5 flex items-center px-4 gap-2 z-20 relative">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors duration-300 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors duration-300 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors duration-300 shadow-inner" />
                    <div className="ml-3 flex-1 h-6 rounded-md bg-white/5 flex items-center px-3 overflow-hidden border border-white/5">
                        <span className="text-[10px] font-mono text-gray-400 truncate group-hover:text-cyan-100 transition-colors duration-300">
                            {project.url.replace(/^https?:\/\//, '')}
                        </span>
                    </div>
                </div>

                {/* --- NEXT LEVEL HOVER SCROLLING IMAGE WITH LOADER --- */}
                <div className="relative h-48 md:h-56 w-full bg-[#0c0c0c] overflow-hidden group border-b border-white/5">
                    
                    {/* Placeholder Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                    
                    {/* Loading Animation / Fallback */}
                    {!isImageLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Loader2 className="w-6 h-6 text-white/30 animate-spin mb-2" />
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading Preview...</span>
                        </div>
                    )}
                    
                    {/* High Quality Unoptimized Image */}
                    {project.image && (
                        <Image 
                            src={project.image}
                            alt={`${project.title} Preview`}
                            fill
                            unoptimized
                            quality={100}
                            style={{ imageRendering: '-webkit-optimize-contrast' }}
                            className={`object-cover object-top transition-[object-position] duration-[6s] ease-in-out group-hover:object-bottom z-10 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    )}

                    {/* Overlays to make it look premium */}
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-20" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 pointer-events-none z-20" />
                </div>

                {/* Content Area */}
                <div className="p-5 md:p-6 flex flex-col flex-grow relative overflow-hidden z-30 bg-[#050505]/90">
                    <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${project.color} opacity-0 blur-[50px] group-hover:opacity-15 transition-opacity duration-500 pointer-events-none`} />
                    
                    <div className="mb-2">
                        <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
                            {project.category}
                        </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors line-clamp-2">
                        {project.desc}
                    </p>

                    {project.stack && (
                        <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-6 relative z-20">
                            {project.stack.map((tech: string, i: number) => (
                                <span 
                                    key={i} 
                                    className="flex items-center gap-1.5 px-2.5 py-1 text-[9px] md:text-[10px] font-mono font-bold tracking-wider rounded-md bg-black/40 border border-white/5 text-gray-400 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-white shadow-inner"
                                >
                                    <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color} shadow-[0_0_5px_currentColor] opacity-70 group-hover:opacity-100 transition-opacity`} />
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Professional Action Buttons */}
                    <div className="mt-auto flex items-center justify-between gap-3 relative z-20">
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] text-cyan-400 hover:text-[#020010] transition-all duration-300 text-xs font-bold tracking-wide"
                        >
                            <Globe size={14} />
                            Live Demo <ArrowUpRight size={12} className="opacity-70" />
                        </a>
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-[#020010] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] text-gray-300 transition-all duration-300 text-xs font-bold tracking-wide"
                        >
                            <Github size={14} />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function HostedProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 md:py-24 relative z-10 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-700/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
           <Globe size={12} className="text-cyan-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Live Deployments</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Work</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            A curated collection of live websites and applications I've engineered and deployed.
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span className="text-[11px] md:text-xs font-bold text-cyan-100 tracking-wider">
              Total Live Deployments: <span className="text-cyan-400 text-[13px] md:text-sm">{projects.length}</span>
            </span>
          </div>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
                key={index} 
                project={project} 
                index={index}
            />
          ))}
        </div>

        {!showAll && projects.length > 6 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <span>View All Projects</span>
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
