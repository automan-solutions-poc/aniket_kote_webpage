import React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, opacity' }}
      >
        {children}
      </motion.div>
    </div>
  );
};
