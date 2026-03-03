import React from 'react';
import { motion } from 'motion/react';
import { Code2, Github, ExternalLink } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  demoLink?: string;
  index: number;
  key?: any;
}

export const ProjectCard = ({ title, description, tags, link, demoLink, index }: ProjectCardProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -10 }}
    className="glass rounded-2xl overflow-hidden flex flex-col h-full group"
  >
    <div className="p-8 flex-grow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-500">
          <Code2 size={24} />
        </div>
        <div className="flex gap-2">
          {link && link !== "#" && (
            <MagneticButton>
              <a href={link} target="_blank" rel="noreferrer" className="p-2 hover:text-accent transition-colors block">
                <Github size={20} />
              </a>
            </MagneticButton>
          )}
          {demoLink && demoLink !== "#" && (
            <MagneticButton>
              <a href={demoLink} target="_blank" rel="noreferrer" className="p-2 hover:text-accent transition-colors block">
                <ExternalLink size={20} />
              </a>
            </MagneticButton>
          )}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 rounded-md border border-white/10 group-hover:border-accent/30 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);
