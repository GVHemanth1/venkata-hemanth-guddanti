import React, { useState, useEffect } from 'react';
import NetworkBackground from './components/NetworkBackground';
import { Navbar, Footer } from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Education from './components/Education';
import ChatBot from './components/ChatBot';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from system preference or default to light as requested
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       // We keep the state as 'light' by default per user request, 
       // but user can still toggle it.
    }
  }, []);

  // Update HTML class when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative antialiased selection:bg-ibm-blue selection:text-white dark:selection:bg-neon-cyan dark:selection:text-black min-h-screen">
      <NetworkBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-0">
        <Hero />
        <Experience />
        <Skills />
        <Project />
        <Education />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;