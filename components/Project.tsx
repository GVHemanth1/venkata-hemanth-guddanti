import React from 'react';
import { Activity, CheckCircle2, AlertCircle, Lightbulb, TrendingUp, Briefcase } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Project: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Featured <span className="text-purple-600 dark:text-neon-purple">Project</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl relative group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-ibm-blue/5 dark:bg-ibm-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="grid md:grid-cols-3 gap-0">
                  {/* Left Sidebar - Meta Data */}
                  <div className="p-8 bg-slate-50 dark:bg-slate-800/80 border-r border-slate-200 dark:border-slate-700/50 flex flex-col h-full">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 rounded-full text-xs font-bold mb-4 w-fit">
                          <Activity className="w-3 h-3" /> INTEGRATION DEVELOPER & PRODUCTION SUPPORT
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Cigna Healthcare</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Health Services Integration</p>
                      
                      <div className="space-y-4">
                          <div>
                              <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Role</h4>
                              <p className="text-slate-800 dark:text-white font-medium">Integration Developer & Support</p>
                          </div>
                          <div>
                              <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Domain</h4>
                              <p className="text-slate-800 dark:text-white font-medium">Healthcare Adjudication</p>
                          </div>
                          <div>
                              <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                  {['IBM ACE', 'MQ', 'SOAP/HTTP', 'Compute Node', 'ESQL', 'File Nodes'].map(t => (
                                      <span key={t} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-xs rounded text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600">
                                          {t}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Right Content Area */}
                  <div className="md:col-span-2 p-8 md:p-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                      
                      {/* Section 1: Overview & Responsibilities */}
                      <div className="mb-10">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                              <Briefcase className="w-6 h-6 text-ibm-blue dark:text-neon-cyan" />
                              Project Overview & Operations
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                              Worked on a dedicated health services application managing customer benefit preferences (HRA/FSA plans). The system handles enrollment of individuals, claim processing from upstream applications, validation, adjudication, and settlement. The production environment presented challenging opportunities to triage fallouts and maintain system integrity.
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                              {[
                                  "Implemented change requests and new applications derived from business requirements.",
                                  "Designed and deployed robust message flows using HTTP, SOAP, MQ, File, and Compute Nodes.",
                                  "Maintained Functional Specification Documents (FSD) and managed BAR file deployments.",
                                  "Collaborated with clients in weekly calls to resolve functional and technical queries."
                              ].map((resp, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                                      <span>{resp}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>

                      {/* Section 2: Technical Case Study Spotlight */}
                      <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Spotlight: Technical Case Study</h4>
                          
                          <div className="space-y-4">
                              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                                  <h5 className="font-bold text-ibm-blue dark:text-neon-cyan mb-2 flex items-center gap-2">
                                      <AlertCircle className="w-4 h-4" /> The Challenge
                                  </h5>
                                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                                      Upstream claims lacked standardized error reporting, making L2 production triage difficult and delaying adjudication settlements. A cohesive logging and fault-routing mechanism was required across all environments.
                                  </p>
                              </div>

                              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                                  <h5 className="font-bold text-ibm-blue dark:text-neon-cyan mb-2 flex items-center gap-2">
                                      <Lightbulb className="w-4 h-4" /> The Solution
                                  </h5>
                                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                                      Engineered a centralized <strong>Generic Exception Handler</strong> using ESQL. Created common integration components for comprehensive error handling and logging, coordinating closely with SIT and UAT teams to ensure seamless integration.
                                  </p>
                              </div>

                              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                                  <h5 className="font-bold text-ibm-blue dark:text-neon-cyan mb-3 flex items-center gap-2">
                                      <TrendingUp className="w-4 h-4" /> The Impact
                                  </h5>
                                  <ul className="space-y-2">
                                      <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                          <span>Standardized error description and response routing across the entire application ecosystem.</span>
                                      </li>
                                      <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                          <span>Drastically reduced manual triage time during high-stakes L2 production fallouts.</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Project;
