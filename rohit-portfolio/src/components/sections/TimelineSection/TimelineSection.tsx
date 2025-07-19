import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../../data/experiences';

export const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400"></div>

          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
