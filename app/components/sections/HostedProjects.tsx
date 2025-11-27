"use client";
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, ArrowUpRight, Zap, ChevronDown, Loader2 } from 'lucide-react';

// Project Data
const projects = [
  {
    title: "Axiora Labs",
    url: "http://axioralabs.com/",
    category: "Corporate",
    desc: "Innovation hub for next-gen software solutions.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Axiora Blogs",
    url: "https://axiora-blogs.vercel.app/",
    category: "Blog / Content",
    desc: "A modern blogging platform for tech insights.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Madhara Service Center",
    url: "https://madhara-services.vercel.app/",
    category: "Business Service",
    desc: "Digital presence for service center operations.",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Your Guided Journey to Islam",
    url: "https://think-like-a-muslim-axiora.vercel.app/",
    category: "Educational / Religious",
    desc: "An interactive guide and educational platform.",
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "St. Joseph's College Nugegoda",
    url: "https://stjosephscollegenugegoda.lk/",
    category: "Educational Institute",
    desc: "Official web portal for St. Joseph's College.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Doc Do Online Channeling",
    url: "https://doc-do-clinic-app.vercel.app/",
    category: "Healthcare",
    desc: "Seamless doctor channeling and appointment system.",
    color: "from-teal-400 to-blue-500"
  },
  {
    title: "St. John's College Official",
    url: "https://stjohnscollege.lk/",
    category: "Educational Institute",
    desc: "The digital face of St. John's College.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "St. Joseph's Girls School",
    url: "https://st-josephs-rho.vercel.app/",
    category: "Educational Institute",
    desc: "Official website for St. Joseph's Girls School.",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Nexentia JICTS",
    url: "https://www.nexentiajicts.com/",
    category: "Event / Competition",
    desc: "ICT competition portal for St. Joseph's College.",
    color: "from-cyan-400 to-blue-600"
  },
  {
    title: "Live Quotation Generator",
    url: "https://quotation-generator-livid.vercel.app/",
    category: "Web Utility",
    desc: "Automated tool for generating instant business quotations.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Network Company Web",
    url: "https://networxx-web.vercel.app/",
    category: "Corporate",
    desc: "Modern landing page for networking solutions.",
    color: "from-gray-200 to-gray-400"
  },
  {
    title: "Build With Live",
    url: "https://buildwithlive.com/",
    category: "Service Platform",
    desc: "Platform for real-time construction updates.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    title: "QR Code Generator",
    url: "https://qr.axioralabs.com/",
    category: "Tools",
    desc: "Fast and reliable QR code generation tool.",
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "Old Palm House Sri Lanka",
    url: "http://www.oldpalmhousesrilanka.com/",
    category: "Hospitality",
    desc: "Elegant website for a luxury villa in Sri Lanka.",
    color: "from-stone-400 to-stone-600"
  },
  {
    title: "Small Cake Shop",
    url: "https://kids-shop-lxn9.vercel.app/",
    category: "E-commerce",
    desc: "Delightful online store for cakes and sweets.",
    color: "from-pink-400 to-rose-400"
  },
];

// --- SMART COMPONENT FOR OPTIMIZED LOADING ---
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    // 1. Detect if the card is on the screen
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // Only load when 100px into view
    
    // 2. State to track if the iframe has finished loading
    const [iframeLoaded, setIframeLoaded] = useState(false);

    return (
        <motion.a
            ref={ref}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index % 3 * 0.1, duration: 0.5 }}
            className="group relative block h-full"
        >
            <div className="h-full rounded-2xl bg-[#080808] border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:translate-y-[-10px] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col">
                
                {/* Browser Window Header */}
                <div className="h-9 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20 relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors duration-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors duration-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors duration-300" />
                    <div className="ml-4 flex-1 h-5 rounded-md bg-black/20 flex items-center px-2 overflow-hidden">
                        <span className="text-[10px] font-mono text-gray-600 truncate group-hover:text-gray-400 transition-colors">
                            {project.url.replace(/^https?:\/\//, '')}
                        </span>
                    </div>
                </div>

                {/* --- SMART PREVIEW AREA --- */}
                <div className="relative h-48 w-full bg-[#0c0c0c] overflow-hidden group-hover:bg-[#111] transition-colors">
                    
                    {/* LAYER 1: The "Skeleton" / Placeholder 
                        This shows a beautiful gradient + spinner immediately. 
                        It prevents the "Empty Box" look on mobile.
                    */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                    
                    {!iframeLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Loader2 className="w-6 h-6 text-white/30 animate-spin mb-2" />
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading Preview...</span>
                        </div>
                    )}

                    {/* LAYER 2: The Live Iframe 
                        1. Only renders if 'isInView' is true (Saves 90% performance).
                        2. 'loading="lazy"' attribute for browser optimization.
                        3. Fade in animation once loaded.
                    */}
                    {isInView && (
                        <div className={`absolute inset-0 w-[1280px] h-[768px] origin-top-left scale-[0.28] sm:scale-[0.35] md:scale-[0.25] lg:scale-[0.3] xl:scale-[0.33] transition-opacity duration-700 pointer-events-none ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            <iframe 
                                src={project.url} 
                                title={`${project.title} Live Preview`}
                                className="w-full h-full border-0"
                                loading="lazy"
                                onLoad={() => setIframeLoaded(true)}
                                tabIndex={-1}
                            />
                        </div>
                    )}

                    {/* Overlays for Interaction & Design */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 mix-blend-overlay group-hover:opacity-20 transition-all duration-500 z-20 pointer-events-none`} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-20 pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-20 pointer-events-none" />

                    {/* "Live" Badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-1.5 z-30">
                         <span className={`w-1.5 h-1.5 rounded-full ${iframeLoaded ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                         <span className="text-[10px] font-bold text-white tracking-wide uppercase">
                             {iframeLoaded ? 'Live View' : 'Connecting'}
                         </span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow relative overflow-hidden z-30 bg-[#080808]">
                    <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${project.color} opacity-0 blur-[60px] group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className="mb-3">
                        <span className={`text-[10px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
                            {project.category}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-400" />
                    </h3>
                    
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors line-clamp-2">
                        {project.desc}
                    </p>

                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-600 font-mono group-hover:text-gray-400 transition-colors">
                            <Zap size={12} className="text-yellow-500/50 group-hover:text-yellow-500 transition-colors" />
                            <span>Deployed</span>
                        </div>
                        <div className={`w-12 h-[2px] rounded-full bg-gradient-to-r ${project.color} opacity-30 group-hover:opacity-100 transition-all duration-500`} />
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

export default function HostedProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 9);

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
            <Globe size={14} className="text-purple-400" />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Live Deployments</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated collection of live websites and applications I've engineered and deployed.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        {!showAll && projects.length > 9 && (
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

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="px-6 py-2 rounded-full bg-[#050505] text-sm text-gray-500">
              Total Live Deployments: <span className="text-white font-bold">{projects.length}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}