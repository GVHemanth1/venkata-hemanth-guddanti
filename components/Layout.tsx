import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Phone, Sun, Moon, Linkedin } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-mono tracking-tighter text-slate-900 dark:text-white transition-colors">
          VH<span className="text-ibm-blue">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-ibm-blue dark:hover:text-neon-cyan transition-colors"
              >
                {link.name}
              </a>
              {/* Add separator if not the last item */}
              {index < navLinks.length - 1 && (
                <span className="text-slate-300 dark:text-slate-700 select-none">|</span>
              )}
            </React.Fragment>
          ))}
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2"></div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <a href="#contact" className="ml-2 px-5 py-2 text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded hover:bg-ibm-blue dark:hover:bg-neon-cyan hover:text-white dark:hover:text-black transition-colors shadow-lg shadow-ibm-blue/20 dark:shadow-neon-cyan/20">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg text-slate-800 dark:text-slate-300 hover:text-ibm-blue dark:hover:text-neon-cyan"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-16 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Let's Connect</h3>
          <p className="text-slate-600 dark:text-slate-400">Open for new opportunities in Integration & Middleware.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/venkata-hemanth-guddanti-249bb812a/" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/GVHemanth1" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:guddantivenkatahemanth@gmail.com" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-red-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+918500508085" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-green-500 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Venkata Hemanth Guddanti. All rights reserved.</p>
      </div>
    </footer>
  );
};