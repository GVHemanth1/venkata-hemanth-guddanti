import React from 'react';
import { Activity, CheckCircle2, ShieldCheck, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';
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
                  {/* Header/Sidebar */}
                  <div className="p-8 bg-slate-50 dark:bg-slate-800/80 border-r border-slate-200 dark:border-slate-700/50 flex flex-col justify-between h-full">
                      <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 rounded-full text-xs font-bold mb-4">
                              <Activity className="w-3 h-3" /> L2 PRODUCTION SUPPORT
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Cigna Healthcare</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Health Services & Insurance Integration</p>
                          
                          <div className="space-y-4">
                              <div>
                                  <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Role</h4>
                                  <p className="text-slate-800 dark:text-white font-medium">Integration Developer & L2 Support</p>
                              </div>
                              <div>
                                  <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Domain</h4>
                                  <p className="text-slate-800 dark:text-white font-medium">Healthcare / Insurance</p>
                              </div>
                              <div>
                                  <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider mb-1">Tech Stack</h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                      {['IBM ACE', 'MQ', 'SOAP/HTTP', 'Compute Node', 'ESQL', 'Incident Triage'].map(t => (
                                          <span key={t} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-xs rounded text-slate-700 dark:text-slate-200 transition-colors border border-slate-300 dark:border-slate-600">
                                              {t}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                              <ShieldCheck className="w-5 h-5 text-ibm-blue dark:text-neon-cyan" />
                              <span className="font-medium">Zero-Downtime Deployments</span>
                          </div>
                      </div>
                  </div>

                  {/* Content - Technical Case Study */}
                  <div className="md:col-span-2 p-8 md:p-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Technical Case Study</h4>
                      
                      <div className="space-y-6">
                          {/* Challenge */}
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                              <h5 className="font-bold text-ibm-blue dark:text-neon-cyan mb-3 flex items-center gap-2">
                                  <AlertCircle className="w-5 h-5" />
                                  The Challenge & Context
                              </h5>
                              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                  The Cigna Healthcare application required a robust middleware layer to process high volumes of HRA/FSA benefit plan data. Upstream claims lacked standardized error reporting, leading to difficult production triage and delayed adjudication settlements. Operating in an active <strong>L2 Production Support</strong> capacity alongside development, I frequently encountered critical functional fallouts that required rapid root-cause analysis to maintain system integrity.
                              </p>
                          </div>

                          {/* Solution */}
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                              <h5 className="font-bold text-ibm-blue dark:text-neon-cyan mb-3 flex items-center gap-2">
                                  <Lightbulb className="w-5 h-5" />
                                  The Architecture & Solution
                              </h5>
                              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                  I engineered a centralized <strong>Generic Exception Handler</strong> using advanced ESQL within IBM App Connect Enterprise. I designed complex message flows utilizing SOAP, HTTP, and MQ nodes to validate and transform incoming enrollment payloads before they reached downstream systems. Furthermore, I created common integration components for comprehensive logging, establishing a clear, actionable audit trail for the L2 support team.
                              </p>
                          </div>

                          {/* Impact */}
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                              <h5 className="font-bold text-ibm-blue dark:text-neon-cyan mb-4 flex items-center gap-2">
                                  <TrendingUp className="w-5 h-5" />
                                  Business & Technical Impact
                              </h5>
                              <ul className="space-y-4">
                                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                      <span>Standardized error routing across numerous message flows, significantly reducing manual L2 triage time and accelerating incident resolution in live production environments.</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                      <span>Ensured seamless, secure data transformation between legacy mainframe systems and modern healthcare portals for critical HRA/FSA enrollments.</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                      <span>Streamlined the deployment pipeline by managing BAR file configurations and coordinating rapid, zero-downtime updates across SIT, UAT, and Production.</span>
                                  </li>
                              </ul>
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
