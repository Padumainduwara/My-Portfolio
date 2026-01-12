"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Github, Linkedin, Facebook } from "lucide-react"; // Updated Icons
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-between px-6 py-2.5 transition-all duration-500 rounded-full backdrop-blur-xl border ${
            isScrolled
              ? "w-[90%] md:w-[70%] lg:w-[60%] bg-[#030014]/70 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
              : "w-[95%] md:w-[85%] bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 text-white font-bold text-lg shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">PI</span>
              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-full w-full h-full animate-[spin_8s_linear_infinite]" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight hidden sm:block group-hover:text-purple-200 transition-colors">
              Paduma<span className="text-purple-500">.Dev</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all rounded-full hover:bg-white/10 relative group"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* NEW "Contact Me" Button (Professional Style) */}
          <div className="flex items-center gap-4">
            <Link 
              href="#contact"
              className="hidden md:flex relative items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-sm overflow-hidden shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 group"
            >
              {/* Button Content */}
              <span className="relative z-10">Let's Talk</span>
              {/* Changed Icon to ArrowRight for Professional Look */}
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine Animation Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu (Updated with Social Icons) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-[#020010]/95 md:hidden flex flex-col items-center justify-center overflow-y-auto"
          >
            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col gap-8 text-center w-full px-6 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-bold text-white/80 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
                >
                  Let's Talk <ArrowRight size={28} className="text-cyan-400" />
              </motion.a>

              {/* Social Icons Section (Restored) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-6 justify-center mt-8 pt-8 border-t border-white/10"
              >
                <a href="https://github.com/Padumainduwara" target="_blank" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-purple-600/50 transition-all border border-white/5">
                    <Github size={24} />
                </a>
                <a href="#" target="_blank" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-600/50 transition-all border border-white/5">
                    <Linkedin size={24} />
                </a>
                <a href="https://facebook.com/padumainduwara" target="_blank" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/50 transition-all border border-white/5">
                    <Facebook size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}