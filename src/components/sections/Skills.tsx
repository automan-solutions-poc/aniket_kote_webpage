import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { SkillItem } from '../SkillItem';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../Reveal';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <>
            <SectionHeading subtitle="My technical toolkit for solving complex problems.">
              Tech & Creative Stack
            </SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.skills.map((skill, index) => (
                <SkillItem key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
};
