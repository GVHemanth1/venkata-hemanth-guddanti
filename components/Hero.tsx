import React from 'react';
import { ArrowDown, Github, Mail, Server, Database, Network, Linkedin } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="max-w-7xl w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="space-y-8 order-2 md:order-1 text-center md:text-left">
          <FadeInSection>
            <div className="space-y-4">
              <p className="text-ibm-blue dark:text-neon-cyan font-mono text-lg tracking-wider">HELLO, I AM</p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                Venkata Hemanth <span className="text-slate-500 dark:text-slate-400">Guddanti</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-500 dark:text-slate-400">
                Building Robust <span className="text-ibm-blue">Integration</span> Solutions.
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-white/50 dark:bg-slate-900/30 p-4 rounded-lg border-l-4 border-ibm-blue dark:border-neon-cyan shadow-sm mx-auto md:mx-0">
              Enthusiastic IT professional with 3+ years of experience specializing in 
              <strong className="text-slate-900 dark:text-white"> IBM App Connect Enterprise (ACE)</strong> and Middleware integration. 
              I design efficient data flows that streamline complex business processes in the Healthcare domain.
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/venkata-hemanth-guddanti-249bb812a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-full transition-all border border-[#0077b5] shadow-lg hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/GVHemanth1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all border border-slate-700 hover:border-ibm-blue dark:hover:border-neon-cyan shadow-lg hover:-translate-y-1"
              >
                <Github className="w-5 h-5 group-hover:text-neon-cyan transition-colors" />
                <span>GitHub</span>
              </a>

              <a 
                href="mailto:guddantivenkatahemanth@gmail.com"
                className="group flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-800 dark:text-white rounded-full transition-all border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-white hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 text-slate-600 dark:text-white group-hover:text-slate-900 transition-colors" />
                <span>Email</span>
              </a>
            </div>
          </FadeInSection>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 flex justify-center items-center relative py-10 md:py-0">
            <FadeInSection delay={300}>
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 dark:border-slate-700 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 rounded-full border border-dashed border-ibm-blue/30 dark:border-neon-cyan/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                    
                    {/* Floating Tech Icons */}
                    <div className="absolute -right-2 top-10 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg animate-bounce z-20 border border-slate-100 dark:border-slate-700">
                        <Server className="w-5 h-5 text-ibm-blue dark:text-neon-cyan" />
                    </div>
                    <div className="absolute -left-2 bottom-20 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg animate-bounce delay-700 z-20 border border-slate-100 dark:border-slate-700">
                        <Database className="w-5 h-5 text-purple-600 dark:text-neon-purple" />
                    </div>
                     <div className="absolute right-10 -bottom-4 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg animate-bounce delay-300 z-20 border border-slate-100 dark:border-slate-700">
                        <Network className="w-5 h-5 text-green-500" />
                    </div>

                    {/* Main Image */}
                    <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-10 animate-float bg-slate-200 dark:bg-slate-800">
                         <img 
                            src="https://github.com/GVHemanth1.png" 
                            onError={(e) => {
                                // Fallback to a generated avatar if GitHub image fails
                                e.currentTarget.src = "https://ui-avatars.com/api/?name=Venkata+Hemanth&background=0f62fe&color=fff&size=512";
                                e.currentTarget.onerror = null; 
                            }}
                            alt="Venkata Hemanth Guddanti"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                        />
                         {/* Overlay tint on hover */}
                         <div className="absolute inset-0 bg-ibm-blue/10 dark:bg-neon-cyan/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                </div>
            </FadeInSection>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-500">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;