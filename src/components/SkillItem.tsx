import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillItemProps {
  name: string;
  icon: LucideIcon;
  description: string;
  index: number;
  key?: any;
}

export const SkillItem = ({ name, icon: Icon, description, index }: SkillItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-6 glass rounded-2xl hover:border-accent/30 transition-all group cursor-default"
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-bg transition-all duration-300">
        <Icon size={20} />
      </div>
      <h4 className="font-bold text-lg">{name}</h4>
    </div>
    <p className="text-white/40 text-xs leading-relaxed">{description}</p>
  </motion.div>
);
