"use client"; // <--- THIS LINE FIXES THE ERROR

import { Github, Linkedin, Mail, Phone, MapPin, Facebook, Download } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">PI.</h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            Crafting world-class digital experiences from Maharagama, Sri Lanka. 
            Let's build something amazing together.
          </p>
          <GlowButton href="/Induwara.pdf" download icon={Download}>
            Download CV
          </GlowButton>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-xl">Contact Info</h4>
          <ul className="space-y-4 text-gray-500">
            <li className="flex items-center gap-4 hover:text-white transition-colors">
              <Phone size={20} className="text-purple-500" /> 
              <span>072 411 3376</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors">
              <Mail size={20} className="text-purple-500" />
              <span>induwarapaduma2002@gmail.com</span>
            </li>
            <li className="flex items-center gap-4">
              <MapPin size={20} className="text-purple-500" />
              <span>131/1 3rd Lane, Maharagama</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-xl">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/Padumainduwara" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all border border-white/10">
              <Github size={24} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-white/10">
              <Linkedin size={24} />
            </a>
            <a href="https://facebook.com/padumainduwara" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all border border-white/10">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-700 text-sm border-t border-white/5 pt-8">
        © {new Date().getFullYear()} Paduma Induwara. All rights reserved.
      </div>
    </footer>
  );
}