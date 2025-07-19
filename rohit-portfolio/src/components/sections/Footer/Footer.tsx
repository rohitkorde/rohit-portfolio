import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../../data/personal';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-gray-300 mb-6">
            Open to exciting opportunities in cloud-native development and microservices architecture
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              Email
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink size={20} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="text-gray-400 text-sm">
          <p>© 2025 Rohit Korde. Crafted with passion and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
