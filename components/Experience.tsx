import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { ExperienceItem } from '../types';
import FadeInSection from './FadeInSection';

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Engineer",
    company: "CGI Inc.",
    period: "Oct 2022 - Present",
    description: "Working on IBM App Connect Enterprise (ACE) production support and development. Handling critical integration flows for healthcare clients.",
    technologies: ["IBM ACE", "Support", "Development"]
  },
  {
    id: "2",
    role: "Intern - Data Warehouse & Azure",
    company: "Tiger Analytics",
    period: "Mar 2022 - Aug 2022",
    description: "Participated actively in data engineering training. Gained hands-on experience with data warehousing concepts and business analytical tools.",
    technologies: ["Azure", "Data Warehouse", "Data Engineering"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">Professional <span className="text-ibm-blue dark:text-neon-cyan">Journey</span></h2>
        </FadeInSection>

        <div className="relative">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700"></div>
            {/* Mobile Left Line */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700"></div>

            <div className="space-y-12">
            {experienceData.map((exp, idx) => (
                <FadeInSection key={exp.id} delay={idx * 200}>
                <div className="relative grid md:grid-cols-[25%_auto_1fr] gap-0 md:gap-8 items-start group">
                    
                    {/* Date Column (Desktop Only) */}
                    <div className="hidden md:flex justify-end pt-8 pr-6">
                        <span className="inline-flex items-center gap-2 text-sm font-mono font-bold text-slate-500 dark:text-slate-400 group-hover:text-ibm-blue dark:group-hover:text-neon-cyan transition-colors">
                            {exp.period}
                        </span>
                    </div>

                    {/* Timeline Dot Column */}
                    <div className="absolute left-5 md:static md:flex md:justify-center pt-9 z-10">
                         {/* Dot Container */}
                         <div className="relative flex items-center justify-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-ibm-blue dark:bg-neon-cyan border-2 md:border-4 border-slate-100 dark:border-slate-900 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                            {/* Pulse effect */}
                            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-ibm-blue/20 dark:bg-neon-cyan/20 animate-ping opacity-0 group-hover:opacity-75 transition-opacity"></div>
                         </div>
                    </div>

                    {/* Content Card */}
                    <div className="pl-12 md:pl-0">
                        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-ibm-blue dark:hover:border-neon-cyan transition-all shadow-sm hover:shadow-xl relative overflow-hidden group-hover:-translate-y-1 duration-300">
                            
                            {/* Mobile Date (Visible only on small screens) */}
                            <div className="md:hidden mb-3">
                                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-ibm-blue dark:text-neon-cyan bg-slate-50 dark:bg-slate-700/50 px-3 py-1 rounded-full">
                                    <Calendar className="w-3 h-3" />
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-ibm-blue dark:group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                                    <Briefcase className="w-4 h-4" />
                                    <span>{exp.company}</span>
                                </div>
                            </div>
                            
                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                {exp.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, tIdx) => (
                                    <span key={tIdx} className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 rounded-full border border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </FadeInSection>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;