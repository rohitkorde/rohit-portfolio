import React from 'react';
import { personalInfo } from '../../../data/personal';

export const SummarySection: React.FC = () => {
  return (
    <section id="summary" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">
          <p className="text-lg leading-relaxed text-gray-300">
            {personalInfo.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
