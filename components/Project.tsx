import React from 'react';
import { Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Project: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">Featured <span className="text-purple-600 dark:text-neon-purple">Project</span></h2>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl relative group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-ibm-blue/5 dark:bg-ibm-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="grid md:grid-cols-3 gap-0">
                  {/* Header/Sidebar */}
                  <div className="p-8 bg-slate-50 dark:bg-slate-800/80 border-r border-slate-200 dark:border-slate-700/50 flex flex-col justify-between">
                      <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 rounded-full text-xs font-bold mb-4">
                              <Activity className="w-3 h-3" /> PRODUCTION
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Cigna Healthcare</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Health Services & Insurance Integration</p>
                          
                          <div className="space-y-4">
                              <div>
                                  <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Role</h4>
                                  <p className="text-slate-800 dark:text-white font-medium">IIB/ACE Developer</p>
                              </div>
                              <div>
                                  <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Domain</h4>
                                  <p className="text-slate-800 dark:text-white font-medium">Healthcare / Insurance</p>
                              </div>
                              <div>
                                  <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Tech Stack</h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                      {['IBM ACE', 'MQ', 'SOAP/HTTP', 'Compute Node', 'ESQL'].map(t => (
                                          <span key={t} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-xs rounded text-slate-700 dark:text-slate-200 transition-colors">{t}</span>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                              <ShieldCheck className="w-4 h-4 text-ibm-blue dark:text-neon-cyan" />
                              <span>High Security & Reliability</span>
                          </div>
                      </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8 md:p-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                          Worked on a dedicated health services application managing customer benefit preferences (HRA/FSA plans). 
                          The system handles enrollment of individuals, claim processing from upstream applications, validation, 
                          adjudication, and settlement. The production environment presented challenging opportunities to triage fallouts 
                          and maintain system integrity.
                      </p>

                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Responsibilities</h4>
                      <ul className="space-y-4">
                          {[
                              "Implemented change requests and new applications derived from business requirements.",
                              "Designed, developed, and deployed robust message flows using HTTP, SOAP, MQ, File, and Compute Nodes.",
                              "Implemented a Generic Exception Handler for standardized error description and response routing.",
                              "Created common components for error handling and logging, coordinating with SIT and UAT teams.",
                              "Maintained Functional Specification Documents and managed BAR file deployments.",
                              "Collaborated with clients in weekly calls to resolve functional and technical queries."
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-ibm-blue shrink-0 mt-0.5" />
                                  <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Project;