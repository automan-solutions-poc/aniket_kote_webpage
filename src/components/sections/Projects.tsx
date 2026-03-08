import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { ProjectCard } from '../ProjectCard';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../Reveal';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading subtitle="Handpicked projects showcasing automation and data analysis.">
            Featured Projects
          </SectionHeading>
          <a 
            href={portfolioData.github} 
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 glass rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            View All on GitHub <ChevronRight size={16} />
          </a>
        </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  {...project}
                />
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
};
