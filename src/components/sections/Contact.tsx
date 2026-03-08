import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../Reveal';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
        <div className="glass rounded-[3rem] overflow-hidden">
          <div className="p-12 md:p-20 bg-accent text-bg text-center md:text-left">
            <div className="max-w-4xl mx-auto md:mx-0">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                Let's build something <br />amazing together.
              </h2>
              <p className="text-bg/70 text-xl mb-12 max-w-2xl">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <MagneticButton style={{ width: 'max-content' }}>
                  <a href={`mailto:${portfolioData.email}`} className="flex flex-col items-center md:items-start gap-4 p-6 bg-bg/10 rounded-2xl hover:bg-bg/20 transition-all group">
                    <div className="p-3 bg-bg/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xs uppercase font-bold opacity-60 mb-1">Email Me</p>
                      <p className="text-lg font-bold truncate">{portfolioData.email}</p>
                    </div>
                  </a>
                </MagneticButton>

                <MagneticButton className="w-full">
                  <div className="flex flex-col items-center md:items-start gap-4 p-6 bg-bg/10 rounded-2xl hover:bg-bg/20 transition-all group">
                    <div className="p-3 bg-bg/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xs uppercase font-bold opacity-60 mb-1">Call Me</p>
                      <p className="text-lg font-bold">{portfolioData.phone}</p>
                      <p className="text-sm opacity-60">{portfolioData.phoneAlt}</p>
                    </div>
                  </div>
                </MagneticButton>

                <MagneticButton className="w-full">
                  <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center md:items-start gap-4 p-6 bg-bg/10 rounded-2xl hover:bg-bg/20 transition-all group">
                    <div className="p-3 bg-bg/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Linkedin size={24} />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xs uppercase font-bold opacity-60 mb-1">LinkedIn</p>
                      <p className="text-lg font-bold">{portfolioData.firstName} {portfolioData.lastName}</p>
                    </div>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};
