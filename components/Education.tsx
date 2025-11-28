import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Degree */}
            <FadeInSection>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                    <GraduationCap className="text-ibm-blue dark:text-neon-cyan" /> Education
                </h3>
                <div className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white">Bachelor of Technology</h4>
                    <p className="text-ibm-blue font-medium mt-1">NBKR Institute of Science & Technology</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Autonomous • 8.02 CGPA</p>
                </div>
            </FadeInSection>

            {/* Certs */}
            <FadeInSection delay={200}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                    <Award className="text-purple-600 dark:text-neon-purple" /> Certifications
                </h3>
                <div className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors shadow-sm">
                    <div className="w-12 h-12 bg-blue-500/10 rounded flex items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure" className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white">Microsoft Azure Fundamentals</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">AZ-900</p>
                    </div>
                </div>
            </FadeInSection>

        </div>
    </section>
  );
};

export default Education;