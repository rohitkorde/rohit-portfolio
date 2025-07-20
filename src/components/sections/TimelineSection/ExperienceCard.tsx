import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import {TechIcon} from '../../common/TechIcon';
import { Experience } from '../../../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div
      className={`relative mb-16 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'} group`}
    >
      {/* Timeline Dot */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform duration-300"></div>

      {/* Experience Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-105 hover:bg-white/10">
        <div className="mb-6 text-left">
          <h3 className="text-2xl font-bold text-purple-400 mb-2">{experience.company}</h3>
          <div className="text-xl font-semibold mb-2">{experience.role}</div>
          <div className="flex items-center gap-2 text-gray-400 mb-2 justify-start">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
          {experience.location && (
            <div className="flex items-center gap-2 text-gray-400 justify-start">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
          )}
        </div>

        {experience.project && (
          <div className="mb-4 text-left">
            <h4 className="text-lg font-semibold text-pink-400 mb-2">Project: {experience.project}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{experience.description}</p>
          </div>
        )}

        <div className="mb-6 text-left">
          <h5 className="text-lg font-semibold mb-3 text-blue-400">Key Contributions:</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            {experience.contributions.map((contribution, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="text-left">
          <h5 className="text-lg font-semibold mb-3 text-green-400">Technologies:</h5>
          <div className="flex flex-wrap gap-3 justify-start">
            {experience.techs.map((tech, i) => (
              <div
                key={tech}
                className="transform transition-all duration-300 hover:scale-110"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.05}s both`
                }}
              >
                <TechIcon techKey={tech} className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;