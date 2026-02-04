import SectionReveal from './SectionReveal';

const Skills = () => {
  const skillsData = [
    {
      title: 'Frontend',
      description: 'Responsive UI/UX development using modern web frameworks.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-cyan-500 to-blue-600',
      skills: ['React JS', 'Next JS', 'Tailwind', 'MUI' , 'Bootstrap' ]
    },
    {
      title: 'Backend',
      description: 'Secure server-side logic and scalable API architecture.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-600',
      skills: ['Node JS', 'Express', 'Python', 'REST APIs']
    },
    {
      title: 'Database',
      description: 'Schema modeling and secure data integrity management.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600',
      skills: ['Mongo DB', 'Mongoose', 'MySQL', 'Auth']
    },
     
  ];

  return (
    <section id="skills" className="w-full py-20 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionReveal width="100%">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-0">
            Skills
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2} width="100%">
          <div className="text-center mt-6 mb-16">
            <p className="text-gray-400 text-lg opacity-80">
              Technical stack & specialized developer services
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <SectionReveal key={index} delay={index * 0.1} width="100%">
              <div className="group relative h-full">
                <div className="bg-[#0d1117]/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 transition-all duration-500 hover:border-[#00D1B2]/30 hover:shadow-2xl hover:shadow-[#00D1B2]/5 flex flex-col h-full overflow-hidden">
                  
                  {/* Subtle Gradient Glow Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                  {/* Icon Section */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500 shrink-0 mx-auto`}>
                    <div className="w-full h-full bg-[#0d1117] rounded-2xl flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full items-center text-center">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {category.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 text-xs font-bold text-[#00D1B2] bg-[#00D1B2]/5 border border-[#00D1B2]/10 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
