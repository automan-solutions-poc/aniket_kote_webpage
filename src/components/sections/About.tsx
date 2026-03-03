import React from 'react';
import { MapPin } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { portfolioData } from '../../data/portfolio';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle={portfolioData.about.subtitle}>
          About Me
        </SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-lg text-white/70 leading-relaxed">
            {portfolioData.about.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {portfolioData.about.stats.map((stat, i) => (
                <div key={i}>
                  <h5 className="text-3xl font-bold text-accent">{stat.value}</h5>
                  <p className="text-xs uppercase tracking-widest opacity-40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass p-8 rounded-[2rem] flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
              <MapPin size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">Based in</h4>
            <p className="text-white/60 mb-6">{portfolioData.location}</p>
            <div className="w-full h-px bg-white/10 mb-6" />
            <h4 className="text-xl font-bold mb-2">Education</h4>
            <p className="text-white/60 text-sm">{portfolioData.education[0].degree} @ {portfolioData.education[0].institution.split(',')[0]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
