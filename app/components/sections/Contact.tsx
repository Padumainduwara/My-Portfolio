"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  // Form handling state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const ACCESS_KEY = "30f0cbd7-5574-4500-b2c8-50b8291f855f"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Message from Portfolio: ${formState.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' }); 
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative z-10 w-full">
       
      {/* Background Elements - Visual Experience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <MessageSquare size={12} className="text-purple-400" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Together</span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto text-[13px] md:text-sm font-light leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        {/* Main Grid Layout - Balanced max-width for cuteness */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-start">
          
          {/* Left Side: Contact Info Cards (Darker Version) */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            <ContactCard 
              icon={Phone} 
              title="Call Me" 
              value="+94 72 411 3376" 
              href="tel:+94724113376"
              color="text-purple-400"
              glow="group-hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
              border="group-hover:border-purple-500/20"
            />
            <ContactCard 
              icon={Mail} 
              title="Email Me" 
              value="info@padumainduwara.me" 
              href="mailto:info@padumainduwara.me"
              color="text-cyan-400"
              glow="group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
              border="group-hover:border-cyan-500/20"
            />
            <ContactCard 
              icon={MapPin} 
              title="Location" 
              value="Maharagama, Sri Lanka" 
              href="https://goo.gl/maps/YOUR_LINK_HERE" 
              color="text-emerald-400"
              glow="group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
              border="group-hover:border-emerald-500/20"
            />
          </div>

          {/* Right Side: Next-Level Form */}
<motion.div 
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6 }}
  className="lg:col-span-3"
>
            <div className="p-6 md:p-8 rounded-[32px] bg-gradient-to-br from-[#050505]/90 to-[#050505]/40 backdrop-blur-2xl border border-white/[0.05] relative overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              
              {/* Soft Inner Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4 md:space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] md:text-[11px] font-mono tracking-widest text-gray-400 ml-2 uppercase">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-5 py-3 md:py-3.5 rounded-[20px] bg-white/[0.02] border border-white/[0.05] text-white focus:border-purple-500/40 focus:bg-white/[0.04] focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 text-[13px] md:text-sm shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] md:text-[11px] font-mono tracking-widest text-gray-400 ml-2 uppercase">Your Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-5 py-3 md:py-3.5 rounded-[20px] bg-white/[0.02] border border-white/[0.05] text-white focus:border-cyan-500/40 focus:bg-white/[0.04] focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-gray-600 text-[13px] md:text-sm shadow-inner"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] md:text-[11px] font-mono tracking-widest text-gray-400 ml-2 uppercase">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-5 py-4 rounded-[24px] bg-white/[0.02] border border-white/[0.05] text-white focus:border-purple-500/40 focus:bg-white/[0.04] focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 resize-none text-[13px] md:text-sm shadow-inner"
                    placeholder="Tell me about your project."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="p-3.5 rounded-[16px] bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] md:text-xs flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={14} />
                    <span>Message sent successfully! I'll be in touch.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="p-3.5 rounded-[16px] bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] md:text-xs flex items-center justify-center gap-2"
                  >
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 md:py-4 rounded-[20px] font-bold text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn text-[13px] md:text-sm relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10 tracking-wide">Send Message</span>
                      <Send size={14} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:opacity-0 transition-all duration-300" />
                      <Send size={14} className="absolute z-10 -translate-x-4 translate-y-4 opacity-0 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0 group-hover/btn:opacity-100 transition-all duration-300" />
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

// Optimized Premium Contact Card Component
function ContactCard({ icon: Icon, title, value, href, color, glow, border }: any) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      // Light glass background instead of black
      className={`flex items-center gap-4 p-4 md:p-5 rounded-[24px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] transition-all duration-300 group hover:bg-white/[0.08] hover:border-white/[0.15] ${glow}`}
    >
      {/* Icon box made brighter */}
      <div className={`shrink-0 p-3 rounded-[16px] bg-white/[0.05] border border-white/[0.1] ${color} group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-white/[0.1]`}>
        <Icon size={18} className="md:w-5 md:h-5 drop-shadow-md" strokeWidth={1.5} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-[9px] md:text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-1">{title}</p>
        <p className="text-[13px] md:text-[15px] font-bold text-gray-200 group-hover:text-white transition-colors truncate tracking-tight">
          {value}
        </p>
      </div>
      
      {/* Arrow button made brighter */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/[0.05] group-hover:bg-white/[0.1] transition-all duration-300 mr-1 hidden sm:flex">
        <ArrowRight size={12} className="text-gray-300 group-hover:text-white transition-colors" />
      </div>
    </motion.a>
  )
}