'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Cta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80"
          alt="Indian palace at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-ivory tracking-wide mb-6 leading-tight">
            09 — Ready to experience the magic of India?
          </h2>
          <p className="text-lg md:text-xl text-ivory/80 font-sans font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us on this curated 12-day journey through the most beautiful and historic landscapes of the subcontinent.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#FDF0D5] to-[#E3C598] text-midnight text-lg md:text-xl font-serif rounded-[8px] hover:from-saffron hover:to-saffron hover:shadow-[0_0_50px_rgba(217,164,65,0.4)] transition-all duration-500"
            data-cursor-hover
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
