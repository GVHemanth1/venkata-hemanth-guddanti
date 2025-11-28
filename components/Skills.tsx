import React from 'react';
import { Server, Code, Database, Globe, Layers, Cpu } from 'lucide-react';
import { SkillCategory } from '../types';
import FadeInSection from './FadeInSection';

const skillCategories: SkillCategory[] = [
  {
    name: "Middleware & Integration",
    icon: "Server",
    skills: ["IBM Integration Bus (IIB) 10", "IBM App Connect Enterprise (ACE)", "WebSphere MQ", "ESB Patterns", "Message Broker"]
  },
  {
    name: "Protocols & Formats",
    icon: "Globe",
    skills: ["SOAP-HTTP", "REST API", "XML/XMLNSC", "JSON", "DFDL", "BLOB", "WSDL", "Swagger"]
  },
  {
    name: "Development",
    icon: "Code",
    skills: ["ESQL", "Java Procedures", "Stored Procedures", "Transformations", "Routing", "Exception Handling"]
  },
  {
    name: "Infrastructure & OS",
    icon: "Cpu",
    skills: ["Windows", "Linux", "Z/OS", "Trace Nodes", "Error Logging"]
  },
  {
    name: "Domain Knowledge",
    icon: "Layers",
    skills: ["Healthcare", "Insurance", "Claims Processing", "Enrollment Systems", "Mainframe Technology"]
  }
];

const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Server': return <Server className="w-6 h-6 text-ibm-blue dark:text-neon-cyan" />;
      case 'Globe': return <Globe className="w-6 h-6 text-purple-600 dark:text-neon-purple" />;
      case 'Code': return <Code className="w-6 h-6 text-green-600 dark:text-green-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-orange-600 dark:text-orange-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-500 dark:text-blue-400" />;
      default: return <Database className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Technical <span className="text-ibm-blue">Arsenal</span></h2>
            <div className="h-1 flex-grow bg-slate-200 dark:bg-slate-800 rounded-full mb-3 ml-4 hidden md:block"></div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <FadeInSection key={idx} delay={idx * 100}>
              <div 
                className="h-full bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-ibm-blue dark:hover:border-ibm-blue p-6 rounded-xl transition-all hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-ibm-blue/10 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;