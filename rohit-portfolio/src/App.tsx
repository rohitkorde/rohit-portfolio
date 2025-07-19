import React from 'react';
import { AnimatedBackground } from './components/common/AnimatedBackground/AnimatedBackground';
import { HeroSection } from './components/sections/HeroSection/HeroSection';
import { SummarySection } from './components/sections/SummarySection/SummarySection';
import { TimelineSection } from './components/sections/TimelineSection/TimelineSection';
import { EducationSection } from './components/sections/EducationSection/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection/SkillsSection';
import { Footer } from './components/sections/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <HeroSection />
      <SummarySection />
      <TimelineSection />
      <EducationSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;