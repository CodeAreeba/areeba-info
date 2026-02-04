import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full border-t border-gray-500/10 py-12 px-4 relative overflow-hidden">
      {/* Subtle top glow - Themed Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D1B2]/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding / Copyright - Aligned with Hero style */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <p className="text-gray-400 font-mono text-sm tracking-wide flex items-center gap-2">
            Fullstack Developer <span className="text-[#00D1B2] font-extrabold text-lg tracking-tight">Areeba</span>
          </p>
          <div className="hidden md:block w-px h-6 bg-gray-500/20"></div>
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Scroll to Top - Gradient Accent */}
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D1B2] to-[#8b5cf6] flex items-center justify-center text-white shadow-lg shadow-[#00D1B2]/10 hover:shadow-[#00D1B2]/30 transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none"
          title="Back to Top"
        >
          <svg 
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>

  );
};

export default Footer;

