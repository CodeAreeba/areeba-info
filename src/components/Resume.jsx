import React from 'react';
import SectionReveal from './SectionReveal';

const Resume = () => {
  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'Superior University',
      period: '04/2023 - Present',
      location: 'Lahore/Punjab',
      details: '3.91 CGPA | Semester 7th',
    },
    {
      degree: 'Intermediate',
      institution: 'Punjab Group Of Colleges',
      period: '08/2019 - 05/2021',
      location: 'Lahore/Punjab',
      details: '1083/1100 | Pre-Medical',
    },
    {
      degree: 'Matriculation',
      institution: 'Govt Model Girls High School',
      period: '04/2017 - 04/2019',
      location: 'Lahore/Punjab',
      details: '1049/1100 | Biological Sciences',
    }
  ];

  const workExperience = [
    {
      title: 'Junior Developer',
      company: 'Zemalt Pvt Ltd',
      period: '09/2025 - Present',
      location: 'Lahore/Pakistan',
      projects: [
        {
          name: 'HR Management System',
          tech: 'React, Express, MongoDB, MUI',
          link: 'hr.ztesting.site'
        },
        {
          name: 'POS Billing System',
          tech: 'React, Express, MongoDB, MUI',
          link: 'pos.ztesting.site'
        }
      ]
    },
    {
      title: 'Web Dev Internship',
      company: 'Zemalt Pvt Ltd',
      period: '07/2025 - 09/2025',
      location: 'Lahore/Pakistan',
      description: 'Gained hands-on experience in full-stack development',
      technologies: ['React.js', 'Node.js', 'Express', 'Tailwind']
    }
  ];

  return (
    <section id="resume" className="w-full py-12 md:py-20 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionReveal width="100%">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Resume
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Education Column */}
          <div className="space-y-12 relative">
            <h3 className="text-2xl font-bold text-[#00D1B2] font-mono flex items-center gap-3">
              <span className="text-[#d946ef]">&lt;</span> Education <span className="text-[#d946ef]">/&gt;</span>
            </h3>
            
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#00D1B2]/40 via-gray-800 to-transparent"></div>
              
              {education.map((edu, index) => (
                <SectionReveal key={index} delay={index * 0.1}>
                  <div className="relative pl-12 group">
                    <div className="absolute left-3 top-2 w-2.5 h-2.5 rounded-full bg-[#0d1117] border-2 border-[#00D1B2] z-10 group-hover:scale-125 transition-transform duration-300"></div>
                    
                    <div className="bg-[#0d1117]/60 backdrop-blur-xl rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:border-[#00D1B2]/30">
                      <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-gray-800">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                          <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">edu_history.json</span>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <h4 className="text-lg font-bold text-white leading-tight">{edu.degree}</h4>
                          <span className="text-[10px] font-mono font-bold px-2 py-1 bg-gray-900 border border-gray-800 text-[#d946ef] rounded uppercase tracking-tighter shrink-0 w-fit">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-[#00D1B2] text-sm font-semibold mb-3">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono mb-4">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {edu.location}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs italic">{edu.details}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          {/* Work Experience Column */}
          <div className="space-y-12 relative">
            <h3 className="text-2xl font-bold text-[#d946ef] font-mono flex items-center gap-3">
              <span className="text-[#00D1B2]">&lt;</span> Experience <span className="text-[#00D1B2]">/&gt;</span>
            </h3>

            <div className="space-y-8 relative">
              <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#d946ef]/40 via-gray-800 to-transparent"></div>

              {workExperience.map((work, index) => (
                <SectionReveal key={index} delay={index * 0.1}>
                  <div className="relative pl-12 group">
                    <div className="absolute left-3 top-2 w-2.5 h-2.5 rounded-full bg-[#0d1117] border-2 border-[#d946ef] z-10 group-hover:scale-125 transition-transform duration-300"></div>

                    <div className="bg-[#0d1117]/60 backdrop-blur-xl rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:border-[#d946ef]/30">
                      <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-gray-800">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                          <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">work_exp.json</span>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <h4 className="text-lg font-bold text-white leading-tight">{work.title}</h4>
                          <span className="text-[10px] font-mono font-bold px-2 py-1 bg-gray-900 border border-gray-800 text-[#00D1B2] rounded uppercase tracking-tighter shrink-0 w-fit">
                            {work.period}
                          </span>
                        </div>
                        <p className="text-[#d946ef] text-sm font-semibold mb-3">{work.company}</p>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono mb-4">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {work.location}
                          </span>
                        </div>
                        
                        {work.description && (
                           <p className="text-gray-400 text-xs mb-4 leading-relaxed">{work.description}</p>
                        )}

                        {work.projects && (
                          <div className="space-y-3 mt-4">
                            {work.projects.map((project, pIndex) => (
                              <div key={pIndex} className="p-3 bg-gray-900/50 rounded-lg border border-gray-800 flex items-center justify-between group/project transition-all hover:bg-gray-800">
                                <div className="space-y-1">
                                  <p className="text-xs font-bold text-white group-hover/project:text-[#00D1B2] transition-colors">{project.name}</p>
                                  <p className="text-[10px] text-gray-500 font-mono">{project.tech}</p>
                                </div>
                                <a 
                                  href={`https://${project.link}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors"
                                >
                                  VIEW ↗
                                </a>
                              </div>
                            ))}
                          </div>
                        )}

                        {work.technologies && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {work.technologies.map((tech) => (
                              <span key={tech} className="px-2 py-0.5 text-[9px] font-mono text-gray-400 bg-gray-900 border border-gray-800 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
