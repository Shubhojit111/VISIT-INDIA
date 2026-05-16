'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const routeDays = [
  {
    day: 'Day 1-3',
    title: 'DELHI',
    subtitle: 'The Historic Capital',
    description: 'Arrive in Delhi and dive straight into the bustling streets of Old Delhi. Visit the iconic Red Fort, Jama Masjid, and take a rickshaw ride through Chandni Chowk. Experience the contrast in New Delhi with India Gate and the Lotus Temple.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
  },
  {
    day: 'Day 4-6',
    title: 'JAIPUR',
    subtitle: 'The Pink City',
    description: 'Travel to Rajasthan and explore Jaipur. Marvel at the intricate façade of the Hawa Mahal, wander through the sprawling Amber Fort, and discover the royal heritage at the City Palace.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
  },
  {
    day: 'Day 7-10',
    title: 'KERALA',
    subtitle: 'God\'s Own Country',
    description: 'Fly south to the tropical paradise of Kerala. Glide through the tranquil backwaters on a traditional houseboat, walk through lush tea plantations in Munnar, and enjoy the serene beaches before your departure.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  },
  {
    day: 'Day 11-12',
    title: 'KOLKATA',
    subtitle: 'The Cultural Capital',
    description: 'Extend your trip to the vibrant city of Kolkata. Walk along the Hooghly River, visit the majestic Victoria Memorial, and taste some of the finest street food and sweets in India.',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
  },
];

export default function DetailedRoute() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="detailed-route" ref={containerRef} className="relative bg-midnight py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
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
              02 — THE PATH
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex flex-wrap items-center gap-4 md:gap-6 uppercase">
            DELHI, JAIPUR, KERALA <span className="font-serif italic text-saffron/80 lowercase tracking-normal">then</span> KOLKATA
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Sticky Left side - Line Animation / Map concept */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-44 h-[60vh] flex flex-col items-center justify-between py-10 hidden lg:flex">
              {/* Vertical Line Background */}
              <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[2px] bg-white/10" />
              
              {/* Animated Line Progress */}
              <motion.div 
                className="absolute top-10 left-1/2 -translate-x-1/2 w-[2px] bg-saffron origin-top"
                style={{ height: lineHeight, maxHeight: 'calc(100% - 80px)' }}
              />

              {/* Route Nodes */}
              {routeDays.map((item, index) => (
                <div key={index} className="relative z-10 w-4 h-4 rounded-full bg-midnight border-2 border-saffron flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-ivory" />
                  <div className="absolute left-8 whitespace-nowrap">
                    <span className="text-sm font-sans tracking-[0.2em] text-ivory/60 uppercase">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Scrolling Cards */}
          <div className="lg:col-span-7 space-y-24">
            {routeDays.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-saffron font-sans text-sm tracking-[0.2em]">{item.day}</span>
                  <div className="h-px flex-grow bg-white/10" />
                </div>
                
                <h3 className="font-serif text-3xl md:text-5xl text-ivory tracking-wide">
                  {item.title} <span className="text-xl md:text-2xl text-ivory/50 italic font-light">— {item.subtitle}</span>
                </h3>
                
                <p className="text-lg text-ivory/70 font-sans font-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden mt-6">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
