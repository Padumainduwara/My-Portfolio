"use client";
import { motion } from 'framer-motion';
import { Code2, Bot, Rocket, ArrowUpRight, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Custom Software Development",
    desc: "Building scalable, high-performance web and mobile applications tailored to your specific business needs using cutting-edge technologies.",
    icon: Code2,
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    iconColor: "text-cyan-400",
    shadow: "shadow-[0_0_50px_-12px_rgba(34,211,238,0.2)]"
  },
  {
    title: "AI & Automation Integration",
    desc: "Empowering your business with intelligent automation, machine learning models, and data-driven insights to optimize workflows.",
    icon: Bot,
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    iconColor: "text-fuchsia-400",
    shadow: "shadow-[0_0_50px_-12px_rgba(217,70,239,0.2)]"
  },
  {
    title: "Digital Marketing & Branding",
    desc: "Elevating your brand presence through strategic digital marketing campaigns, SEO optimization, and compelling visual identity.",
    icon: Rocket,
    gradient: "from-orange-400 via-red-500 to-rose-600",
    iconColor: "text-orange-400",
    shadow: "shadow-[0_0_50px_-12px_rgba(251,146,60,0.2)]"
  }
];

export default function Services() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      
      {/* --- Background Ambient Glow --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] opacity-40" />
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
  <Sparkles size={14} className="text-purple-400" />
  <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">What I Offer</span>
</div>
          {/* "My Services" - Big Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive technical solutions tailored to elevate your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="h-full"
            >
              {/* --- HOLOGRAPHIC GLASS CARD --- */}
              <div className={`group relative h-full p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:via-white/10 transition-all duration-500 ${service.shadow}`}>
                
                {/* Card Content */}
                <div className="relative h-full bg-[#050505]/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 flex flex-col overflow-hidden border border-white/5 group-hover:border-white/10 transition-all duration-300">
                  
                  {/* Top Right Gradient Splash */}
                  <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-10 blur-[70px] group-hover:opacity-25 transition-opacity duration-500 rounded-full`} />
                  
                  {/* Icon */}
                  <div className="mb-8 relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <service.icon size={32} className={`${service.iconColor} drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base font-light flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.desc}
                  </p>

                  {/* Bottom Action (ID Removed) */}
                  <div className="flex items-center justify-end border-t border-white/5 pt-6 mt-auto">
                    <div className="flex items-center gap-3 group/link cursor-pointer">
                      <span className="text-sm font-bold text-white/40 group-hover/link:text-white transition-colors uppercase tracking-wider">Explore</span>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover/link:bg-white group-hover/link:text-black transition-all duration-300 transform group-hover/link:-rotate-45">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
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