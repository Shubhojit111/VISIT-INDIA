"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Shorter duration (2.5s)

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1,
            },
          }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Main Content Stack */}
          <div className="relative z-10 flex flex-col items-center">
            {/* 1. EXPERIENCE */}
            <div className="overflow-hidden mb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block text-ivory/40 text-[9px] tracking-[0.8em] uppercase font-sans font-medium"
              >
                EXPERIENCE
              </motion.span>
            </div>

            {/* 2. INDIA (Hero Style) */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="font-serif text-[18vw] leading-none tracking-[0.05em] font-light select-none transform scale-y-[1.1]"
                style={{
                  WebkitTextStroke: "2px rgba(245, 232, 211, 0.8)",
                  color: "transparent",
                  textShadow: "0 0 120px rgba(217, 164, 65, 0.1)",
                }}
              >
                INDIA
              </motion.h1>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
              className="h-px w-40 md:w-56 bg-saffron/30 mt-4 mb-4"
            />

            {/* 3. A Curated Heritage Journey */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block text-ivory/60 text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans font-light italic"
              >
                A Curated Heritage Journey
              </motion.span>
            </div>
          </div>

          {/* 4. VISIT INDIA (Right Aligned) */}
          <div className="absolute bottom-10 right-10 left-10 flex flex-col items-end">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mb-1 text-right"
            >
              <span className="block text-ivory/20 text-[8px] tracking-[0.3em] uppercase font-sans">
                Powered By
              </span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.8,
                }}
                className="font-serif text-4xl md:text-3xl lg:text-4xl text-ivory tracking-[0.1em] font-light italic text-right"
              >
                VISIT <span className="text-saffron italic">INDIA</span>
              </motion.h2>
            </div>
          </div>

          {/* Subtle Decorative Grid */}
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 m-8 md:m-12" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
