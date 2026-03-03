import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  role: string;
  description: string[];
  index: number;
  key?: any;
}

export const ExperienceItem = ({ title, company, period, role, description, index }: ExperienceItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
    className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-accent rounded-full shadow-[0_0_10px_rgba(120,226,160,0.5)]" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-accent font-medium">{company}</p>
        <p className="text-white/40 text-xs italic mt-1">{role}</p>
      </div>
      <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 h-fit">
        {period}
      </span>
    </div>
    <ul className="space-y-2">
      {description.map((item: string, i: number) => (
        <li key={i} className="text-white/60 text-sm flex gap-2">
          <ChevronRight size={14} className="text-accent shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
