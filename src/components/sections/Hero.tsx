import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Languages, Download, Github, Mail, Camera } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { TypingText } from '../TypingText';
import profileImage from '../../assets/image.jpg';
import { portfolioData } from '../../data/portfolio';

const STORAGE_KEY = "portfolio_profile_image";

export const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
  const [profileImg, setProfileImg] = useState<string>(profileImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImg = localStorage.getItem(STORAGE_KEY);
    if (savedImg) {
      setProfileImg(savedImg);
    }
  }, []);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImg(base64String);
        localStorage.setItem(STORAGE_KEY, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              {portfolioData.hero.availability}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-[0.9] mb-6 tracking-tighter"
          >
            {portfolioData.hero.greeting} <br />
            <span className="text-gradient">{portfolioData.name}</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl">
              <Languages size={18} className="text-accent" />
              <span className="text-lg font-medium italic opacity-80">Namaste | नमस्ते</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-10 text-xl md:text-2xl font-medium"
          >
            <span className="opacity-50">3 Mantras :</span>{" "}
            <TypingText text={portfolioData.hero.mantras} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton>
              <a 
                href={portfolioData.resumeLink} 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-bg rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-accent/20"
              >
                <Download size={20} />
                Data Analyst Resume
              </a>
            </MagneticButton>
            <div className="flex gap-3">
              <MagneticButton>
                <a href={portfolioData.github} target="_blank" rel="noreferrer" className="p-4 glass rounded-2xl hover:text-accent transition-all block">
                  <Github size={24} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href={`mailto:${portfolioData.email}`} className="p-4 glass rounded-2xl hover:text-accent transition-all block">
                  <Mail size={24} />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <motion.div 
              animate={{ rotate: [6, 8, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent rounded-[3rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" 
            />
            <div className="absolute inset-0 border-2 border-accent/30 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />

            <div 
              className="relative w-full h-full overflow-hidden rounded-[3rem] cursor-pointer"
              onClick={handleImageClick}
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={profileImg} 
                alt={portfolioData.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/seed/aniket/800/800";
                }}
              />
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
