import React from 'react';
import SectionReveal from './SectionReveal';

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionReveal width="100%">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Who Am I
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16 items-center">
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

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#d946ef]/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-[#d946ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V6a2 2 0 012-2h2a2 2 0 012 2v2h4V6a2 2 0 012-2h2a2 2 0 012 2v7.255zM12 8V5m0 0H8m4 0h4m-8 3h8m-4 8a3 3 0 01-3-3V7a1 1 0 011-1h4a1 1 0 011 1v8a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold tracking-tight">Tech Toolbox</h3>
              </div>
              
              <p className="text-gray-100 font-mono text-lg leading-relaxed max-w-2xl">
                React, Next JS, Tailwind, Mongoose, Mongo DB, Express JS, Material UI
              </p>
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
  </section>
  );
};

export default About;
