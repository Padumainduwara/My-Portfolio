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
          subject: `New Message from Portfolio: ${formState.name}`, // Email Subject
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' }); // Clear form
        // Auto hide success message after 5 seconds
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
    // RESPONSIVE UPDATE: Padding optimized for all screens (Mobile: py-16, Desktop: py-24)
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-[#020010]">
      
      {/* Background Elements - Visual Experience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
            <MessageSquare size={14} className="text-purple-400" />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed px-4">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        {/* Main Grid Layout - Responsive: Stack on mobile, Side-by-side on LG screens */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
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
              href="https://goo.gl/maps/YOUR_LINK_HERE" 
              color="text-emerald-400"
              bg="group-hover:bg-emerald-500/10"
              border="group-hover:border-emerald-500/20"
            />
          </div>

          {/* Right Side: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
              
              {/* Form Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                {/* Name & Email Row - Stack on Mobile, Row on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
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
                  <div className="flex flex-col gap-2">
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

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-600 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-2"
                  >
                    <CheckCircle size={16} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2"
                  >
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn text-sm md:text-base relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
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

// Optimized Contact Card Component
function ContactCard({ icon: Icon, title, value, href, color, bg, border }: any) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
      className={`flex items-center gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 group ${bg} ${border}`}
    >
      <div className={`shrink-0 p-3 rounded-xl bg-white/5 border border-white/5 ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={24} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-0.5">{title}</p>
        <p className="text-white font-medium group-hover:text-white transition-colors truncate">
          {value}
        </p>
      </div>
      
      <ArrowRight size={16} className="shrink-0 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden sm:block" />
    </motion.a>
  )
}