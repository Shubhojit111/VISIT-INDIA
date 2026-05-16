'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PolaroidCard({ image, caption, index, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: -3 + index * 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: -2 + index * 1 }}
      transition={{ duration: 0.8, delay: delay + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ 
        y: -12,
        scale: 1.05,
        rotate: 0,
        boxShadow: '0 0 50px rgba(217, 164, 65, 0.22)',
        borderColor: 'rgba(217, 164, 65, 0.55)',
        transition: { duration: 0.4 }
      }}
      className="flex-shrink-0 w-[120px] md:w-[136px] h-[160px] md:h-[180px] rounded-xl border border-ivory/30 bg-midnight/60 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-colors duration-500 flex flex-col overflow-hidden transform"
      data-cursor-hover
    >
      <div className="relative w-full h-[65%]">
        <Image
          src={image}
          alt={caption.replace('<br/>', ' ')}
          fill
          className="object-cover"
          sizes="136px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-50" />
      </div>
      <div className="flex-1 px-3 pb-3 pt-2 flex items-end">
        <p 
          className="text-[10px] md:text-[11px] text-ivory/90 font-sans tracking-wide leading-snug text-left"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      </div>
    </motion.div>
  );
}
