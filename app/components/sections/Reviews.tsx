"use client";
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "Sanjeiwa Rathnayake",
    role: "CEO, Fitlines Wellness",
    text: "Paduma is an exceptional developer who delivered our project on time with amazing quality. His understanding of both software and wellness needs was impressive."
  },
  {
    name: "Sandani Hettiarachchi",
    role: "Senior ICT Teacher",
    text: "His technical skills in software engineering and data science are truly impressive. A very dedicated and talented individual."
  }
];

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Modern Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
  <Star size={14} className="text-purple-400" />
  <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Academic History</span>
</div>
          {/* "My Services" - Big Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             What people say about my work.
          </p>
        </motion.div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              {/* Card Container - Padding reduced to p-6/p-8 to make it smaller */}
              <div className="h-full p-6 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden flex flex-col">
                
                {/* Background Glow Effect */}
                <div className="absolute -top-20 -right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500" />

                {/* Quote Icon - Placed in flow (Not absolute) to prevent overlap */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    <Quote size={20} fill="currentColor" className="opacity-80" />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-6 relative z-10 flex-grow">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-bold text-white text-base shadow-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-purple-300 transition-colors">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-[10px] md:text-xs font-mono uppercase tracking-wider">
                      {review.role}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/30 transition-all flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left cursor-pointer group">
            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-yellow-400 transition-colors">
              <Star size={20} />
            </div>
            <div>
              <h4 className="text-white font-bold text-base group-hover:text-purple-300 transition-colors">Your Review Here?</h4>
              <p className="text-xs text-gray-500">Let's work together and create something amazing.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}