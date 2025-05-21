import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="font-bold text-xl text-blue-400">
              Juri<span className="text-orange-500">.dev</span>
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            <a href="#home" className="hover:text-blue-400 transition-colors duration-300 py-1">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300 py-1">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors duration-300 py-1">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors duration-300 py-1">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors duration-300 py-1">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 py-1">Contact</a>
          </nav>
          
          <div className="text-sm text-slate-400 flex items-center">
            <span>© {currentYear} Juri Miyazawa. All rights reserved.</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;