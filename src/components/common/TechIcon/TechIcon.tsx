import React from 'react';
import { technologies } from '../../../data/technologies';

interface TechIconProps {
  techKey: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ 
  techKey, 
  className = "w-8 h-8" 
}) => {
  const tech = technologies[techKey];
  if (!tech) return null;
  
  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block"
      title={tech.name}
    >
      <div className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg filter hover:brightness-110 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm border border-white/20`}>
        <img 
          src={tech.logo} 
          alt={tech.name}
          className={`${className} object-contain p-1`}
          onError={(e) => {
            console.log(`Failed to load logo for ${tech.name}:`, tech.logo);
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextSibling) {
              (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex';
            }
          }}
          onLoad={() => {
            console.log(`Successfully loaded logo for ${tech.name}:`, tech.logo);
          }}
        />
        <div 
          className={`${className} hidden items-center justify-center text-2xl`}
          style={{ fontSize: className.includes('w-12') ? '2rem' : '1.5rem' }}
        >
          {tech.fallback}
        </div>
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
        {tech.name}
      </div>
    </a>
  );
};
