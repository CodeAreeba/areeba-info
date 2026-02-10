import React, { useState } from 'react';
import SectionReveal from './SectionReveal';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Shoeman',
      description: 'A comprehensive e-commerce platform for a shoe brand, featuring both a user-facing web interface and a robust admin panel for management.',
      category: 'Business',
      technologies: ['Vite', 'Custom CSS', 'API Integration'],
      role: 'Front-end Developer',
      image: '/shoeman.png',
      github: 'https://github.com/CodeAreeba/shoeman',
      demo: 'https://ztesting.site',
      status: 'Live',
      features: [
        'Built responsive user interface with Vite and custom CSS',
        'Developed comprehensive admin panel for inventory management',
        'Integrated RESTful APIs for seamless data flow',
        'Implemented product catalog with advanced filtering'
      ]
    },
    {
      id: 2,
      title: 'HR Management System',
      description: 'A streamlined HRMS for tracking employee attendance, payroll, and administrative tasks with a focus on performance and reliability.',
      category: 'Business',
      technologies: ['React', 'Express', 'MongoDB', 'MUI'],
      role: 'MERN Stack Developer',
      image: '/hrweb.png',
      github: 'https://github.com/theusmansarwar/HR',
      demo: 'https://hr.ztesting.site',
      status: 'Live',
      features: [
        'Employee attendance tracking with real-time updates',
        'Automated payroll processing and reporting',
        'Role-based access control for administrators',
        'Performance analytics dashboard'
      ]
    },
    {
      id: 3,
      title: 'POS Billing System',
      description: 'A high-speed Point of Sale system designed for efficient transaction management, inventory tracking, and sales reporting.',
      category: 'Business',
      technologies: ['React', 'Express', 'MongoDB', 'MUI'],
      role: 'MERN Stack Developer (Team Work)',
      image: '/pos-billing.png',
      github: 'https://github.com/theusmansarwar/posFrontend',
      demo: 'https://pos.ztesting.site',
      status: 'Team Project',
      features: [
        'Fast transaction processing with optimized database queries',
        'Real-time inventory tracking and alerts',
        'Comprehensive sales reporting and analytics',
        'Multi-user support with role management'
      ]
    },
    {
      id: 4,
      title: 'Digital Aura',
      description: 'Contributed as a Front-end Developer, building high-performance web interfaces using React and custom CSS, along with seamless API integration.',
      category: 'Business',
      technologies: ['React', 'Custom CSS', 'API Integration'],
      role: 'Front-end Developer',
      image: '/digital-aura.png',
      github: null,
      demo: 'https://digitalaura.se',
      status: 'Live',
      features: [
        'Developed responsive UI components with React',
        'Implemented custom CSS animations and transitions',
        'Integrated third-party APIs for enhanced functionality',
        'Optimized performance for fast load times'
      ]
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    
    return [
      { project: projects[prevIndex], position: 'left' },
      { project: projects[currentIndex], position: 'center' },
      { project: projects[nextIndex], position: 'right' }
    ];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="w-full py-12 md:py-20 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <SectionReveal width="100%">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-10 md:mb-16">
            Projects
          </h2>
        </SectionReveal>

        {/* Carousel Container */}
        <div className="relative px-4 lg:px-16">
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 bg-[#161b22] border border-gray-700 hover:border-[#00D1B2] text-gray-400 hover:text-[#00D1B2] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#00D1B2]/20"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 bg-[#161b22] border border-gray-700 hover:border-[#00D1B2] text-gray-400 hover:text-[#00D1B2] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#00D1B2]/20"
            aria-label="Next project"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 lg:gap-6">
            {visibleProjects.map(({ project, position }) => {
              const isCenter = position === 'center';
              const isSide = position === 'left' || position === 'right';

              return (
                <div
                  key={`${project.id}-${position}`}
                  className={`relative transition-all duration-500 ${
                    isCenter 
                      ? 'w-full max-w-sm z-10 scale-100 opacity-100' 
                      : 'hidden lg:block w-72 scale-95 opacity-50 hover:opacity-70'
                  }`}
                  onClick={() => {
                    if (position === 'left') prevProject();
                    if (position === 'right') nextProject();
                  }}
                >
                  <div className={`relative group ${isSide ? 'cursor-pointer' : ''}`}>
                    {/* Card */}
                    <div className="bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden transition-all duration-500 hover:border-[#00D1B2]/30 hover:shadow-[#00D1B2]/10">
                      {/* Window Bar */}
                      <div className="bg-[#161b22] px-4 py-3 flex items-center justify-center border-b border-gray-800">
                        <div className={`font-mono text-[#00D1B2] uppercase tracking-widest font-bold ${isCenter ? 'text-xs' : 'text-[10px]'}`}>
                          {project.title}
                        </div>
                      </div>

                      {/* Project Image */}
                      <div className={`relative overflow-hidden bg-[#161b22] ${isCenter ? 'h-40 md:h-44' : 'h-48'}`}>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-40"></div>
                      </div>

                      {/* Content - Only show full details on center card */}
                      {isCenter && (
                        <div className="p-4 lg:p-5 space-y-3">
                          {/* Status & Role */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="px-3 py-1.5 bg-[#00D1B2]/10 border border-[#00D1B2]/30 text-[#00D1B2] text-xs font-bold rounded-md">
                              {project.status}
                            </span>
                            <span className="text-gray-400 text-sm font-medium">{project.role}</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                            {project.title}
                          </h3>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1.5 bg-[#161b22] border border-gray-700 text-gray-300 text-xs font-medium rounded-lg hover:border-[#00D1B2] hover:text-[#00D1B2] transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Features */}
                          <ul className="space-y-2">
                            {project.features.slice(0, 2).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-400">
                                <span className="text-[#00D1B2] mt-1">▹</span>
                                <span className="text-sm leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Buttons */}
                          <div className="flex gap-3 pt-2">
                            {project.github && (
                              <a 
                                href={project.github}
                                className="flex-1 py-3 px-4 border border-gray-700 hover:border-[#00D1B2] text-xs font-bold text-center text-gray-400 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#00D1B2]/10"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57"/></svg>
                                GitHub
                              </a>
                            )}
                            <a 
                              href={project.demo}
                              className="flex-1 py-3 px-4 bg-gradient-to-r from-[#00D1B2] to-[#8b5cf6] text-xs font-bold text-center text-white rounded-lg transition-all duration-300 shadow-lg shadow-[#00D1B2]/20 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00D1B2]/30 active:scale-95"
                            >
                              Live Demo
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Side cards - minimal content */}
                      {isSide && (
                        <div className="p-4 space-y-3">
                          <h3 className="text-lg font-bold text-white leading-tight line-clamp-1">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <span 
                                key={tech}
                                className="px-2 py-1 bg-[#161b22] border border-gray-700 text-gray-400 text-[10px] font-medium rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative Glow - only on center */}
                    {isCenter && (
                      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#00D1B2]/10 to-[#d946ef]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#00D1B2]' 
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
