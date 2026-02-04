import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
    </Layout>
  );
}
