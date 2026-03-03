import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name} — Crafted with code & creativity ⚡
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-accent transition-colors">Home</a>
          <a href="#about" className="text-white/40 hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-white/40 hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-white/40 hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
