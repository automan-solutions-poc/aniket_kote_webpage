import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../Reveal';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <>
            <SectionHeading subtitle="Academic background and certifications.">
              Education
            </SectionHeading>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="glass p-8 rounded-3xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <span className="text-accent font-bold">{edu.period}</span>
                  </div>
                  <p className="text-white/60 mb-2">{edu.institution}</p>
                  <p className="text-white/40 text-xs mb-4 italic">{edu.focus}</p>
                  <div className="w-12 h-1 bg-accent/30 rounded-full" />
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
};
