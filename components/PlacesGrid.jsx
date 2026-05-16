'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const places = [
  {
    title: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[3/4]', // Vertical
  },
  {
    title: 'Taj Mahal',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-square', // Square
  },
  {
    title: 'Himalayas',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[2/3]', // Vertical
  },
  {
    title: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[16/9]', // Horizontal
  },
  {
    title: 'Jaipur Fort',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[4/3]', // Horizontal
  },
  {
    title: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1572688612411-536962228963?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[3/4]', // Vertical
  },
  {
    title: 'Goa Beaches',
    image: 'https://images.unsplash.com/photo-1596495578065-6f809e3b1d3d?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-square', // Square
  },
  {
    title: 'Agra',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[4/3]', // Horizontal
  },
];

export default function PlacesGrid() {
  return (
    <section className="relative bg-midnight py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              03 — LOOKBOOK
            </span>
          </div>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap uppercase">
            CAPTIVATING <span className="font-serif italic text-saffron/80 lowercase tracking-normal">landscapes</span>
          </h2>
        </motion.div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {places.map((place, index) => (
            <motion.div
              key={place.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid ${place.aspect}`}
              data-cursor-hover
            >
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
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
