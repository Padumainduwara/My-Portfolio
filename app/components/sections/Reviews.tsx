"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, MessageSquare } from 'lucide-react'; // Star import eka ayin kara mokada eka dan use wenne nathi nisa

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
  },
  {
    name: "Kasun Perera",
    role: "Project Manager, TechLK",
    text: "Working with Paduma was a breeze. He translated our complex requirements into a sleek, functional web application flawlessly."
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    text: "The digital marketing strategies and web optimization Paduma implemented doubled our online conversions in just two months!"
  },
  {
    name: "Malith Jayasinghe",
    role: "Founder, EduTech",
    text: "A true professional. His expertise in React and full-stack development gave our educational platform the performance boost it needed."
  },
  {
    name: "Natasha Fernando",
    role: "Creative Director",
    text: "I highly recommend him! Paduma has a rare eye for both beautiful UI design and robust backend architecture."
  },
  {
    name: "Ryan Morrison",
    role: "Operations Head",
    text: "He automated our workflows using AI integration perfectly. We're saving hours of manual data entry every single day."
  },
  {
    name: "Kavindi Silva",
    role: "Lead Designer",
    text: "Collaborating with him was a great experience. He brought my Figma designs to life exactly pixel-by-pixel with smooth animations."
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive items logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(4); // Desktop: 4 items
      else if (window.innerWidth >= 768) setItemsPerPage(2); // Tablet: 2 items
      else setItemsPerPage(1); // Mobile: 1 item
    };
    
    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  // Auto Slider Logic
  useEffect(() => {
    if (isHovered) return; // Pause slide on hover
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [maxIndex, isHovered]);

  return (
    <section id="reviews" className="py-20 md:py-24 relative z-10">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-cyan-700/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        
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
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase">Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-5 tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Stories</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
             What people say about my work.
          </p>
        </motion.div>
        
        {/* --- REVIEWS SLIDER --- */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <motion.div 
            className="flex -mx-3"
            animate={{ x: `calc(-${currentIndex} * (100% / ${itemsPerPage}))` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          >
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
              >
                <div className="h-full p-5 md:p-6 rounded-[20px] md:rounded-[24px] bg-[#050505]/90 border border-white/5 hover:border-white/15 backdrop-blur-xl hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col group">
                  
                  {/* Background Inner Glow Effect */}
                  <div className="absolute -top-20 -right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-colors duration-500 pointer-events-none" />

                  {/* Quote Icon */}
                  <div className="mb-4 md:mb-5">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] md:rounded-xl bg-white/5 flex items-center justify-center text-purple-400 border border-white/5 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-300 shadow-inner">
                      <Quote size={16} fill="currentColor" className="opacity-80 md:w-5 md:h-5" />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed italic mb-6 relative z-10 flex-grow group-hover:text-gray-300 transition-colors">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3.5 pt-4 md:pt-5 border-t border-white/5">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-[13px] md:text-sm shadow-lg shrink-0">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[13px] md:text-[15px] tracking-tight group-hover:text-cyan-300 transition-colors mb-0.5">
                        {review.name}
                      </h4>
                      <p className="text-gray-500 text-[9px] md:text-[10px] font-mono uppercase tracking-widest">
                        {review.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- MODERN DOTS & PILL PAGINATION --- */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === idx 
                  ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}