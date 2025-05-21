import React from 'react';
import { Monitor, Smartphone, Award, Code, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Briefcase size={24} />, value: '7', label: 'Years Experience' },
    { icon: <Code size={24} />, value: '60+', label: 'Projects Completed' },
    { icon: <Monitor size={24} />, value: '15+', label: 'Web Technologies' },
    { icon: <Smartphone size={24} />, value: '5+', label: 'Mobile Frameworks' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Senior Full Stack Developer & Blockchain Specialist
            </h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                I'm a Senior Full Stack Developer with 7 years of experience in web and mobile development, 
                including extensive expertise in blockchain technology. My career has been focused on building 
                scalable, high-performance applications and leading development teams to success.
              </p>
              <p>
                Currently at Kevesta, I'm working on cutting-edge cloud development environments and 
                real-time collaboration features. My experience spans modern web technologies, cloud 
                infrastructure, and blockchain platforms, allowing me to deliver comprehensive solutions 
                that meet complex business needs.
              </p>
              <p>
                I specialize in React, TypeScript, and Node.js for web development, and have extensive 
                experience with blockchain technologies including Solidity, Rust, and Web3.js. My work 
                in the blockchain space includes developing NFT marketplaces, P2E games, and DeFi applications.
              </p>
              <p>
                My approach combines technical expertise with strong project management skills, ensuring 
                delivery of high-quality solutions that drive business value while maintaining code quality 
                and performance standards.
              </p>
            </div>
            <div className="mt-8 flex items-center">
              <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h4 className="font-semibold">Bachelor's degree, Computer Science</h4>
                <p className="text-slate-700 dark:text-slate-300">The University of Electro-Communications, 2018</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</h3>
                  <p className="text-slate-700 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                Professional Principles
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Technical excellence and innovation in solution design</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Agile methodology and efficient project management</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Comprehensive testing and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Performance optimization and scalable architecture</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Effective team leadership and mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;