import React from 'react';
import { Mail, MapPin, ExternalLink, Code } from 'lucide-react';
import { TechIcon } from '../../common/TechIcon';
import { personalInfo } from '../../../data/personal';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

export const HeroSection: React.FC = () => {
  const scrollY = useScrollPosition();

  const coreTechs = ['java', 'spring', 'aws', 'docker', 'kubernetes', 'jenkins', 'postgresql', 'kafka'];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div 
        className="max-w-4xl mx-auto text-center transform transition-all duration-1000"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <Code size={48} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          {personalInfo.name}
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 space-y-2">
          <p className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            {personalInfo.title}
          </p>
          <p className="text-gray-300">
            {personalInfo.subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={20} />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={20} />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6 text-gray-300">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {coreTechs.map((tech, index) => (
              <div
                key={tech}
                className="transform transition-all duration-500 hover:scale-110"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <TechIcon techKey={tech} className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>

        <a 
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <ExternalLink size={20} />
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default HeroSection;