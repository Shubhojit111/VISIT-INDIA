'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    rating: 5,
    quote: 'Every detail was already thought through. We woke up, opened the door, and the day unfolded. The dinner in Kochi is something I still dream about.',
    author: 'AANYA MEHTA',
    location: 'Bengaluru — Kochi, March 2025',
    image: 'https://images.unsplash.com/photo-1590603740183-980e7f8300da?auto=format&fit=crop&w=800&q=80',
  },
  {
    rating: 5,
    quote: 'The golden palaces of Jaipur took our breath away. The curated heritage walks and local encounters made this more than just a tour—it was a deep dive into culture.',
    author: 'DAVID CHEN',
    location: 'Singapore — Jaipur, October 2024',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
  },
  {
    rating: 5,
    quote: 'Floating through the Kerala backwaters on a private houseboat was the most peaceful experience of my life. Visit India handled everything perfectly.',
    author: 'SARAH JENKINS',
    location: 'London — Alleppey, January 2025',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  },
  {
    rating: 5,
    quote: 'Old Delhi’s street food is a sensory explosion. Our guides knew all the best hidden spots that we never would have found on our own. Truly exceptional.',
    author: 'MARCO ROSSI',
    location: 'Milan — Delhi, February 2025',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
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

  return (
    <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              05 — IN THEIR WORDS
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap uppercase">
            WHAT PAST <span className="font-serif italic text-saffron/80 lowercase tracking-normal text-[1.1em]">travelers</span> SAY
          </h2>
          
          <div className="flex items-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-saffron">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-ivory/50 text-xs ml-2 tracking-widest uppercase">4.97 • 142 reviews</span>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative group max-w-[900px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#141414] rounded-3xl overflow-hidden flex flex-col lg:flex-row relative"
            >
              {/* Large Quote Icon */}
              <div className="absolute top-8 right-8 text-[#222] select-none pointer-events-none hidden lg:block">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.899 14.917 16 16.017 16H19.017C19.568 16 20.017 15.551 20.017 15V9C20.017 8.449 19.568 8 19.017 8H15.017C14.466 8 14.017 8.449 14.017 9V11C14.017 11.551 13.568 12 13.017 12H12.017V4H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.899 2.917 16 4.017 16H7.017C7.568 16 8.017 15.551 8.017 15V9C8.017 8.449 7.568 8 7.017 8H3.017C2.466 8 2.017 8.449 2.017 9V11C2.017 11.551 1.568 12 1.017 12H0.017V4H10.017V15C10.017 18.314 7.331 21 4.017 21H2.017Z" />
                </svg>
              </div>

              {/* Left Content */}
              <div className="p-10 md:p-12 lg:w-[70%] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-saffron">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory/90 leading-tight md:leading-snug mb-12 italic tracking-wide">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="text-sm md:text-base tracking-[0.25em] text-ivory font-sans font-medium uppercase mb-2">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-sm md:text-base text-ivory/40 font-serif italic tracking-[0.05em]">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>

                  {/* Desktop Pagination */}
                  <div className="hidden md:flex items-center gap-6">
                    <button
                      onClick={handlePrev}
                      className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-ivory hover:bg-saffron hover:text-midnight transition-all duration-500"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <span className="text-ivory/40 font-sans text-sm tracking-widest">
                      {`${(currentIndex + 1).toString().padStart(2, '0')} / ${testimonials.length.toString().padStart(2, '0')}`}
                    </span>
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-ivory hover:bg-saffron hover:text-midnight transition-all duration-500"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full lg:w-[30%] h-[300px] lg:h-auto p-6 lg:p-10 lg:pl-0">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  currentIndex === index ? 'w-8 bg-saffron' : 'w-2 bg-ivory/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
