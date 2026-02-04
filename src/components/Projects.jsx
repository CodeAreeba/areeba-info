import React from 'react';
import SectionReveal from './SectionReveal';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HR Management System',
      description: 'A streamlined HRMS for tracking employee attendance, payroll, and administrative tasks with a focus on performance and reliability.',
      category: 'Business',
      technologies: ['React', 'Express', 'MongoDB', 'MUI'],
      role: 'Fullstack Developer',
      image: 'https://images.unsplash.com/photo-1454165833762-010342775b3b?w=800&h=600&fit=crop',
      github: '#',
      demo: 'https://hr.ztesting.site'
    },
    {
      id: 2,
      title: 'POS Billing System',
      description: 'A high-speed Point of Sale system designed for efficient transaction management, inventory tracking, and sales reporting.',
      category: 'Business',
      technologies: ['React', 'Express', 'MongoDB', 'MUI'],
      role: 'Fullstack Developer (Team Work)',
      image: 'https://images.unsplash.com/photo-1556742049-13da7336b57e?w=800&h=600&fit=crop',
      github: '#',
      demo: 'https://pos.ztesting.site'
    },
    {
      id: 3,
      title: 'Digital Aura',
      description: 'Contributed as a Front-end Developer, building high-performance web interfaces using React and custom CSS, along with seamless API integration.',
      category: 'Business',
      technologies: ['React', 'Custom CSS', 'API Integration'],
      role: 'Front-end Developer',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: '#',
      demo: 'https://digitalaura.se'
    },
    {
      id: 4,
      title: 'Shoeman',
      description: 'A comprehensive e-commerce platform for a shoe brand, featuring both a user-facing web interface and a robust admin panel for management.',
      category: 'Business',
      technologies: ['Vite', 'Custom CSS', 'API Integration'],
      role: 'Front-end Developer',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
      github: '#',
      demo: 'https://ztesting.site'
    }
  ];

  return (
    <section id="projects" className="w-full py-20 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionReveal width="100%">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Projects
          </h2>
        </SectionReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.1} width="100%">
              <div className="relative group">
                {/* Editor-Style Card */}
                <div className="bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden transition-all duration-500 hover:border-[#00D1B2]/30 hover:shadow-[#00D1B2]/5">
                  
                  {/* Window Bar */}
                  <div className="bg-[#161b22] px-4 py-3 flex items-center border-b border-gray-800 relative">
                    <div className="flex gap-1.5 absolute left-4">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="w-full text-center text-[10px] md:text-xs font-mono text-[#00D1B2] uppercase tracking-widest font-bold">
                      {project.title}
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-xs md:text-sm leading-relaxed">
                    <div className="mb-4">
                      <span className="text-[#d946ef]">const</span> <span className="text-[#00D1B2]">project</span> <span className="text-[#8b5cf6]">=</span> {'{'}
                    </div>
                    
                    <div className="pl-4 space-y-1">
                      <div><span className="text-gray-400">name:</span> <span className="text-[#eab308]">'{project.title}'</span>,</div>
                      <div>
                        <span className="text-gray-400">tools:</span> [
                        {project.technologies.map((tech, i) => (
                          <span key={tech}>
                            <span className="text-[#eab308]"> '{tech}'</span>
                            {i < project.technologies.length - 1 ? <span className="text-gray-400">,</span> : ''}
                          </span>
                        ))}
                        ],
                      </div>
                      <div><span className="text-gray-400">myRole:</span> <span className="text-[#eab308]">'{project.role}'</span>,</div>
                      <div className="flex">
                        <span className="text-gray-400 shrink-0">Description:</span> 
                        <span className="text-blue-400 ml-2">'{project.description}'</span>,
                      </div>
                    </div>
                    
                    <div className="mt-4">{'}'};</div>

                    {/* Action Links */}
                    <div className="mt-8 flex gap-4">
                      <a 
                        href={project.github}
                        className="flex-1 py-3 border border-gray-700 hover:border-[#00D1B2] text-xs font-bold text-center text-gray-400 hover:text-white rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57"/></svg>
                        SOURCE
                      </a>
                      <a 
                        href={project.demo}
                        className="flex-1 py-3 bg-gradient-to-r from-[#00D1B2] to-[#8b5cf6] text-xs font-bold text-center text-white rounded-lg transition-all shadow-lg shadow-[#00D1B2]/10 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                      >
                        VIEW LIVE <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#00D1B2]/10 to-[#d946ef]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
