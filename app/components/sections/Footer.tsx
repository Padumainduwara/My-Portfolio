"use client";

import { Github, Linkedin, Facebook, Download, ChevronUp } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#020010] pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 text-white font-bold text-lg shadow-lg">
                PI
                <div className="absolute inset-0 border-2 border-white/20 rounded-full w-full h-full animate-[spin_10s_linear_infinite]" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Paduma<span className="text-purple-400">.Dev</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Crafting world-class digital experiences from Maharagama, Sri Lanka. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/Padumainduwara" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="https://facebook.com/padumainduwara" icon={Facebook} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#hero" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Action */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Resume</h4>
            <p className="text-gray-500 text-sm mb-6">
              Download my CV to see my full professional background and skills.
            </p>
            <GlowButton href="/Induwara.pdf" download icon={Download}>
              Download CV
            </GlowButton>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Paduma Induwara. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
          >
            Back to Top
            <div className="p-1 rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
              <ChevronUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
    >
      <Icon size={18} />
    </a>
  );
}