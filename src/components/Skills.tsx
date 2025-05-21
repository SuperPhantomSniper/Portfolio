import React, { useState } from 'react';
import { Code, Server, Database, Layout, Globe, Lock, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All', icon: <Globe size={18} /> },
    { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout size={18} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={18} /> },
    { id: 'database', label: 'Database', icon: <Database size={18} /> },
    { id: 'blockchain', label: 'Blockchain', icon: <Lock size={18} /> }
  ];
  
  const skills = {
    languages: [
      'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'PHP', 'C/C++', 'C#', 'Python', 'Java', 'Golang', 'Rust'
    ],
    frontend: [
      'React.js', 'Redux', 'Redux-saga', 'Angular', 'Vue.js', 'Vuex', 'Next.js', 'React Native', 'Flutter', 'Bootstrap', 'Tailwind CSS', 'SASS'
    ],
    backend: [
      'Node.js', 'Express.js', 'Nest.js', 'Golang', 'Laravel', 'Django', 'Strapi', 'GraphQL', 'REST API', 'Microservices'
    ],
    database: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase', 'Redis'
    ],
    mobile: [
      'React Native', 'Flutter', 'Objective-C', 'Kotlin', 'Swift'
    ],
    blockchain: [
      'Solidity', 'Web3.js', 'Ethers.js', 'Rust', 'Solana Program', 'Anchor', 'Metaplex', 'SPL', 'Candy Machine', 'XRP'
    ],
    tools: [
      'Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Heroku', 'CI/CD', 'Jenkins', 'Jira', 'Figma', 'Fastlane', 'Bitrise'
    ]
  };
  
  const getVisibleSkills = () => {
    if (activeTab === 'all') {
      return Object.values(skills).flat();
    }
    return skills[activeTab as keyof typeof skills] || [];
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center px-4 py-2 m-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === cat.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {getVisibleSkills().map((skill, index) => (
            <div 
              key={index} 
              className="skill-badge"
            >
              {skill}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="card p-6">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Layout size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Expert in creating responsive, modern interfaces with React, Vue, and Angular. 
              Specializing in state management and high-performance UIs.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">Redux</span>
              <span className="skill-badge">Vue.js</span>
              <span className="skill-badge">Next.js</span>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Smartphone size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Leading mobile app development with React Native and Flutter, creating 
              seamless cross-platform experiences with native performance.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="skill-badge">React Native</span>
              <span className="skill-badge">Flutter</span>
              <span className="skill-badge">iOS</span>
              <span className="skill-badge">Android</span>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Server size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Backend Development</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Building scalable server-side applications with Node.js, Golang, and 
              modern microservices architecture.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Golang</span>
              <span className="skill-badge">Nest.js</span>
              <span className="skill-badge">Microservices</span>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Lock size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Blockchain Development</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Expert in blockchain development, creating smart contracts and DApps 
              for various chains including Ethereum and Solana.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="skill-badge">Solidity</span>
              <span className="skill-badge">Web3.js</span>
              <span className="skill-badge">Solana</span>
              <span className="skill-badge">Rust</span>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Database size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Database Management</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Designing and optimizing database solutions with SQL and NoSQL databases,
              ensuring high performance and scalability.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Redis</span>
              <span className="skill-badge">Firebase</span>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">DevOps & Cloud</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Implementing robust CI/CD pipelines and cloud infrastructure for 
              seamless deployment and scaling.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="skill-badge">Docker</span>
              <span className="skill-badge">Kubernetes</span>
              <span className="skill-badge">AWS</span>
              <span className="skill-badge">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;