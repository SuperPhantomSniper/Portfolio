import React, { useState } from 'react';
import { Github, Code, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'blockchain', label: 'Blockchain' }
  ];
  
  const projects: Project[] = [
    {
      id: 'nft-marketplace',
      title: 'NFT Marketplace',
      description: 'A fully functional NFT marketplace for MetaverseMe game avatars with crypto and fiat payment methods.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'TypeScript', 'Solidity', 'Web3.js', 'Ethereum', 'Node.js'],
      category: ['web', 'blockchain'],
      link: '#',
      github: '#'
    },
    {
      id: 'hotel-booking',
      title: 'Hotel Booking Platform',
      description: 'A comprehensive hotel booking system that integrates with multiple booking providers.',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Golang', 'React', 'PostgreSQL', 'Docker', 'Redis'],
      category: ['web'],
      link: '#'
    },
    {
      id: 'p2e-game',
      title: 'P2E Golf Game',
      description: 'A Play-to-Earn golf game with smart contracts for in-game rewards and transactions.',
      image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Solidity', 'Flow Network', 'Node.js', 'React'],
      category: ['web', 'blockchain', 'game'],
      github: '#'
    },
    {
      id: 'payment-service',
      title: 'Blockchain Payment Service',
      description: 'A secure payment and money transfer service built on IBM Hyperledger Fabric.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Hyperledger Fabric', 'Node.js', 'Express.js', 'IBM Cloud'],
      category: ['web', 'blockchain'],
      link: '#'
    },
    {
      id: 'hiring-platform',
      title: 'Job Hiring Platform',
      description: 'A comprehensive platform for job posting, application tracking, and candidate management.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Angular', 'Golang', 'PostgreSQL', 'Docker'],
      category: ['web'],
      link: '#'
    },
    {
      id: 'webAR-project',
      title: 'WebAR Experience',
      description: 'An immersive web-based augmented reality experience built with Next.js and Feathers.',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'Feathers.js', 'WebAR', 'Three.js', 'PostgreSQL'],
      category: ['web', 'mobile'],
      github: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 m-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === cat.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="card group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
                <p className="mb-4 text-slate-700 dark:text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="skill-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="skill-badge">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary mx-auto inline-flex">
            <Code size={18} className="mr-2" />
            Interested in working together?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;