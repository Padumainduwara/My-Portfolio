"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Download, Mail, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#hosted-projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Padumainduwara", color: "hover:text-purple-400 hover:border-purple-500/30" },
  { icon: Linkedin, href: "https://linkedin.com/in/padumainduwara", color: "hover:text-cyan-400 hover:border-cyan-500/30" },
  { icon: Facebook, href: "https://facebook.com/padumainduwara", color: "hover:text-blue-400 hover:border-blue-500/30" },
];

// Next-Level Premium Services Array
const premiumServices = [
  "Web Architecture",
  "UI/UX & Interaction",
  "3D Immersive Web",
  "SaaS Development",
  "Performance Optimization"
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-12 z-10 bg-transparent overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[8%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] opacity-70 animate-pulse" />
        <div className="absolute bottom-0 right-[8%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Premium Ultra-Thin Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

        {/* FIXED: Responsive Horizontal 5-Services Bar (Visible on Laptops & Desktops) */}
        <div className="hidden md:flex flex-wrap items-center justify-between w-full py-5 border-b border-white/[0.04] mb-12 select-none gap-4">
          {premiumServices.map((service, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-default">
              <span className="font-mono text-[10px] text-purple-500/60 group-hover:text-cyan-400 transition-colors duration-300">
                // 0{index + 1}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 group-hover:text-white transition-colors duration-300">
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-12 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col items-start text-left gap-4">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 text-white font-bold text-sm shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 tracking-wider">PI</span>
                <div className="absolute inset-0 border border-white/20 rounded-full w-full h-full animate-[spin_10s_linear_infinite]" />
              </div>
              <span className="text-base font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                Paduma<span className="text-purple-500">.Dev</span>
              </span>
            </Link>
            <p className="text-gray-400 text-[13px] font-light leading-relaxed max-w-[260px]">
              Engineering high-performance digital experiences with scalable architectures and seamless interactive interfaces.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col items-start text-left gap-4 lg:pl-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-[13px] text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group/link"
                  >
                    <span className="font-light">{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all duration-300 text-purple-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="flex flex-col items-start text-left gap-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">Connect</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:info@padumainduwara.me" className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-cyan-400 transition-colors group">
                  <Mail size={13} className="text-purple-500/80 group-hover:text-cyan-400 transition-colors duration-300" />
                  <span className="font-light truncate max-w-[220px] sm:max-w-none">info@padumainduwara.me</span>
                </a>
              </li>
              <li>
                <a href="tel:+94724113376" className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-purple-400 transition-colors group">
                  <Phone size={13} className="text-cyan-400/80 group-hover:text-purple-400 transition-colors duration-300" />
                  <span className="font-light">+94 72 411 3376</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Premium Interactive CV Card */}
          <div className="flex flex-col items-start text-left gap-4 w-full">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">Curriculum Vitae</h4>
            <div className="relative p-[1px] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.05] group/cvcard w-full max-w-[240px] sm:max-w-none hover:border-purple-500/30 transition-all duration-500">
              <div className="bg-[#050508]/40 backdrop-blur-xl p-4 rounded-[15px] flex flex-col gap-3.5 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-purple-500/10 rounded-full blur-xl group-hover/cvcard:bg-purple-500/20 transition-colors duration-500" />
                <p className="text-[12px] text-gray-400 font-light leading-snug">
                  Review my detailed professional timeline and engineering matrix.
                </p>
                <a 
                  href="/Induwara.pdf" 
                  download="Paduma_Induwara_CV.pdf"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-xs shadow-[0_4px_20px_rgba(168,85,247,0.15)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 w-full group/btn"
                >
                  <Download size={12} className="group-hover/btn:translate-y-0.5 transition-transform duration-300" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Segment */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          
          {/* Left: Clean Minimal Copyright */}
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Paduma Induwara. All rights reserved.
          </p>

          {/* Center/Right Social Handles */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, sIdx) => (
              <a 
                key={sIdx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-1 shadow-sm ${social.color}`}
              >
                <social.icon size={13} />
              </a>
            ))}
          </div>

          {/* Right: High-End Live Status */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 bg-white/[0.02] border border-white/[0.05] px-3 py-1 rounded-full backdrop-blur-sm select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400">Available for Projects</span>
          </div>

        </div>

      </div>
    </footer>
  );
}