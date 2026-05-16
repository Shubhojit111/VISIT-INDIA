'use client';

import { motion } from 'framer-motion';

export default function MarqueeBanner() {
  const words = ["VISIT INDIA", "INCREDIBLE INDIA", "EXPLORE", "DISCOVER", "TASTE", "FEEL"];
  
  return (
    <div className="bg-saffron py-6 md:py-8 overflow-hidden flex items-center border-y border-ivory/10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex whitespace-nowrap w-max"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, j) => (
              <div key={`${i}-${j}`} className="flex items-center">
                <span className="text-midnight font-serif text-3xl md:text-5xl tracking-[0.2em] font-medium mx-8">
                  {word}
                </span>
                <span className="text-midnight/50 text-2xl mx-4">•</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
