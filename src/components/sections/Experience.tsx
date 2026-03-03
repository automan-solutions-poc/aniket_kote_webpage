import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { ExperienceItem } from '../ExperienceItem';
import { portfolioData } from '../../data/portfolio';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="My professional journey in software and data.">
          Experience
        </SectionHeading>

        <div className="max-w-4xl">
          {portfolioData.experience.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
