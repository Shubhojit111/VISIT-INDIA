'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TimelineItem({ days, city, images, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex items-start gap-4 md:gap-8"
    >
      {/* Text Content */}
      <div className="w-[85px] md:w-[100px] flex-shrink-0 text-right pt-2">
        <div className="mb-1">
          <span className="text-[13px] md:text-sm text-ivory/80 font-serif">{days}</span>
        </div>
        <h3 className="font-sans text-lg md:text-xl font-bold text-ivory tracking-wide">{city}</h3>
      </div>

      {/* Timeline Node */}
      <div className="flex flex-col items-center pt-2 relative z-10 flex-shrink-0 w-4">
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#D9A441] shadow-[0_0_15px_rgba(217,164,65,0.8)]" />
      </div>

      {/* Images Content */}
      <div className="flex-1 pb-4 flex gap-2 md:gap-4 hover:gap-6 transition-all duration-500 pl-2 md:pl-4">
        {images.map((img, imgIndex) => (
          <motion.div
            key={imgIndex}
            whileHover={{ 
              y: -12, 
              scale: 1.05,
              zIndex: 10,
              transition: { duration: 0.3 }
            }}
            className="relative w-[110px] md:w-[150px] lg:w-[180px] aspect-[4/3] border-[3px] border-white rounded-sm overflow-hidden shadow-2xl"
            style={{ 
              transform: `rotate(${-3 + imgIndex * 6}deg)`, 
              marginTop: imgIndex === 1 ? '20px' : '0px'
            }}
            data-cursor-hover
          >
            <Image
              src={img}
              alt={`${city} experience`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 110px, (max-width: 1024px) 150px, 180px"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
