import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full bg-[#0d1117]/80 backdrop-blur-xl sticky top-0 z-[100] border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#00D1B2] transition-colors">
          <span className="text-[#00D1B2]">Areeba</span> Abdullah
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`text-xs uppercase font-bold tracking-[0.2em] transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-[#00D1B2]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-[#00D1B2] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-gray-800 animate-slideDown">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={() => setIsOpen(false)}
                  className={`text-xs uppercase font-bold tracking-widest block py-2 ${
                    activeSection === item.id ? 'text-[#00D1B2]' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
