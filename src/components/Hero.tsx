import React, { useState, useEffect } from 'react';
import { ChevronDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative z-10">
              <div className="mb-4 inline-block">
                <div className="text-sm font-semibold px-4 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full">
                  Hello, I'm
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
                Juri Miyazawa
              </h1>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-blue-600 dark:text-blue-400 ${!isTypingComplete ? 'typing-cursor' : ''}`}>
                {text}
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
                With 7 years of experience in web and mobile development, 
                I specialize in creating robust, scalable applications with
                cutting-edge technologies including React, Node.js, and Blockchain.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  Contact Me
                </a>
                <a href="#projects" className="btn-secondary">
                  View My Work
                </a>
              </div>
              <div className="flex mt-8 space-x-6">
                <a 
                  href="https://github.com/kevesta-777/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <GitHub size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/juri-miyazawa-82129335a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:elitesniper1201@gmail.com"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 absolute blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative z-10 floating-animation">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full flex items-center justify-center p-1">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="@/src/profile.jpg" 
                      alt="Juri Miyazawa"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-slate-700 dark:text-slate-300">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;