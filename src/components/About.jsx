import React from 'react';
import SectionReveal from './SectionReveal';

const About = () => {
  const techStack = [
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Next.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      className: 'invert'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'Express', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      className: 'invert'
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    { 
      name: 'HTML5', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'Tailwind', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },
    { 
      name: 'Material UI', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    },
    { 
      name: 'Mongoose', 
      icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png'
    },
    { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'Bootstrap', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
  ];

  // Duplicate the array 4 times for seamless loop on large screens
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <section id="about" className="w-full py-20 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionReveal width="100%">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Who Am I
          </h2>
        </SectionReveal>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <SectionReveal>
            <div className="space-y-8">
              <h3 className="text-[#00D1B2] text-4xl font-bold tracking-tight font-mono">
                A Bit About Me
              </h3>
            
            <p className="text-gray-400 text-xl leading-relaxed max-w-3xl font-medium">
              I build high-performance, scalable web applications using modern frameworks and clean architecture principles. 
              My goal is to help businesses ship reliable, SEO-friendly products quickly and with long-term maintainability in mind.
            </p>

            {/* Tech Stack Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-[#d946ef]/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-[#d946ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V6a2 2 0 012-2h2a2 2 0 012 2v2h4V6a2 2 0 012-2h2a2 2 0 012 2v7.255zM12 8V5m0 0H8m4 0h4m-8 3h8m-4 8a3 3 0 01-3-3V7a1 1 0 011-1h4a1 1 0 011 1v8a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold tracking-tight">Tech Toolbox</h3>
              </div>
              
              {/* Auto-Scrolling Carousel */}
              <div className="relative overflow-hidden py-2">
                <div className="tech-carousel-container group">
                  <div className="tech-carousel flex gap-6">
                    {duplicatedTechStack.map((tech, index) => (
                      <div
                        key={`${tech.name}-${index}`}
                        className="tech-card flex-shrink-0 w-24"
                      >
                        <div className="bg-[#161b22]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-28 transition-all duration-300 hover:border-[#00D1B2] hover:shadow-lg hover:shadow-[#00D1B2]/20 hover:-translate-y-1 relative group/card">
                          {/* Icon */}
                          <div className="flex items-center justify-center w-12 h-12">
                            <img 
                              src={tech.icon} 
                              alt={tech.name} 
                              className={`w-full h-full object-contain ${tech.className || ''}`}
                            />
                          </div>
                          {/* Name */}
                          <div className="text-xs font-medium text-gray-400 group-hover/card:text-gray-200 transition-colors text-center">
                            {tech.name}
                          </div>
                          {/* Hover Glow */}
                          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#00D1B2]/10 to-[#d946ef]/10 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Right Side: Profile Image */}
        <SectionReveal delay={0.2}>
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#161b22] shadow-2xl">
                <img 
                    src="/Areeba-Dp.jpeg" 
                    alt="Areeba Abdullah" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            {/* Decorative Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#00D1B2]/20 to-[#d946ef]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </SectionReveal>
      </div>
    </div>

    {/* Carousel Styles */}
    <style jsx>{`
      @keyframes scroll-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-25%);
        }
      }

      .tech-carousel {
        animation: scroll-left 12s linear infinite;
      }

      .tech-carousel-container:hover .tech-carousel {
        animation-play-state: paused;
      }
    `}</style>
  </section>
  );
};

export default About;
