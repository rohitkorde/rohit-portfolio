import React from 'react';
import { Code, Cloud, Database, Settings, LucideIcon } from 'lucide-react';
import {TechIcon} from '../../common/TechIcon/TechIcon';

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  color: string;
  techs: string[];
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      color: "text-purple-400",
      techs: ['java', 'spring']
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-blue-400",
      techs: ['aws', 'docker', 'kubernetes', 'jenkins']
    },
    {
      icon: Database,
      title: "Data & Messaging",
      color: "text-green-400",
      techs: ['postgresql', 'kafka', 'mongodb']
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      color: "text-orange-400",
      techs: ['git', 'maven', 'gradle', 'splunk']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className={`${category.color}`} size={32} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-6">
                  {category.techs.map(tech => (
                    <TechIcon key={tech} techKey={tech} className="w-10 h-10" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
