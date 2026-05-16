'use client';

import { motion } from 'framer-motion';

export default function GlassCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        borderColor: 'rgba(217, 164, 65, 0.5)',
        boxShadow: '0 0 50px rgba(217, 164, 65, 0.12)',
      }}
      className="glass-panel glass-panel-hover p-8 md:p-10 rounded-xl transition-all duration-500 group flex flex-col items-center text-center border-saffron/30"
      data-cursor-hover
    >
      <motion.div 
        className="mb-6 text-saffron"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      <h3 className="font-serif text-xl md:text-2xl text-ivory mb-4 tracking-[0.2em] uppercase">
        {title}
      </h3>

      <p className="text-sm md:text-base text-ivory/70 leading-relaxed font-sans font-light">
        {description}
      </p>
    </motion.div>
  );
}
