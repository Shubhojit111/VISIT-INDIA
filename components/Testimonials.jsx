'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    rating: 5,
    quote: 'Every detail was already thought through. We woke up, opened the door, and the day unfolded. The dinner in Gion is something I still dream about.',
    author: 'AANYA MEHTA',
    location: 'Bengaluru — Tokyo, March 2023',
    image: 'https://images.unsplash.com/photo-1542051841-366ae206539e?auto=format&fit=crop&w=600&q=80',
  },
  {
    rating: 5,
    quote: 'This trip was an absolute dream! The hosts were incredible, and every experience felt authentic and deeply personal. Highly recommend!',
    author: 'JOHN DOE',
    location: 'New York — Kyoto, April 2023',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
  },
  {
    rating: 5,
    quote: 'From the bustling streets of Tokyo to the serene temples of Kyoto, every moment was perfectly curated. A truly unforgettable journey.',
    author: 'JANE SMITH',
    location: 'London — Osaka, May 2023',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-midnight py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              06 — IN THEIR WORDS
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap">
            WHAT PAST <span className="font-serif italic text-saffron/80 lowercase tracking-normal">travelers</span> SAY
          </h2>
          
          <div className="flex items-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-ivory/60 text-sm ml-2">4.97 • 142 reviews</span>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={currentIndex} // Key for AnimatePresence to detect changes and trigger animation
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#141414] rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="font-serif text-2xl md:text-3xl text-ivory leading-relaxed mb-8">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>
            <div className="mt-auto">
              <h4 className="text-sm tracking-[0.2em] text-ivory font-sans uppercase mb-1">
                {currentTestimonial.author}
              </h4>
              <p className="text-sm text-ivory/50 font-serif italic">
                {currentTestimonial.location}
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-full rounded-lg overflow-hidden">
            <Image
              src={currentTestimonial.image}
              alt="Testimonial image"
              fill
              className="object-cover"
            />
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 transition-colors duration-300"
              data-cursor-hover
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="text-ivory/60 text-sm">
              {`${(currentIndex + 1).toString().padStart(2, '0')} / ${testimonials.length.toString().padStart(2, '0')}`}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 transition-colors duration-300"
              data-cursor-hover
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
