import React from 'react';
import { personalInfo } from '../../../data/personal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {personalInfo.education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
              <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
