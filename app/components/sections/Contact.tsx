"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Message sent! (This is a demo)");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    // RESPONSIVE FIX: py-16 for mobile, py-24 for desktop
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
            <MessageSquare size={14} className="text-purple-400" />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Get In Touch</span>
          </div>
          {/* RESPONSIVE FIX: Text size scales smoothly from 4xl to 6xl */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <ContactCard 
              icon={Phone} 
              title="Call Me" 
              value="+94 72 411 3376" 
              href="tel:+94724113376"
              color="text-purple-400"
              bg="group-hover:bg-purple-500/10"
              border="group-hover:border-purple-500/20"
            />
            <ContactCard 
              icon={Mail} 
              title="Email Me" 
              value="induwarapaduma2002@gmail.com" 
              href="mailto:induwarapaduma2002@gmail.com"
              color="text-blue-400"
              bg="group-hover:bg-blue-500/10"
              border="group-hover:border-blue-500/20"
            />
            <ContactCard 
              icon={MapPin} 
              title="Location" 
              value="Maharagama, Sri Lanka" 
              href="https://goo.gl/maps/YOUR_LINK_HERE" // Updated link format
              color="text-emerald-400"
              bg="group-hover:bg-emerald-500/10"
              border="group-hover:border-emerald-500/20"
            />
          </div>

          {/* Right Side: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* RESPONSIVE FIX: Padding p-6 for mobile, p-8 for desktop */}
            <div className="p-6 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-600 text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-600 resize-none text-sm md:text-base"
                    placeholder="How can I help you?"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, value, href, color, bg, border }: any) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 5 }}
      // RESPONSIVE FIX: flex-col on very small screens, row on others if needed, but flex-row usually works with min-w-0
      className={`flex items-start md:items-center gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 group ${bg} ${border}`}
    >
      <div className={`shrink-0 p-3 rounded-xl bg-white/5 border border-white/5 ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={24} />
      </div>
      
      {/* RESPONSIVE FIX: min-w-0 ensures text truncates/wraps properly on small screens */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-0.5">{title}</p>
        {/* break-all helps long emails wrap on tiny screens */}
        <p className="text-white font-medium group-hover:text-white transition-colors break-all md:break-normal">
          {value}
        </p>
      </div>
      
      <ArrowRight size={16} className="shrink-0 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden sm:block" />
    </motion.a>
  )
}