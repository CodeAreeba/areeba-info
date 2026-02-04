import React from 'react';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
  const programmer = {
    name: 'Areeba Abdullah',
    industryExperience: 0.5,
    knowsFrontend: true,
    knowsBackend: true,
    skills: ['React', 'Next JS', 'Tailwind', 'Mongoose', 'Mongo DB', 'Express JS' , 'Material UI'],
    hireable: () => {
      return (
        programmer.knowsFrontend &&
        programmer.knowsBackend &&
        programmer.industryExperience >= 0.5
      );
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Name and Intro */}
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight">
              Hello,
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              This is <span className="text-[#d946ef]">Areeba Abdullah</span> , I'm 
              a Professional <span className="text-[#00D1B2]">Fullstack Developer.</span>
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-gray-800/40 rounded-lg text-gray-400 hover:text-white transition-all hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57"/></svg>
            </a>
            <a href="#" className="p-3 bg-gray-800/40 rounded-lg text-gray-400 hover:text-white transition-all hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="p-3 bg-gray-800/40 rounded-lg text-gray-400 hover:text-white transition-all hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="p-3 bg-gray-800/40 rounded-lg text-gray-400 hover:text-white transition-all hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-10 py-4 border border-gray-700 hover:border-[#00D1B2] text-white font-medium rounded-full transition-all group flex items-center gap-2"
            >
              CONTACT ME <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <button className="px-10 py-4 bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] text-white font-medium rounded-full transition-all shadow-xl shadow-[#d946ef]/20 hover:scale-105 active:scale-95 flex items-center gap-2">
              GET RESUME
            </button>
          </div>
        </Motion.div>

        {/* Right Side: Code Card */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          {/* Card Frame */}
          <div className="bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl p-1 overflow-hidden">
            <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>
            
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div><span className="text-[#d946ef]">const</span> <span className="text-[#00D1B2]">programmer</span> <span className="text-[#8b5cf6]">=</span> {'{'}</div>
              <div className="pl-4"><span className="text-gray-400">name:</span> <span className="text-[#eab308]">'Areeba Abdullah'</span>,</div>
              <div className="pl-4"><span className="text-gray-400">industryExperience:</span> <span className="text-[#8b5cf6]">'6 months'</span>,</div>
            <div className="pl-4"><span className="text-gray-400">knowsFrontend:</span> <span className="text-blue-400">true</span>,</div>
              <div className="pl-4"><span className="text-gray-400">knowsBackend:</span> <span className="text-blue-400">true</span>,</div>
              <div className="pl-4"><span className="text-gray-400">skills:</span> [</div>
              <div className="pl-8">
                {programmer.skills.map((skill, i) => (
                  <span key={skill}>
                    <span className="text-[#eab308]">'{skill}'</span>
                    {i < programmer.skills.length - 1 ? <span className="text-gray-400">, </span> : ''}
                  </span>
                ))}
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4"><span className="text-[#00D1B2]">hireable:</span> () <span className="text-[#8b5cf6]">=</span><span className="text-[#d946ef]"> ={'>'}</span> {'{'}</div>
              <div className="pl-8"><span className="text-[#d946ef]">return</span> (</div>
              <div className="pl-12">
                <span className="text-[#d946ef]">this</span>.knowsFrontend <span className="text-[#8b5cf6]">&&</span>
              </div>
              <div className="pl-12">
                <span className="text-[#d946ef]">this</span>.knowsBackend <span className="text-[#8b5cf6]">&&</span>
              </div>
              <div className="pl-12">
                <span className="text-[#d946ef]">this</span>.industryExperience <span className="text-[#8b5cf6]">{'>='}</span> <span className="text-[#8b5cf6]">"6 months"</span>
            </div>
              <div className="pl-8">);</div>
              <div className="pl-4">{'}'}</div>
              <div>{'}'};</div>
            </div>
          </div>
          
          {/* Decorative Glow behind the card */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#00D1B2]/20 to-[#d946ef]/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Motion.div>

      </div>
    </section>
  );
};

export default Hero;
