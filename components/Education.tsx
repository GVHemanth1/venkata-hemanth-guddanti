import React from 'react';
import { GraduationCap, Award, Github } from 'lucide-react';
import FadeInSection from './FadeInSection';
// import githubLogo from './github-logo.png';

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
                        {/* Need to provide certificate view link here along with details */}
                        < a href="https://www.credly.com/badges/6a94b60e-46f7-4b74-8089-7341d7d083d9?source=linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-1 block">View Certificate</a>

                    </div>
                    {/* Adding another certificate */}
                </div>
                <div className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 mt-6 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors shadow-sm">
                    <div className="w-12 h-12 bg-green-500/10 rounded flex items-center justify-center">
                    {/* https://upload.wikimedia.org/wikipedia/commons/4/44/git-icon.png is not working */}
                        {/* <img src="public\github-logo.png" alt="Git and GitHub" className="w-8 h-8" /> */}
                        {/* <img src={githubLogo} alt="GitHub" className="w-8 h-8" /> */}
                        <Github className="w-8 h-8 text-black dark:text-white" />
                    

                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white">Git and GitHub</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Udemy</p>
                        {/* Need to provide certificate view link here along with details */}
                        < a href="https://www.udemy.com/certificate/UC-5b24de33-829d-4136-8373-fcebeeeba316/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-1 block">View Certificate</a>
                    </div>
                    

                </div>
            </FadeInSection>

        </div>
    </section>
  );
};

export default Education;