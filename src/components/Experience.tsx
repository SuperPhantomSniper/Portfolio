import React, { useState } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  
  const toggleJob = (id: string) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };
  
  const jobs: Job[] = [
    {
      id: 'kevesta',
      company: 'Kevesta',
      position: 'Mobile Development Lead',
      period: 'Mar 2025 - Present',
      location: 'Remote',
      description: 'Leading mobile platform development for flight and hotel booking, ensuring seamless user experience across iOS and Android.',
      responsibilities: [
        'Led end-to-end architecture, development, and deployment of Kevesta\'s mobile platform',
        'Built scalable, high-performance mobile applications using React Native',
        'Reduced time-to-market by 30% through effective collaboration with product and design teams',
        'Implemented real-time features for dynamic pricing and booking confirmations',
        'Established modular component architecture for future scalability',
        'Achieved 40% reduction in release cycle times through CI/CD optimization'
      ],
      technologies: ['React Native', 'TypeScript', 'Redux', 'Node.js', 'RESTful APIs', 'Firebase', 'Fastlane', 'Bitrise']
    },
    {
      id: 'rotationsplus',
      company: 'RotationsPlus',
      position: 'Senior Full Stack Developer',
      period: 'Nov 2022 – Nov 2024',
      location: 'Remote',
      description: 'Developed high-performance customer-facing web applications using modern technologies.',
      responsibilities: [
        'Developed high performance customer facing web application using ReactJS and Redux-saga',
        'Maintained high-level expertise in React state management strategies',
        'Developed custom API layer with JWT token management',
        'Integrated AWS services for server-side and client-side code',
        'Created Docker containers and implemented RESTful Web Services'
      ],
      technologies: ['React', 'Redux-saga', 'React Hooks', 'JavaScript', 'AWS', 'Docker', 'Strapi']
    },
    {
      id: 'metaverseme',
      company: 'MetaverseMe Limited',
      position: 'Senior Blockchain Developer & Advisor',
      period: 'Feb 2022 – Oct 2022',
      location: 'Remote',
      description: 'Built NFT marketplace for game avatars with crypto and fiat payment integration.',
      responsibilities: [
        'Built NFT marketplace for creating and minting game avatar collections',
        'Implemented dual payment methods supporting both crypto and fiat',
        'Developed smart contracts for multiple chains (EVM and Solana)',
        'Optimized gas fees and transaction processing'
      ],
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Solana', 'Smart Contracts']
    },
    {
      id: 'blockletegames',
      company: 'BlockleteGames',
      position: 'Senior Blockchain Developer & Advisor',
      period: 'Mar 2020 – Dec 2021',
      location: 'Part-time / Remote',
      description: 'Created smart contracts for P2E golf game and migrated from Ethereum to Flow network.',
      responsibilities: [
        'Developed smart contracts for P2E golf game',
        'Implemented business logic using Node.js and Solidity',
        'Led migration from Ethereum to Flow network',
        'Created comprehensive test cases for workflow validation'
      ],
      technologies: ['Blockchain', 'Solidity', 'Node.js', 'Flow Network', 'Smart Contracts', 'Testing']
    },
    {
      id: 'clarusrd',
      company: 'Clarus R+D',
      position: 'Full-Stack Engineer',
      period: 'Apr 2020 – Oct 2021',
      location: 'Contract / Remote',
      description: 'Built various web projects including entertainment services and employee systems.',
      responsibilities: [
        'Developed TypeScript and Nest.js based entertainment service',
        'Created WebAR project using Next.js and Feather.js',
        'Built employee cooperation system using Ruby on Rails',
        'Implemented Shopify-based e-commerce systems',
        'Developed job hiring platform using Angular and Golang'
      ],
      technologies: ['TypeScript', 'Nest.js', 'Next.js', 'Ruby on Rails', 'Angular', 'Golang', 'PostgreSQL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12">
          <div className="relative space-y-8">
            {jobs.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index === jobs.length - 1 ? 'border-l-0' : ''}`}>
                <div className="timeline-date">{job.period}</div>
                <div
                  className="card p-6 cursor-pointer transition-all duration-300"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{job.position}</h3>
                      <h4 className="text-lg font-medium flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {job.company} 
                        <span className="text-sm ml-2 text-slate-500 dark:text-slate-400">({job.location})</span>
                      </h4>
                    </div>
                    <button
                      className={`w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center transition-transform duration-300 ${
                        expandedJob === job.id ? 'rotate-180' : ''
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{job.description}</p>
                  
                  <div
                    className={`mt-4 overflow-hidden transition-all duration-300 ${
                      expandedJob === job.id ? 'max-h-[1000px]' : 'max-h-0'
                    }`}
                  >
                    <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-700 dark:text-slate-300">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    
                    <h5 className="font-medium mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/juri-miyazawa-resume.pdf"
            download
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            <span>Download Full Resume</span>
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;