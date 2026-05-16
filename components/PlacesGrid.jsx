'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const places = [
  {
    title: 'The Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-2 md:row-span-2', // Large focus
  },
  {
    title: 'Varanasi Ghats',
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-1 md:row-span-1', // Small landscape
  },
  {
    title: 'Hawa Mahal',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-1 md:row-span-2', // Tall portrait
  },
  {
    title: 'Munnar Tea Hills',
    location: 'Munnar, Kerala',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-1 md:row-span-1', // Small square
  },
  {
    title: 'Ladakh Peaks',
    location: 'Ladakh, Himalayas',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-2 md:row-span-1', // Wide landscape
  },
  {
    title: 'Golden Temple',
    location: 'Amritsar, Punjab',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-1 md:row-span-1', // Small square
  },
  {
    title: 'Marine Drive',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1570160897040-30430aac2c51?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-1 md:row-span-1', // Small square
  },
  {
    title: 'City Palace',
    location: 'Udaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'md:col-span-1 md:row-span-1', // Small square
  },
];

export default function PlacesGrid() {
  return (
    <section id="places-grid" className="relative bg-midnight py-16 md:py-20 overflow-hidden">
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
              03 — LOOKBOOK
            </span>
          </div>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap uppercase">
            CAPTIVATING <span className="font-serif italic text-saffron/80 lowercase tracking-[0.05em] text-[1.1em]">landscapes</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {places.map((place, index) => (
            <motion.div
              key={place.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[2rem] group cursor-pointer shadow-2xl ${place.gridClass}`}
              data-cursor-hover
            >
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent opacity-60 group-hover:opacity-95 transition-all duration-700" />
              
              {/* Info Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
                <span className="text-saffron text-xs tracking-[0.3em] font-sans uppercase mb-3">
                  {place.location}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-ivory tracking-wide leading-tight">
                  {place.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
