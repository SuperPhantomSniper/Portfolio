import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#home" className="font-bold text-xl text-blue-600 dark:text-blue-400">
              Juri<span className="text-orange-500">.dev</span>
            </a>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="rounded-md p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="/juri-miyazawa-resume.pdf" 
              className="btn-secondary"
              download
            >
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-white dark:bg-slate-900 z-50 overflow-auto`}>
        <div className="flex items-center justify-between p-4 border-b dark:border-slate-700">
          <a href="#home" className="font-bold text-xl text-blue-600 dark:text-blue-400">
            Juri<span className="text-orange-500">.dev</span>
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="rounded-md p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-lg py-2 ${activeSection === link.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/juri-miyazawa-resume.pdf" 
              className="flex items-center text-lg py-2 text-slate-700 dark:text-slate-300"
              download
              onClick={closeMenu}
            >
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;