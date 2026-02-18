import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionReveal from './SectionReveal';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, message: null });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: null });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        form.current.reset();
        setTimeout(() => setStatus({ type: null, message: null }), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-20 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading - Aligned with Projects/Resume */}
        <SectionReveal width="100%">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Contact Me
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-24 items-start w-full relative">
          
          {/* Left Side: Contact Form Container - Glassmorphism matched with Project Cards */}
          <SectionReveal width="100%" delay={0.1}>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-500/50 rounded-3xl p-8 lg:p-12 shadow-xl w-full">
              <p className="text-gray-400 mb-8 text-base leading-relaxed">
                If you have any questions or concerns, please don't hesitate to contact me. 
                I am open to any work opportunities that align with my skills and interests.
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium text-sm mb-2">Your Name:</label>
                  <input 
                    name="user_name"
                    type="text" 
                    required
                    className="w-full bg-gray-900/40 border border-gray-600/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D1B2] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium text-sm mb-2">Your Email:</label>
                  <input 
                    name="user_email"
                    type="email" 
                    required
                    className="w-full bg-gray-900/40 border border-gray-600/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D1B2] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium text-sm mb-2">Your Message:</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    required
                    className="w-full bg-gray-900/40 border border-gray-600/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D1B2] transition-colors resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                {status.message && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${
                    status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}>
                    {status.message}
                  </div>
                )}

                <div className="pt-4 flex justify-center lg:justify-start">
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="flex items-center gap-3 bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] text-white font-bold py-3 px-8 rounded-xl hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 group uppercase text-xs tracking-widest shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSending ? 'Sending...' : 'SEND MESSAGE'}
                    {!isSending && (
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </SectionReveal>

          {/* Right Side: Contact Info & Socials */}
          <div className="w-full lg:w-auto space-y-10 lg:pl-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Contact Details */}
            <div className="space-y-6">
              <SectionReveal delay={0.2}>
                <a href="mailto:areeabdullah111@gmail.com" className="flex items-center gap-6 group cursor-pointer block">
                  <div className="w-12 h-12 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center group-hover:bg-[#00D1B2] group-hover:border-[#00D1B2] transition-all duration-300 shadow-lg">
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                    <span className="text-gray-200 text-lg">areeabdullah111@gmail.com</span>
                  </div>
                </a>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center group-hover:bg-[#00D1B2] group-hover:border-[#00D1B2] transition-all duration-300 shadow-lg">
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a1 1 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</h4>
                    <span className="text-gray-200 text-lg">+923104137313</span>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center group-hover:bg-[#00D1B2] group-hover:border-[#00D1B2] transition-all duration-300 shadow-lg">
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                    <span className="text-gray-200 text-lg leading-tight">Gulberg 3, Lahore, Pakistan</span>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Social Icons Row - Modern Pill Style */}
            <SectionReveal delay={0.5}>
              <div className="flex flex-wrap gap-4 pt-10 justify-center lg:justify-start">
                <a href="https://github.com/CodeAreeba" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00D1B2] hover:border-[#00D1B2] transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/areeba-abdullah-b0466a26a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* <a href="#" className="w-10 h-10 bg-gray-800/60 border border-gray-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-black hover:border-black transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a> */}
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

